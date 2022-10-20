import { useCallback } from 'react';

import { useWebsocketSetting } from '../../../contexts/WebsocketSettingContext';
import { FormWss } from '../../organisms/form-wss/FormWss';

type Props = {
  // empty
};

export const FormWssEcosystem: React.FC<Props> = () => {
  const { state, dispatch } = useWebsocketSetting();

  const updateHandling = useCallback(
    ({ origin, deviceId, secKey }: { origin: string; deviceId: string; secKey: string }) => {
      dispatch({ type: 'update', origin, deviceId, secKey });
    },
    [],
  );

  return (
    <FormWss
      registerHandling={updateHandling}
      origin={state.origin}
      deviceId={state.deviceId}
      secKey={state.secKey}
    />
  );
};
