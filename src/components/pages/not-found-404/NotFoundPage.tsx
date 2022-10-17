import { Header } from '../../organisms/layouts/headers/Header';
import { Main } from '../../organisms/layouts/mains/Main';
import { SideBar } from '../../organisms/layouts/sidebars/SideBar';

type Props = {
  // empty
};

export const NotFoundPage: React.FC<Props> = () => (
  <div className='flex min-h-screen flex-auto shrink-0 flex-col bg-gray-700 text-white antialiased'>
    <Header />
    <SideBar />
    <Main>NotFoundPage 404</Main>
    <footer>footer</footer>
  </div>
);
