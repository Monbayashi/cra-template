import { useRef } from 'react';

import { SimpleButton } from '../../parts/buttons/SimpleButton.parts';
import { SimpleModal } from '../../parts/modals/Modals';

type Props = {
  isOpen: boolean;
  closeModalHandling: () => void;
  saveLocalStrageHandling: (id: string) => void;
};

export const SaveModal: React.FC<Props> = ({
  isOpen,
  closeModalHandling,
  saveLocalStrageHandling,
}) => {
  const inputNameRef = useRef<HTMLInputElement | null>(null);

  const onClickSave = () => {
    if (!inputNameRef.current || inputNameRef.current.value.trim().length === 0) {
      return;
    }
    saveLocalStrageHandling(inputNameRef.current.value);
  };

  return (
    <SimpleModal isOpen={isOpen} closeHandling={closeModalHandling}>
      <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left p-4'>
        <h3 className='text-lg leading-6 font-medium text-gray-900' id='modal-title'>
          設定を保存しますか？
        </h3>
        <div className='mt-2'>
          <p className='text-sm text-gray-500'>
            入力中のものでなく、設定済みのデータが保存されます。
          </p>
        </div>
      </div>
      <div className='px-8'>
        <div>
          <label
            htmlFor='form_wss_save_modal_name'
            className='block text-sm font-medium text-gray-700 dark:text-gray-300'
          >
            設定名称
          </label>
          <input
            type='text'
            id='form_wss_save_modal_key'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='Server_URL_1'
            ref={inputNameRef}
          />
        </div>
      </div>
      <div className='px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
        <SimpleButton type='button' color='red' onClick={onClickSave} size='full'>
          保存する
        </SimpleButton>
        <SimpleButton type='button' color='white' onClick={closeModalHandling} size='full'>
          保存しない
        </SimpleButton>
      </div>
    </SimpleModal>
  );
};
