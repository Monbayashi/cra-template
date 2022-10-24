import { useCallback } from 'react';

import { useSvSettingEvents, useSvSettingStates } from '../../../contexts/SvSettingContext';
import { FormSvs } from '../../organisms/form-svs/FormSvs';

type Props = {
  //empty
};

export const FormSvsEcosystem: React.FC<Props> = () => {
  const state = useSvSettingStates();
  const dispatch = useSvSettingEvents();

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
    [dispatch],
  );

  return <FormSvs registerHandling={updateHandling} isRandom={state.isRandom} svs={state.svs} />;
};
