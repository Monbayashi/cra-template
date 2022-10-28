import { ConnectionWsEcosystem } from '../../ecosystems/connection-ws/ConnectionWsEcosystem';
import { FormCycleEcosystem } from '../../ecosystems/form-cycle/FormCycleEcosystem';
import { FormWssEcosystem } from '../../ecosystems/form-wss/FormWssEcosystem';
import { LogWssEcosystem } from '../../ecosystems/log-wss/LogWssEcosystem';
import { Layout } from '../../layouts';

type Props = {
  // empty
};

export const SettingsPage: React.FC<Props> = () => (
  <Layout>
    <h2 className='text-gray-600 text-xl font-black m-4 ml-8'>グローバル設定</h2>
    <div className='m-4 lg:m-6 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6'>
      <div className='flex items-stretch lg:col-span-8'>
        <ConnectionWsEcosystem />
      </div>
      <div className='flex items-stretch lg:col-span-4'>
        <FormCycleEcosystem />
      </div>
    </div>
    <div className='m-4 lg:m-6 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6'>
      <FormWssEcosystem />
      <LogWssEcosystem />
    </div>
  </Layout>
);
