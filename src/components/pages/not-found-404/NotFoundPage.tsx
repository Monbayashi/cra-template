import { ReactComponent as TitleIcon } from '../../../assets/avatar-driving-female-svgrepo-com.svg';
import { BoardIcon, LogoutIcon, SettingIcon } from '../../parts/icons';

type Props = {
  // empty
};

/**
 * Wrapper: flex flex-col flex-auto shrink-0なぜ必要なのか？ margin-topを無効にする為。 overflow-hiddenではいけないのか？
 * Side Navi: ancher になぜrelativeが指定されているのか分からない。
 * @returns
 */
export const NotFoundPage: React.FC<Props> = () => (
  <div className='min-h-screen flex flex-col flex-auto shrink-0 antialiased bg-green-300'>
    {/* Header */}
    <header className='fixed w-full flex items-center justify-between h-14 text-white z-10 bg-red-300'>
      {/* Header Title */}
      <div className='w-14 h-14 bg-red-500 md:w-64 flex items-center justify-center select-none'>
        <TitleIcon className='inline-block w-10 h-10' />
        <span className='text-2xl font-bold hidden md:inline-block px-2'>APP Title</span>
      </div>
      {/* Header Action */}
      <div className='flex justify-between items-center h-14 bg-red-400'>
        <ul className='flex items-center'>
          <li className='mx-3'>
            <div>アクションを書く事ができる</div>
          </li>
          <li className='mx-3'>
            <div className='block w-px h-6 bg-gray-400' />
          </li>
          <li>
            <a href='#' className='flex items-center mr-4 hover:text-blue-100'>
              <span className='inline-flex mr-1'>
                <LogoutIcon />
              </span>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </header>
    {/* Side Navi */}
    <nav className='fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 h-full text-white z-10 transition-all duration-300'>
      <div className='overflow-y-auto overflow-x-hidden flex flex-col justify-between grow'>
        <ul className='flex flex-col py-4 space-y-1'>
          <li className='px-5 hidden md:block'>
            <div className='flex flex-row items-center h-8'>
              <div className='text-sm font-light tracking-wide text-gray-400 uppercase'>Main</div>
            </div>
          </li>
          <li>
            <a
              href='#'
              className='relative flex flex-row items-center h-11 focus:outline-none focus:bg-blue-800 focus:border-blue-500 hover:bg-blue-800  border-l-4 border-transparent hover:border-blue-500 pr-6'
            >
              <span className='inline-flex justify-center items-center ml-4'>
                <BoardIcon />
              </span>
              <span className='ml-2 text-sm tracking-wide truncate'>Board</span>
              <span className='hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full'>
                New
              </span>
            </a>
          </li>
          <li className='px-5 hidden md:block'>
            <div className='flex flex-row items-center mt-5 h-8'>
              <div className='text-sm font-light tracking-wide text-gray-400 uppercase'>
                Settings
              </div>
            </div>
          </li>
          <li>
            <a
              href='#'
              className='relative flex flex-row items-center h-11 focus:outline-none focus:bg-blue-800 focus:border-blue-500 hover:bg-blue-800  border-l-4 border-transparent hover:border-blue-500 pr-6'
            >
              <span className='inline-flex justify-center items-center ml-4'>
                <SettingIcon />
              </span>
              <span className='ml-2 text-sm tracking-wide truncate'>Settings</span>
            </a>
          </li>
        </ul>
        <p className='mb-14 px-5 py-3 hidden md:block text-center text-xs'>Copyright @2022</p>
      </div>
    </nav>
    {/* Main */}
    <main className='h-full ml-14 mt-14 mb-10 md:ml-64 bg-purple-300'>
      <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 p-4 gap-4 '>
        <section className='bg-gray-300 rounded flex flex-col shadow-lg'>
          <h3 className='text-lg bg-gray-800 text-gray-100 rounded-t py-3 pl-6'>Header</h3>
          <div className='max-h-36 py-2 overflow-y-auto px-4'>
            <p>テキスト</p>
          </div>
          <div className='flex justify-end mt-auto px-3'>
            <button className='text-blue-600'>詳しくはこちら.</button>
          </div>
        </section>
        <section className='bg-gray-300 rounded flex flex-col shadow-lg'>
          <h3 className='text-lg bg-gray-800 text-gray-100 rounded-t py-3 pl-6'>Header</h3>
          <div className='max-h-36 py-2 overflow-y-auto px-4'>
            <p>テキスト</p>
            <br />
            <p>テキスト</p>
            <br />
            <p>テキスト</p>
            <br />
            <p>テキスト</p>
            <br />
            <p>テキスト</p>
            <br />
            <p>テキスト</p>
            <br />
          </div>
          <div className='flex justify-end mt-auto px-3'>
            <button className='text-blue-600'>詳しくはこちら.</button>
          </div>
        </section>
        <section className='bg-gray-300 rounded flex flex-col shadow-lg'>
          <h3 className='text-lg bg-gray-800 text-gray-100 rounded-t py-3 pl-6'>Header</h3>
          <div className='max-h-36 py-2 overflow-y-auto px-4'>
            <p>テキスト</p>
          </div>
          <div className='flex justify-end mt-auto px-3'>
            <button className='text-blue-600'>詳しくはこちら.</button>
          </div>
        </section>
        <section className='bg-gray-300 rounded flex flex-col shadow-lg'>
          <h3 className='text-lg bg-gray-800 text-gray-100 rounded-t py-3 pl-6'>Header</h3>
          <div className='max-h-36 py-2 overflow-y-auto px-4'>
            <p>テキスト</p>
          </div>
          <div className='flex justify-end mt-auto px-3'>
            <button className='text-blue-600'>詳しくはこちら.</button>
          </div>
        </section>
      </div>
    </main>
  </div>
);
