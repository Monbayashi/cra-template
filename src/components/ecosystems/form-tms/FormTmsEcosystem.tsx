import { useCallback, useEffect, useState } from 'react';

import { useTmSettingEvents, useTmSettingStates } from '../../../contexts/TmSettingContext';
import { localStorageTmForm as storage } from '../../../storages/localStorageTmForm';
import { FormTms } from '../../organisms/form-tms/FormTms';
import { LoadModal } from '../../organisms/modal/LoadModal';
import { SaveModal } from '../../organisms/modal/SaveModal';

type LoadItemsType = ReturnType<typeof storage.getFindAll>;

type Props = {
  //empty
};

export const FormTmsEcosystem: React.FC<Props> = () => {
  const state = useTmSettingStates();
  const dispatch = useTmSettingEvents();

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
        randomMax: state.randomMax,
        randomMin: state.randomMin,
        tms: state.tms,
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
        randomMax: findData.randomMax,
        randomMin: findData.randomMin,
        tms: findData.tms,
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
    [dispatch],
  );

  useEffect(() => {
    setLoadItems(storage.getFindAll());
  }, []);

  return (
    <>
      <FormTms
        saveModalOpenHandling={saveModalOpenHandling}
        loadModalOpenHandling={loadModalOpenHandling}
        registerHandling={updateHandling}
        isRandom={state.isRandom}
        randomMax={state.randomMax}
        randomMin={state.randomMin}
        tms={state.tms}
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
