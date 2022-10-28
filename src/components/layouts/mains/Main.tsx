type Props = {
  children: React.ReactNode;
};

export const Main: React.FC<Props> = ({ children }) => (
  <main className='h-full ml-14 mt-14 mb-10 md:ml-64 text-gray-800'>{children}</main>
);
