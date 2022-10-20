import { useCallback } from 'react';

import { useTmSetting } from '../../../contexts/TmSettingContext';
import { FormTms } from '../../organisms/form-tms/FormTms';

type Props = {
  //empty
};

export const FormTmsEcosystem: React.FC<Props> = () => {
  const { state, dispatch } = useTmSetting();

  const updateHandling = useCallback(
    ({
      isRandom,
      randomMax,
      randomMin,
      tms,
    }: {
      isRandom: boolean;
      randomMax: number;
      randomMin: number;
      tms: { id: string; name: string; value: number }[];
    }) => {
      dispatch({ type: 'update', isRandom, randomMax, randomMin, tms });
    },
    [],
  );

  return (
    <FormTms
      registerHandling={updateHandling}
      isRandom={state.isRandom}
      randomMax={state.randomMax}
      randomMin={state.randomMin}
      tms={state.tms}
    />
  );
};
