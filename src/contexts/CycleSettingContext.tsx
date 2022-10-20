import { createContext, useContext, useReducer } from 'react';

type Action =
  | {
      type: 'update';
      isAutoSend: boolean;
      sendCycle: number;
    }
  | { type: 'unkown' }; // typeguard

type Dispatch = (action: Action) => void;

type State = {
  isAutoSend: boolean;
  sendCycle: number;
};

type ProviderProps = {
  children: React.ReactNode;
};

const CycleSettingContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined,
);

const cycleSettingReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'update': {
      return {
        isAutoSend: action.isAutoSend,
        sendCycle: action.sendCycle,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const CycleSettingProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(cycleSettingReducer, {
    isAutoSend: true,
    sendCycle: 1000,
  });

  const value = { state, dispatch };

  return <CycleSettingContext.Provider value={value}>{children}</CycleSettingContext.Provider>;
};

const useCycleSetting = () => {
  const context = useContext(CycleSettingContext);
  if (context === undefined) {
    throw new Error('useCycleSetting must be used within a CycleSettingProvider');
  }
  return context;
};

export { CycleSettingProvider, useCycleSetting };
