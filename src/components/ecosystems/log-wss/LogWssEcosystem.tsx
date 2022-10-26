import { useWebsocketLogs } from '../../../contexts/WebsocketContext';
import { LogWss } from '../../organisms/log-wss/LogWss';

type Props = {
  // empty
};

export const LogWssEcosystem: React.FC<Props> = () => {
  const state = useWebsocketLogs();

  return <LogWss datas={state.logs} />;
};
