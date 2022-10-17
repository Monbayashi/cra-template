import {
  BellIcon,
  BoardIcon,
  HomeIcon,
  MessageIcon,
  PersonIcon,
  SettingIcon,
} from '../../../parts/icons';

type Props = {
  type: 'Bell' | 'Board' | 'Home' | 'Message' | 'Person' | 'Setting';
};

export const SideBarLinkIcon: React.FC<Props> = ({ type }) => {
  switch (type) {
    case 'Bell':
      return <BellIcon />;
    case 'Board':
      return <BoardIcon />;
    case 'Home':
      return <HomeIcon />;
    case 'Message':
      return <MessageIcon />;
    case 'Person':
      return <PersonIcon />;
    case 'Setting':
      return <SettingIcon />;
  }
};
