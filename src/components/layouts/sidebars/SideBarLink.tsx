import { ComponentProps, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { SideBarLinkIcon } from './SideBarLinkIcon';
import { SideBarLinkTip } from './SideBarLinkTip';

type Props = {
  href: string;
  name: string;
  Icon: ReactElement<ComponentProps<typeof SideBarLinkIcon>>;
  Tip?: ReactElement<ComponentProps<typeof SideBarLinkTip>>;
};

export const SideBarLink: React.FC<Props> = ({ href, name, Icon, Tip }) => (
  <li>
    <Link
      to={href}
      className='relative flex flex-row items-center h-11 focus:outline-none focus:bg-blue-800 focus:border-blue-500 hover:bg-blue-800  border-l-4 border-transparent hover:border-blue-500 pr-6'
    >
      <span className='inline-flex justify-center items-center ml-4'>{Icon}</span>
      <span className='ml-2 text-sm tracking-wide truncate'>{name}</span>
      {Tip && (
        <span className='hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full'>
          {Tip}
        </span>
      )}
    </Link>
  </li>
);
