import { SideBarLink } from './SideBarLink';
import { SideBarLinkIcon } from './SideBarLinkIcon';
import { SideBarTitle } from './SideBarTitle';

export const SideBar: React.FC = () => {
  return (
    <aside className='fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 h-full text-white z-10 transition-all duration-300'>
      <nav className='overflow-y-auto overflow-x-hidden flex flex-col justify-between grow'>
        <ul className='flex flex-col py-4 space-y-1'>
          <SideBarTitle title='データ 確認' />
          <SideBarLink href='/' name='N-PMS 設定データ' Icon={<SideBarLinkIcon type='Home' />} />
          <SideBarTitle title='データ 送信' />
          <SideBarLink
            href='/registdata'
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
