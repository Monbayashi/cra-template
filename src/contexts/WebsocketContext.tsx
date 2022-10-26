import { createContext, useCallback, useContext, useRef, useState } from 'react';

import { createAtTimeMin, createAtTimeSec, createNowUpdateTime } from '../utils/dateTime';
import { useCommandScheduleEvents } from './CommandScheduleContext';
import { useSettingValueEvents } from './SettingValueContext';

type Dispatch = {
  wsConnect: (url: string) => void;
  wsDisConnect: () => void;
  wsRegistData: (datas: { [key: string]: string }) => void;
};

type State = {
  status: 0 | 1;
};

type LogState = {
  logs: {
    logAt: string;
    logMsg: string;
    logData: string;
  }[];
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

const WebSocketLogsContext = createContext<LogState | undefined>(undefined);
const WebSocketEventsContext = createContext<Dispatch | undefined>(undefined);
const WebSocketStatesContext = createContext<State | undefined>(undefined);

const WebSocketContextProvider = ({ children }: ProviderProps) => {
  const ws = useRef<WebSocket | null>(null);
  const [status, setStatus] = useState<0 | 1>(0);
  const [logs, setLogs] = useState<LogState['logs']>([]);
  // useContext
  const settingValueDispatch = useSettingValueEvents();
  const commandScheduleDispatch = useCommandScheduleEvents();

  // websocket接続
  const wsConnect = useCallback(
    (url: string) => {
      const socket = new WebSocket(url);
      // コネクションオープンイベント
      socket.onopen = () => {
        setStatus(1);
        const logAt = createNowUpdateTime();
        const logMsg = 'Websocketコネクション OPEN';
        const logData = socket.url;
        setLogs((pre) => [{ logAt, logMsg, logData }, ...pre].splice(0, 100));
        const resendshedule = { event: 'resendschedule', data: [{ at: createAtTimeMin() }] };
        setTimeout(() => {
          socket.send(JSON.stringify(resendshedule));
          const logAt = createNowUpdateTime();
          const logMsg = 'resendscheduleイベント送信';
          const logData = JSON.stringify(resendshedule, null, 2);
          setLogs((pre) => [{ logAt, logMsg, logData }, ...pre].splice(0, 100));
        }, 500);
      };
      // コネクションクローズイベント
      socket.onclose = () => {
        setStatus(0);
        const logAt = createNowUpdateTime();
        const logMsg = 'Websocketコネクション CLOSE';
        const logData = socket.url;
        setLogs((pre) => [{ logAt, logMsg, logData }, ...pre].splice(0, 100));
      };
      // メッセージ受信イベント
      socket.onmessage = (ent) => {
        const objMsg = JSON.parse(ent.data) as ControllerMessage | SettingMessage;
        if (objMsg.event === 'setting') {
          // N-PMS設定 イベント
          if (objMsg.data.length === 0) return;
          const entries = Object.entries(objMsg.data[0]);
          const resDatas = entries.map(([key, value]) => ({ dbName: key, value }));
          settingValueDispatch({ type: 'update', time: createNowUpdateTime(), datas: resDatas });
        } else if (objMsg.event === 'controller') {
          // 充放電制御指令 イベント
          if (objMsg.data.length === 0) return;
          const resDatas = objMsg.data;
          commandScheduleDispatch({ type: 'update', time: createNowUpdateTime(), datas: resDatas });
        } else {
          console.error('UNKOWN EVENT RECIVE'); // 未想定
        }
        const logAt = createNowUpdateTime();
        const logMsg = `${objMsg.event}イベント受信`;
        const logData = JSON.stringify(objMsg, null, 2);
        setLogs((pre) => [{ logAt, logMsg, logData }, ...pre].splice(0, 100));
      };
      socket.onerror = (ev) => console.error(ev);
      ws.current = socket;
    },
    [settingValueDispatch, commandScheduleDispatch],
  );

  // websocket切断
  const wsDisConnect = useCallback(() => {
    // readyState 0:CONNECTING 1:OPEN 2:CLOSING 3:CLOSED
    if (ws.current && ws.current.readyState < 2) ws.current.close();
  }, []);

  // websocket要求
  const wsRegistData = useCallback((datas: { [key: string]: string }) => {
    if (!ws.current || ws.current.readyState !== 1) return;
    const registData = { event: 'registdata', data: [{ ...datas, at: createAtTimeSec() }] };
    ws.current.send(JSON.stringify(registData));
    const logAt = createNowUpdateTime();
    const logMsg = `${registData.event}イベント受信`;
    const logData = JSON.stringify(registData, null, 2);
    setLogs((pre) => [{ logAt, logMsg, logData }, ...pre].splice(0, 100));
  }, []);

  const stateLogValue = { logs: logs };
  const stateValue = { status };
  const stateHandling = { wsConnect, wsDisConnect, wsRegistData };
  return (
    <WebSocketLogsContext.Provider value={stateLogValue}>
      <WebSocketEventsContext.Provider value={stateHandling}>
        <WebSocketStatesContext.Provider value={stateValue}>
          {children}
        </WebSocketStatesContext.Provider>
      </WebSocketEventsContext.Provider>
    </WebSocketLogsContext.Provider>
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

const useWebsocketLogs = () => {
  const context = useContext(WebSocketLogsContext);
  if (context === undefined) {
    throw new Error('useWebsocketLogs must be used within a WebSocketContextProvider');
  }
  return context;
};

export { WebSocketContextProvider, useWebsocketEvents, useWebsocketStates, useWebsocketLogs };
