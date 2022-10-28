type Props = {
  children: React.ReactNode;
};

export const Card: React.FC<Props> = ({ children }) => (
  <section className='w-full flex flex-col rounded bg-gray-300 shadow-lg'>{children}</section>
);
