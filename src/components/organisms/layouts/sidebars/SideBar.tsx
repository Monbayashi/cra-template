import { SideBarLink } from './SideBarLink';
import { SideBarLinkIcon } from './SideBarLinkIcon';
import { SideBarTitle } from './SideBarTitle';

export const SideBar: React.FC = () => {
  return (
    <aside className='fixed top-14 left-0 z-10 flex h-full w-14 flex-col border-none bg-gray-900 text-gray-100 transition-all duration-300 hover:w-64 md:w-64'>
      <nav className='flex grow flex-col justify-between overflow-y-auto overflow-x-hidden'>
        <ul className='flex flex-col space-y-1 py-4'>
          <SideBarTitle title='データ 確認' />
          <SideBarLink href='/' name='Dashboard' Icon={<SideBarLinkIcon type='Home' />} />
          <SideBarTitle title='データ 送信' />
          <SideBarLink
            href='/messages'
            name='計測状態値記録'
            Icon={<SideBarLinkIcon type='Message' />}
          />
          <SideBarTitle title='設定' />
          <SideBarLink
            href='/settings'
            name='グローバル設定'
            Icon={<SideBarLinkIcon type='Setting' />}
          />
        </ul>
        <p className='mb-14 hidden px-5 py-3 text-center text-xs md:block'>Copyright @2022</p>
      </nav>
    </aside>
  );
};
