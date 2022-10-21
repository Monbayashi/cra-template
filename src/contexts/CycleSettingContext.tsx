import { createContext, useCallback, useContext, useEffect, useReducer } from 'react';

import { getRandom } from '../utils/random';
import { useSvSettingStates } from './SvSettingContext';
import { useTmSettingStates } from './TmSettingContext';
import { useWebsocketEvents } from './WebsocketContext';

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

const CycleSettingEventsContext = createContext<Dispatch | undefined>(undefined);
const CycleSettingStatesContext = createContext<State | undefined>(undefined);

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
    isAutoSend: false,
    sendCycle: 5000,
  });

  // context
  const webSocketEvent = useWebsocketEvents();
  const tmSettingState = useTmSettingStates();
  const svSettingState = useSvSettingStates();

  const callRegistData = useCallback(() => {
    const resultTm = tmSettingState.tms.reduce((pre, cur) => {
      const result: { [key: string]: string } = { ...pre };
      result[cur.name] = tmSettingState.isRandom
        ? getRandom(tmSettingState.randomMin, tmSettingState.randomMax).toString()
        : cur.value.toString();
      return result;
    }, {} as { [key: string]: string });

    const resultSv = svSettingState.svs.reduce((pre, cur) => {
      const result: { [key: string]: string } = { ...pre };
      result[cur.name] = svSettingState.isRandom
        ? getRandom(0, 1).toString()
        : cur.value.toString();
      return result;
    }, {} as { [key: string]: string });
    webSocketEvent.wsRegistData([{ ...resultTm, ...resultSv }]);
  }, [webSocketEvent, tmSettingState, svSettingState]);

  useEffect(() => {
    let timer: undefined | number;
    if (state.isAutoSend) {
      timer = window.setInterval(() => {
        callRegistData();
      }, state.sendCycle);
    }
    return () => window.clearInterval(timer);
  }, [state, callRegistData]);

  return (
    <CycleSettingEventsContext.Provider value={dispatch}>
      <CycleSettingStatesContext.Provider value={state}>
        {children}
      </CycleSettingStatesContext.Provider>
    </CycleSettingEventsContext.Provider>
  );
};

const useCycleSettingStates = () => {
  const context = useContext(CycleSettingStatesContext);
  if (context === undefined) {
    throw new Error('useCycleSettingStates must be used within a CycleSettingProvider');
  }
  return context;
};

const useCycleSettingEvents = () => {
  const context = useContext(CycleSettingEventsContext);
  if (context === undefined) {
    throw new Error('useCycleSettingEvents must be used within a CycleSettingProvider');
  }
  return context;
};

export { CycleSettingProvider, useCycleSettingStates, useCycleSettingEvents };
