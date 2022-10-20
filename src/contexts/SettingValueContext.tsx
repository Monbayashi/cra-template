import { createContext, useContext, useReducer } from 'react';

type Action =
  | {
      type: 'update';
      time: string;
      datas: {
        name: string;
        dbName: string;
        value: string;
      }[];
    }
  | { type: 'unkown' }; // typeguard

type Dispatch = (action: Action) => void;

type State = {
  time: string;
  datas: {
    name: string;
    dbName: string;
    value: string;
  }[];
};

type ProviderProps = {
  children: React.ReactNode;
};

const SettingValueContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined,
);

const settingValueReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'update': {
      return {
        time: action.time,
        datas: action.datas,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const SettingValueProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(settingValueReducer, {
    time: '未受信',
    datas: [],
  });
  const value = { state, dispatch };
  return <SettingValueContext.Provider value={value}>{children}</SettingValueContext.Provider>;
};

const useSettingValue = () => {
  const context = useContext(SettingValueContext);
  if (context === undefined) {
    throw new Error('useSettingValue must be used within a SettingValueProvider');
  }
  return context;
};

export { SettingValueProvider, useSettingValue };
