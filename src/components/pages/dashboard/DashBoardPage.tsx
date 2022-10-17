import { Header } from '../../organisms/layouts/headers/Header';
import { Main } from '../../organisms/layouts/mains/Main';
import { SideBar } from '../../organisms/layouts/sidebars/SideBar';

type Props = {
  // empty
};

export const DashBoardPage: React.FC<Props> = () => (
  <div className='flex min-h-screen flex-auto shrink-0 flex-col bg-gray-700 text-white antialiased'>
    <Header />
    <SideBar />
    <Main>
      <section>N-PMS設定</section>
      <section>充放電制御指令</section>
      <div className='grid grid-cols-1 gap-4 p-4 lg:grid-cols-2'></div>
    </Main>
    <footer>footer</footer>
  </div>
);
