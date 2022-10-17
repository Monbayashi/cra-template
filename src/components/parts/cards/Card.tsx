type Props = {
  children: React.ReactNode;
};

export const Card: React.FC<Props> = ({ children }) => (
  <div className='w-full min-w-0 break-words rounded bg-gray-800 shadow-lg'>
    <div className='mb-0 rounded-t border-0 px-0'>{children}</div>
  </div>
);
