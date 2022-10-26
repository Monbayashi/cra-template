import Modal from 'react-modal';

import { lintName } from '../../../utils/lintNames';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  closeHandling: () => void;
};

const classNames = {
  modal: lintName(
    'min-w-[320px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute bg-gray-200 z-50 rounded-lg shadow',
  ),
  overlay: lintName('z-40 bg-[#00000096] inset-0 fixed cursor-default'),
};

export const SimpleModal: React.FC<Props> = ({ children, isOpen, closeHandling }) => {
  return (
    <Modal
      isOpen={isOpen}
      closeTimeoutMS={100}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeHandling}
      className={classNames.modal}
      overlayClassName={classNames.overlay}
      appElement={document.getElementById('root') || undefined}
    >
      {children}
    </Modal>
  );
};
