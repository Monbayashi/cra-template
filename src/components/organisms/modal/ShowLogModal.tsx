import { SimpleModal } from '../../parts/modals/Modals';

type Props = {
  isOpen: boolean;
  log: string;
  closeModalHandling: () => void;
};

export const ShowLogModal: React.FC<Props> = ({ log, isOpen, closeModalHandling }) => {
  return (
    <SimpleModal isOpen={isOpen} closeHandling={closeModalHandling}>
      <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left p-4'>
        <h3 className='text-lg leading-6 font-medium text-gray-900' id='modal-title'>
          Log 詳細
        </h3>
        <div className='whitespace-pre-wrap bg-white max-h-96 overflow-y-auto'>{log}</div>
      </div>
    </SimpleModal>
  );
};
