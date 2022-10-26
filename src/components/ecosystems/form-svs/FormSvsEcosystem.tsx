import { useCallback, useEffect, useState } from 'react';

import { useSvSettingEvents, useSvSettingStates } from '../../../contexts/SvSettingContext';
import { localStorageSvForm as storage } from '../../../storages/localStorageSvForm';
import { FormSvs } from '../../organisms/form-svs/FormSvs';
import { LoadModal } from '../../organisms/modal/LoadModal';
import { SaveModal } from '../../organisms/modal/SaveModal';

type LoadItemsType = ReturnType<typeof storage.getFindAll>;

type Props = {
  //empty
};

export const FormSvsEcosystem: React.FC<Props> = () => {
  const state = useSvSettingStates();
  const dispatch = useSvSettingEvents();

  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isLoadModalOpen, setIsLoadModalOpen] = useState(false);
  const [loadItems, setLoadItems] = useState<LoadItemsType>([]);

  const saveModalOpenHandling = useCallback(() => setIsSaveModalOpen(true), []);
  const saveModalCloseHandling = useCallback(() => setIsSaveModalOpen(false), []);
  const loadModalOpenHandling = useCallback(() => setIsLoadModalOpen(true), []);
  const loadModalCloseHandling = useCallback(() => setIsLoadModalOpen(false), []);
  const saveLocalStrageHandling = useCallback(
    (id: string) => {
      storage.createData({
        id,
        isRandom: state.isRandom,
        svs: state.svs,
      });
      setLoadItems(storage.getFindAll());
      setIsSaveModalOpen(false);
    },
    [state],
  );

  const selectLoadDataHandling = useCallback(
    (id: string) => {
      const findData = storage.getFindOne(id);
      console.log(findData);
      if (!findData) return;
      dispatch({
        type: 'update',
        isRandom: findData.isRandom,
        svs: findData.svs,
      });
      setIsLoadModalOpen(false);
    },
    [dispatch],
  );

  const deleteLoadDataHandling = useCallback((id: string) => {
    storage.deleteData(id);
    setLoadItems(storage.getFindAll());
  }, []);

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

  useEffect(() => {
    setLoadItems(storage.getFindAll());
  }, []);

  return (
    <>
      <FormSvs
        saveModalOpenHandling={saveModalOpenHandling}
        loadModalOpenHandling={loadModalOpenHandling}
        registerHandling={updateHandling}
        isRandom={state.isRandom}
        svs={state.svs}
      />
      <SaveModal
        isOpen={isSaveModalOpen}
        closeModalHandling={saveModalCloseHandling}
        saveLocalStrageHandling={saveLocalStrageHandling}
      />
      <LoadModal
        loadItems={loadItems}
        isOpen={isLoadModalOpen}
        closeModalHandling={loadModalCloseHandling}
        selectLoadDataHandling={selectLoadDataHandling}
        deleteLoadDataHandling={deleteLoadDataHandling}
      />
    </>
  );
};
