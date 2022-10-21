import { createContext, useCallback, useContext, useRef, useState } from 'react';

import { createAtTimeMin, createAtTimeSec, createNowUpdateTime } from '../utils/dateTime';
import { useCommandScheduleEvents } from './CommandScheduleContext';
import { useSettingValueEvents } from './SettingValueContext';

type Dispatch = {
  wsConnect: (url: string) => void;
  wsDisConnect: () => void;
  wsRegistData: (datas: { [key: string]: string }[]) => void;
};

type State = {
  status: 0 | 1;
};

type ProviderProps = {
  children: React.ReactNode;
};

type SettingMessage = {
  event: 'setting';
  data: {
    opmode?: string;
    peakshaving?: string;
    psreference?: string;
    psstart?: string;
    psend?: string;
    socuperr_on?: string;
    socupwarn_on?: string;
    soclorerr_on?: string;
    soclowarn_on?: string;
    socuperr_re?: string;
    socupwarn_re?: string;
    soclorerr_re?: string;
    soclowarn_re?: string;
    socing?: string;
    pving?: string;
    pvreference?: string;
    pvstart?: string;
    pvend?: string;
  }[];
};

type ControllerMessage = {
  event: 'controller';
  data: {
    at: string;
    duration: string;
    value: string;
  }[];
};

const WebSocketEventsContext = createContext<Dispatch | undefined>(undefined);
const WebSocketStatesContext = createContext<State | undefined>(undefined);

const WebSocketContextProvider = ({ children }: ProviderProps) => {
  const ws = useRef<WebSocket | null>(null);
  const [status, setStatus] = useState<0 | 1>(0);
  // useContext
  const settingValueDispatch = useSettingValueEvents();
  const commandScheduleDispatch = useCommandScheduleEvents();

  // websocket接続
  const wsConnect = useCallback((url: string) => {
    const socket = new WebSocket(url);
    // コネクションオープンイベント
    socket.onopen = () => {
      setStatus(1);
      const resendshedule = { event: 'resendschedule', data: [{ at: createAtTimeMin() }] };
      setTimeout(() => socket.send(JSON.stringify(resendshedule)), 500);
    };
    // コネクションクローズイベント
    socket.onclose = () => setStatus(0);
    // メッセージ受信イベント
    socket.onmessage = (ent) => {
      const objMsg = JSON.parse(ent.data) as ControllerMessage | SettingMessage;
      if (objMsg.event === 'setting') {
        // N-PMS設定 イベント
        if (objMsg.data.length === 0) return;
        const resDatas = Object.entries(objMsg.data[0]).map(([key, value]) => ({
          dbName: key,
          value,
        }));
        settingValueDispatch({ type: 'update', time: createNowUpdateTime(), datas: resDatas });
      } else if (objMsg.event === 'controller') {
        // 充放電制御指令 イベント
        if (objMsg.data.length === 0) return;
        const resDatas = objMsg.data;
        commandScheduleDispatch({ type: 'update', time: createNowUpdateTime(), datas: resDatas });
      } else {
        console.error('UNKOWN EVENT RECIVE'); // 未想定
      }
    };
    socket.onerror = (ev) => console.error(ev);
    ws.current = socket;
  }, []);

  // websocket切断
  const wsDisConnect = useCallback(() => {
    // readyState 0:CONNECTING 1:OPEN 2:CLOSING 3:CLOSED
    if (ws.current && ws.current.readyState < 2) ws.current.close();
  }, []);

  // websocket要求
  const wsRegistData = useCallback((datas: { [key: string]: string }[]) => {
    if (!ws.current || ws.current.readyState !== 1) return;
    const registData = { event: 'registdata', data: [{ ...datas, at: createAtTimeSec() }] };
    ws.current.send(JSON.stringify(registData));
  }, []);

  const stateValue = { status };
  const stateHandling = { wsConnect, wsDisConnect, wsRegistData };

  return (
    <WebSocketEventsContext.Provider value={stateHandling}>
      <WebSocketStatesContext.Provider value={stateValue}>
        {children}
      </WebSocketStatesContext.Provider>
    </WebSocketEventsContext.Provider>
  );
};

const useWebsocketEvents = () => {
  const context = useContext(WebSocketEventsContext);
  if (context === undefined) {
    throw new Error('useWebsocketEvents must be used within a WebSocketContextProvider');
  }
  return context;
};

const useWebsocketStates = () => {
  const context = useContext(WebSocketStatesContext);
  if (context === undefined) {
    throw new Error('useWebsocketStates must be used within a WebSocketContextProvider');
  }
  return context;
};

export { WebSocketContextProvider, useWebsocketEvents, useWebsocketStates };
