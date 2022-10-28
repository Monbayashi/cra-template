import { ConnectionWsEcosystem } from '../../ecosystems/connection-ws/ConnectionWsEcosystem';
import { FormCycleEcosystem } from '../../ecosystems/form-cycle/FormCycleEcosystem';
import { FormSvsEcosystem } from '../../ecosystems/form-svs/FormSvsEcosystem';
import { FormTmsEcosystem } from '../../ecosystems/form-tms/FormTmsEcosystem';
import { LogWssEcosystem } from '../../ecosystems/log-wss/LogWssEcosystem';
import { Layout } from '../../layouts';

type Props = {
  // empty
};

export const RegistDataPage: React.FC<Props> = () => (
  <Layout>
    <h2 className='text-gray-600 text-xl font-black m-4 ml-8'>計測状態値記録</h2>
    <div className='m-4 lg:m-6 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6'>
      <div className='flex items-stretch lg:col-span-8'>
        <ConnectionWsEcosystem />
      </div>
      <div className='flex items-stretch lg:col-span-4'>
        <FormCycleEcosystem />
      </div>
    </div>
    <div className='m-4 lg:m-6 grid grid-cols-1 gap-4 lg:gap-6 xl:grid-cols-2'>
      <div className='flex items-stretch'>
        <FormSvsEcosystem />
      </div>
      <div className='flex items-stretch'>
        <FormTmsEcosystem />
      </div>
    </div>
    <div className='m-4 lg:m-6'>
      <LogWssEcosystem />
    </div>
  </Layout>
);
