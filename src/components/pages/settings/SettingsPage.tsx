import { ConnectionWsEcosystem } from '../../ecosystems/connection-ws/ConnectionWsEcosystem';
import { FormCycleEcosystem } from '../../ecosystems/form-cycle/FormCycleEcosystem';
import { FormWssEcosystem } from '../../ecosystems/form-wss/FormWssEcosystem';
import { LogWssEcosystem } from '../../ecosystems/log-wss/LogWssEcosystem';
import { Header } from '../../organisms/layouts/headers/Header';
import { Main } from '../../organisms/layouts/mains/Main';
import { SideBar } from '../../organisms/layouts/sidebars/SideBar';

type Props = {
  // empty
};

export const SettingsPage: React.FC<Props> = () => (
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
      <div className='m-4 grid grid-cols-1 gap-4 lg:m-8 lg:grid-cols-2 lg:gap-8'>
        <FormWssEcosystem />
        <LogWssEcosystem />
      </div>
    </Main>
    <footer>footer</footer>
  </div>
);
