import { useCallback, useState, useEffect } from 'react';

import { useWebsocketSetting } from '../../../contexts/WebsocketSettingContext';
import { localStorageWebsocketForm as storage } from '../../../storages/localStorageWebsocketForm';
import { FormWss } from '../../organisms/form-wss/FormWss';
import { LoadModal } from '../../organisms/modal/LoadModal';
import { SaveModal } from '../../organisms/modal/SaveModal';

type LoadItemsType = ReturnType<typeof storage.getFindAll>;

type Props = {
  // empty
};

export const FormWssEcosystem: React.FC<Props> = () => {
  const { state, dispatch } = useWebsocketSetting();
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
        origin: state.origin,
        deviceId: state.deviceId,
        secKey: state.secKey,
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
        origin: findData.origin,
        deviceId: findData.deviceId,
        secKey: findData.secKey,
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
    ({ origin, deviceId, secKey }: { origin: string; deviceId: string; secKey: string }) => {
      dispatch({ type: 'update', origin, deviceId, secKey });
    },
    [dispatch],
  );

  useEffect(() => {
    setLoadItems(storage.getFindAll());
  }, []);

  return (
    <>
      <FormWss
        saveModalOpenHandling={saveModalOpenHandling}
        loadModalOpenHandling={loadModalOpenHandling}
        registerHandling={updateHandling}
        origin={state.origin}
        deviceId={state.deviceId}
        secKey={state.secKey}
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
