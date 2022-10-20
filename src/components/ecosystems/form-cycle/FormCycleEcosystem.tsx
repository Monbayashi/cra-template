import { useCallback, useEffect } from 'react';

import { useCycleSetting } from '../../../contexts/CycleSettingContext';
import { FormCycle } from '../../organisms/form-cycle/FormCycle';

type Props = {
  // empty
};

export const FormCycleEcosystem: React.FC<Props> = () => {
  const { state, dispatch } = useCycleSetting();

  const updateHandling = useCallback(
    ({ isAutoSend, sendCycle }: { isAutoSend: boolean; sendCycle: number }) => {
      dispatch({ type: 'update', isAutoSend, sendCycle });
    },
    [],
  );

  useEffect(() => {
    console.log('FormCycleEcosystem');
  });

  return (
    <FormCycle
      registerHandling={updateHandling}
      sendHandling={() => console.log('unkown')}
      isAutoSend={state.isAutoSend}
      sendCycle={state.sendCycle}
    />
  );
};
