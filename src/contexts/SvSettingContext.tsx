import { createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { getRandom } from '../utils/random';

type Action =
  | {
      type: 'update';
      isRandom: boolean;
      svs: { id: string; name: string; value: number }[];
    }
  | { type: 'sended' }
  | { type: 'unkown' }; // typeguard

type Dispatch = (action: Action) => void;

type State = {
  isRandom: boolean;
  svs: {
    id: string;
    name: string;
    value: number;
  }[];
};

type ProviderProps = {
  children: React.ReactNode;
};

const SvSettingContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

const svSettingReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'update': {
      return {
        isRandom: action.isRandom,
        svs: action.svs,
      };
    }
    case 'sended': {
      if (!state.isRandom) return state;
      const { svs, ...args } = state;
      const randomSvs = svs.map<State['svs'][number]>((tm) => ({
        id: tm.id,
        name: tm.name,
        value: getRandom(1, 0),
      }));
      return { ...args, svs: randomSvs };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const SvSettingProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(svSettingReducer, {
    isRandom: true,
    svs: [{ id: uuidv4(), name: 'SV1', value: 1 }],
  });

  const value = { state, dispatch };

  return <SvSettingContext.Provider value={value}>{children}</SvSettingContext.Provider>;
};

const useSvSetting = () => {
  const context = useContext(SvSettingContext);
  if (context === undefined) {
    throw new Error('useSvSetting must be used within a SvSettingProvider');
  }
  return context;
};

export { SvSettingProvider, useSvSetting };
