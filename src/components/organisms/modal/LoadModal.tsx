import { SimpleModal } from '../../parts/modals/Modals';

type Props = {
  isOpen: boolean;
  loadItems: Array<{ id: string }>;
  closeModalHandling: () => void;
  selectLoadDataHandling: (id: string) => void;
  deleteLoadDataHandling: (id: string) => void;
};

export const LoadModal: React.FC<Props> = ({
  loadItems,
  isOpen,
  closeModalHandling,
  selectLoadDataHandling,
  deleteLoadDataHandling,
}) => {
  return (
    <SimpleModal isOpen={isOpen} closeHandling={closeModalHandling}>
      <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left p-4'>
        <h3 className='text-lg leading-6 font-medium text-gray-900' id='modal-title'>
          設定済みデータを反映します。
        </h3>
        <div className='mt-2'>
          <p className='text-sm text-gray-500'>反映したいデータを選択してください。</p>
        </div>
        <ul className='max-h-96 overflow-auto mt-2'>
          {loadItems.map((item) => (
            <li key={item.id} className='flex justify-center'>
              <button
                type='button'
                className='grow transition-all text-left hover:bg-gray-400 focus:bg-gray-400 outline-none p-2'
                onClick={() => selectLoadDataHandling(item.id)}
              >
                {item.id}
              </button>
              <button
                type='button'
                className='w-14 shrink-0 rounded text-red-600 hover:bg-red-200 focus:bg-red-200 outline-none'
                onClick={() => deleteLoadDataHandling(item.id)}
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      </div>
    </SimpleModal>
  );
};
