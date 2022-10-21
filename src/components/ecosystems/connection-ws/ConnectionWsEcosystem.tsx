import { useWebsocketEvents, useWebsocketStates } from '../../../contexts/WebsocketContext';
import { useWebsocketSetting } from '../../../contexts/WebsocketSettingContext';
import { ConnectionWs } from '../../organisms/connection-ws/ConnectionWs';

type Props = {
  // empty
};

export const ConnectionWsEcosystem: React.FC<Props> = () => {
  const { state } = useWebsocketSetting();
  const { status } = useWebsocketStates();
  const { wsConnect, wsDisConnect } = useWebsocketEvents();

  const connectHandling = () => {
    wsConnect(`${state.origin}?deviceid=${state.deviceId}&seckey=${state.secKey}`);
  };

  const disConnectHandling = () => {
    wsDisConnect();
  };

  return (
    <ConnectionWs
      connectHandling={connectHandling}
      disConnectHandling={disConnectHandling}
      status={status}
      wsInfo={{
        origin: state.origin,
        deviceId: state.deviceId,
        secKey: state.secKey,
      }}
    />
  );
};
