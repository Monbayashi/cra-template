import { useCallback, useEffect } from 'react';

import {
  useCycleSettingEvents,
  useCycleSettingStates,
} from '../../../contexts/CycleSettingContext';
import { FormCycle } from '../../organisms/form-cycle/FormCycle';

type Props = {
  // empty
};

export const FormCycleEcosystem: React.FC<Props> = () => {
  const state = useCycleSettingStates();
  const dispatch = useCycleSettingEvents();

  const updateHandling = useCallback(
    ({ isAutoSend, sendCycle }: { isAutoSend: boolean; sendCycle: number }) => {
      dispatch({ type: 'update', isAutoSend, sendCycle });
    },
    [],
  );

  return (
    <FormCycle
      registerHandling={updateHandling}
      sendHandling={() => console.log('unkown')}
      isAutoSend={state.isAutoSend}
      sendCycle={state.sendCycle}
    />
  );
};
