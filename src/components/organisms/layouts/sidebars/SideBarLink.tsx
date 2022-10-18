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
      className='relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 text-gray-100 hover:border-gray-800 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none '
    >
      <span className='ml-4 inline-flex items-center justify-center'>{Icon}</span>
      <span className='ml-2 truncate text-sm tracking-wide'>{name}</span>
      {Tip && (
        <span className='ml-auto hidden rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium tracking-wide text-blue-500 md:block'>
          {Tip}
        </span>
      )}
    </Link>
  </li>
);
