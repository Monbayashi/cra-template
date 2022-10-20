import { createContext, useContext, useReducer } from 'react';

type Action = {
  type: 'update';
  time: string;
  datas: {
    at: string;
    duration: string;
    value: string;
  }[];
};

type Dispatch = (action: Action) => void;

type State = {
  time: string;
  datas: {
    at: string;
    duration: string;
    value: string;
  }[];
};

type ProviderProps = {
  children: React.ReactNode;
};

const CommandScheduleContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined,
);

const CommandScheduleReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'update': {
      return { time: state.time, datas: state.datas };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const CommandScheduleProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(CommandScheduleReducer, {
    time: '未受信',
    datas: [],
  });

  const value = { state, dispatch };

  return (
    <CommandScheduleContext.Provider value={value}>{children}</CommandScheduleContext.Provider>
  );
};

const useCommandSchedule = () => {
  const context = useContext(CommandScheduleContext);
  if (context === undefined) {
    throw new Error('useCommandSchedule must be used within a CommandScheduleProvider');
  }
  return context;
};

export { CommandScheduleProvider, useCommandSchedule };
