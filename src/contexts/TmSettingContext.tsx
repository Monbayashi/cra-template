import { createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { getRandom } from '../utils/random';

type Action =
  | {
      type: 'update';
      isRandom: boolean;
      randomMax: number;
      randomMin: number;
      tms: { id: string; name: string; value: number }[];
    }
  | { type: 'sended' }
  | { type: 'unkown' }; // typeguard

type Dispatch = (action: Action) => void;

type State = {
  isRandom: boolean;
  randomMax: number;
  randomMin: number;
  tms: {
    id: string;
    name: string;
    value: number;
  }[];
};

type ProviderProps = {
  children: React.ReactNode;
};

const TmSettingEventsContext = createContext<Dispatch | undefined>(undefined);
const TmSettingStatesContext = createContext<State | undefined>(undefined);

const tmSettingReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'update': {
      return {
        isRandom: action.isRandom,
        randomMax: action.randomMax,
        randomMin: action.randomMin,
        tms: action.tms,
      };
    }
    case 'sended': {
      if (!state.isRandom) return state;
      const { tms, ...args } = state;
      const randomTms = tms.map<State['tms'][number]>((tm) => ({
        id: tm.id,
        name: tm.name,
        value: getRandom(state.randomMax, state.randomMin),
      }));
      return { ...args, tms: randomTms };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const TmSettingProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(tmSettingReducer, {
    isRandom: true,
    randomMax: 1000,
    randomMin: 0,
    tms: [{ id: uuidv4(), name: 'TM1', value: 1 }],
  });

  return (
    <TmSettingEventsContext.Provider value={dispatch}>
      <TmSettingStatesContext.Provider value={state}>{children}</TmSettingStatesContext.Provider>
    </TmSettingEventsContext.Provider>
  );
};

const useTmSettingStates = () => {
  const context = useContext(TmSettingStatesContext);
  if (context === undefined) {
    throw new Error('useTmSettingState must be used within a TmSettingProvider');
  }
  return context;
};

const useTmSettingEvents = () => {
  const context = useContext(TmSettingEventsContext);
  if (context === undefined) {
    throw new Error('useTmSettingEvent must be used within a TmSettingProvider');
  }
  return context;
};

export { TmSettingProvider, useTmSettingStates, useTmSettingEvents };
