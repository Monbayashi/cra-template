type Props = {
  children: React.ReactNode;
};

export const Main: React.FC<Props> = ({ children }) => (
  <main className='ml-14 mt-14 mb-10 h-full md:ml-64'>{children}</main>
);
