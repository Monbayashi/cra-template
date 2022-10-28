import { Header } from './headers/Header';
import { Main } from './mains/Main';
import { SideBar } from './sidebars/SideBar';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => (
  <div className='min-h-screen flex flex-col flex-auto shrink-0 antialiased bg-gray-50'>
    <Header />
    <SideBar />
    <Main>{children}</Main>
  </div>
);
