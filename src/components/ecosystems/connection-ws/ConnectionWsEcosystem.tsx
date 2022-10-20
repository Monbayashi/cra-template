import { useWebsocketSetting } from '../../../contexts/WebsocketSettingContext';
import { ConnectionWs } from '../../organisms/connection-ws/ConnectionWs';

type Props = {
  // empty
};

export const ConnectionWsEcosystem: React.FC<Props> = () => {
  const { state } = useWebsocketSetting();

  const connectHandling = () => {
    console.log('connect');
  };

  const disConnectHandling = () => {
    console.log('disconnect');
  };

  return (
    <ConnectionWs
      connectHandling={connectHandling}
      disConnectHandling={disConnectHandling}
      status={0}
      wsInfo={{
        origin: state.origin,
        deviceId: state.deviceId,
        secKey: state.secKey,
      }}
    />
  );
};
