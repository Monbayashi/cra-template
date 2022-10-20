import { createContext, useContext, useReducer } from 'react';

type Action = {
  type: 'update';
  origin: string;
  deviceId: string;
  secKey: string;
};

type Dispatch = (action: Action) => void;

type State = {
  origin: string;
  deviceId: string;
  secKey: string;
};

type ProviderProps = {
  children: React.ReactNode;
};

const WebSocketSettingContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined,
);

const websocketSettingReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'update': {
      return { origin: action.origin, deviceId: action.deviceId, secKey: action.secKey };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const WebsocketSettingProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(websocketSettingReducer, {
    origin: 'ws://000.000.000.000:00000',
    deviceId: 'TEST-0000000000',
    secKey: 'seckeyseckeyseckeyseckeyseckey',
  });

  const value = { state, dispatch };

  return (
    <WebSocketSettingContext.Provider value={value}>{children}</WebSocketSettingContext.Provider>
  );
};

const useWebsocketSetting = () => {
  const context = useContext(WebSocketSettingContext);
  if (context === undefined) {
    throw new Error('useWebsocketSetting must be used within a WebsocketSettingProvider');
  }
  return context;
};

export { WebsocketSettingProvider, useWebsocketSetting };
