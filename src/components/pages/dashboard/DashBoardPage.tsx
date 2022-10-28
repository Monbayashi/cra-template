import { CommandScheduleEcosystem } from '../../ecosystems/command-schedule/CommandScheduleEcosystem';
import { ConnectionWsEcosystem } from '../../ecosystems/connection-ws/ConnectionWsEcosystem';
import { LogWssEcosystem } from '../../ecosystems/log-wss/LogWssEcosystem';
import { SettingValueEcosystem } from '../../ecosystems/setting-value/SettingValueEcosystem';
import { Layout } from '../../layouts';

type Props = {
  // empty
};

export const DashBoardPage: React.FC<Props> = () => (
  <Layout>
    <h2 className='text-gray-600 text-xl font-black m-4 ml-8'>N-PMS 設定データ</h2>
    <div className='m-4 lg:m-8'>
      <ConnectionWsEcosystem />
    </div>
    <div className='m-4 lg:m-8'>
      <LogWssEcosystem />
    </div>
    <div className='m-4 grid grid-cols-1 gap-4 lg:m-8 lg:grid-cols-2 lg:gap-8'>
      <SettingValueEcosystem />
      <CommandScheduleEcosystem />
    </div>
  </Layout>
);
