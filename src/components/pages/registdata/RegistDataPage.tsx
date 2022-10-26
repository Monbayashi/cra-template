import { ConnectionWsEcosystem } from '../../ecosystems/connection-ws/ConnectionWsEcosystem';
import { FormCycleEcosystem } from '../../ecosystems/form-cycle/FormCycleEcosystem';
import { FormSvsEcosystem } from '../../ecosystems/form-svs/FormSvsEcosystem';
import { FormTmsEcosystem } from '../../ecosystems/form-tms/FormTmsEcosystem';
import { LogWssEcosystem } from '../../ecosystems/log-wss/LogWssEcosystem';
import { Header } from '../../organisms/layouts/headers/Header';
import { Main } from '../../organisms/layouts/mains/Main';
import { SideBar } from '../../organisms/layouts/sidebars/SideBar';

type Props = {
  // empty
};

export const RegistDataPage: React.FC<Props> = () => (
  <div className='flex min-h-screen flex-auto shrink-0 flex-col bg-gray-700 text-white antialiased'>
    <Header />
    <SideBar />
    <Main>
      <div className='m-4 grid grid-cols-1 gap-4 lg:m-8 lg:grid-cols-12 lg:gap-8'>
        <div className='flex items-stretch lg:col-span-8'>
          <ConnectionWsEcosystem />
        </div>
        <div className='flex items-stretch lg:col-span-4'>
          <FormCycleEcosystem />
        </div>
      </div>
      <div className='m-4 grid grid-cols-1 gap-4 lg:m-8 lg:gap-8 xl:grid-cols-2 2xl:grid-cols-3'>
        <div>
          <FormSvsEcosystem />
        </div>
        <div>
          <FormTmsEcosystem />
        </div>
        <div className='col-span-1 xl:col-span-2 2xl:col-span-1'>
          <LogWssEcosystem />
        </div>
      </div>
    </Main>
  </div>
);
