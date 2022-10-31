import Modal from 'react-modal';

import { lintName } from '../../../utils/lintNames';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  closeHandling: () => void;
};

const classNames = {
  modal: {
    base: lintName(
      'min-w-[320px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute bg-gray-200 z-50 rounded-lg shadow',
    ),
  },
  overlay: {
    base: lintName(
      'z-40 bg-[#00000096] inset-0 fixed cursor-default transition-all duration-300 opacity-0',
    ),
    afterOpen: lintName('!opacity-100'),
  },
} as const;

export const SimpleModal: React.FC<Props> = ({ children, isOpen, closeHandling }) => {
  return (
    <Modal
      isOpen={isOpen}
      closeTimeoutMS={300}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeHandling}
      className={{
        base: classNames.modal.base,
        afterOpen: '',
        beforeClose: '',
      }}
      overlayClassName={{
        base: classNames.overlay.base,
        afterOpen: isOpen ? classNames.overlay.afterOpen : '',
        beforeClose: '',
      }}
      appElement={document.getElementById('root') || undefined}
    >
      {children}
    </Modal>
  );
};
