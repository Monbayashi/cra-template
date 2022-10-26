import { CommandScheduleEcosystem } from '../../ecosystems/command-schedule/CommandScheduleEcosystem';
import { ConnectionWsEcosystem } from '../../ecosystems/connection-ws/ConnectionWsEcosystem';
import { LogWssEcosystem } from '../../ecosystems/log-wss/LogWssEcosystem';
import { SettingValueEcosystem } from '../../ecosystems/setting-value/SettingValueEcosystem';
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
      <div className='m-4 lg:m-8'>
        <ConnectionWsEcosystem />
      </div>
      <div className='m-4 grid grid-cols-1 gap-4 lg:m-8 lg:grid-cols-2 lg:gap-8'>
        <SettingValueEcosystem />
        <CommandScheduleEcosystem />
      </div>
      <div className='m-4 lg:m-8'>
        <LogWssEcosystem />
      </div>
    </Main>
  </div>
);
