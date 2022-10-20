type Props = {
  children: React.ReactNode;
};

export const Main: React.FC<Props> = ({ children }) => (
  <main className='ml-14 mt-14 md:ml-64'>{children}</main>
);
