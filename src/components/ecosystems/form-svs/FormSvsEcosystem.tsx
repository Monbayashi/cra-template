import { useCallback } from 'react';

import { useSvSetting } from '../../../contexts/SvSettingContext';
import { FormSvs } from '../../organisms/form-svs/FormSvs';

type Props = {
  //empty
};

export const FormSvsEcosystem: React.FC<Props> = () => {
  const { state, dispatch } = useSvSetting();

  const updateHandling = useCallback(
    ({
      isRandom,
      svs,
    }: {
      isRandom: boolean;
      svs: { id: string; name: string; value: number }[];
    }) => {
      dispatch({ type: 'update', isRandom, svs });
    },
    [],
  );

  return <FormSvs registerHandling={updateHandling} isRandom={state.isRandom} svs={state.svs} />;
};
