import { createContext, useContext, useReducer } from 'react';

import { createAtTimeMin } from '../utils/dateTime';

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
    dispAt: string;
    at: string;
    duration: string;
    value: string;
  }[];
};

type ProviderProps = {
  children: React.ReactNode;
};

const CommandScheduleEventsContext = createContext<Dispatch | undefined>(undefined);
const CommandScheduleStatesContext = createContext<State | undefined>(undefined);

const CommandScheduleReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'update': {
      const sortActionDatas = action.datas.sort((a, b) => (a.at > b.at ? 1 : -1));
      const olderSortActionDataAt = sortActionDatas[0].at;
      console.log(sortActionDatas);
      const sortStateDatas = state.datas.sort((a, b) => (a.at > b.at ? 1 : -1));
      const filterStateDatas = sortStateDatas.filter(
        (sData) => sData.at < olderSortActionDataAt && sData.at >= createAtTimeMin(),
      );
      const resultDatas = [...filterStateDatas, ...sortActionDatas].map((res) => ({
        ...res,
        dispAt: atToDispAt(res.at),
      }));
      return { time: action.time, datas: resultDatas };
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

  return (
    <CommandScheduleEventsContext.Provider value={dispatch}>
      <CommandScheduleStatesContext.Provider value={state}>
        {children}
      </CommandScheduleStatesContext.Provider>
    </CommandScheduleEventsContext.Provider>
  );
};

const useCommandScheduleStates = () => {
  const context = useContext(CommandScheduleStatesContext);
  if (context === undefined) {
    throw new Error('useCommandSchedule must be used within a CommandScheduleProvider');
  }
  return context;
};

const useCommandScheduleEvents = () => {
  const context = useContext(CommandScheduleEventsContext);
  if (context === undefined) {
    throw new Error('useCommandScheduleEvents must be used within a CommandScheduleProvider');
  }
  return context;
};

export { CommandScheduleProvider, useCommandScheduleStates, useCommandScheduleEvents };

const atToDispAt = (at: string) => {
  const year = at.slice(0, 4);
  const month = at.slice(4, 6);
  const date = at.slice(6, 8);
  const hour = at.slice(8, 10);
  const minute = at.slice(10, 12);
  return `${year}/${month}/${date} ${hour}:${minute}`;
};
