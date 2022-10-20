type Props = {
  children: React.ReactNode;
};

export const Card: React.FC<Props> = ({ children }) => (
  <div className='w-full min-w-0 break-words rounded bg-gray-800 shadow-lg'>{children}</div>
);
