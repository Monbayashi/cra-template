import { useCallback, useState } from 'react';

import { useWebsocketLogs } from '../../../contexts/WebsocketContext';
import { LogWss } from '../../organisms/log-wss/LogWss';
import { ShowLogModal } from '../../organisms/modal/ShowLogModal';

type Props = {
  // empty
};

export const LogWssEcosystem: React.FC<Props> = () => {
  const state = useWebsocketLogs();
  const [isOpen, setIsOpen] = useState(false);
  const [log, setLog] = useState('');

  const logDataShowHandling = (log: string) => {
    setLog(log);
    setIsOpen(true);
  };

  const closeModalHandling = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <LogWss datas={state.logs} logDataShowHandling={logDataShowHandling} />;
      <ShowLogModal isOpen={isOpen} closeModalHandling={closeModalHandling} log={log} />
    </>
  );
};
