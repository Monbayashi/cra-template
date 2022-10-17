type Props = {
  // props
};

export const CommandSchedule: React.FC<Props> = () => {
  return (
    <div className='relative flex w-full min-w-0 flex-col break-words rounded bg-gray-50 shadow-lg dark:bg-gray-800'>
      <div className='mb-0 rounded-t border-0 px-0'>
        <div className='flex flex-wrap items-center px-4 py-2'>
          <div className='relative w-full max-w-full flex-1 grow'>
            <h3 className='text-base font-semibold text-gray-900 dark:text-gray-50'>
              充放電制御指令
            </h3>
          </div>
          <div className='relative w-full max-w-full flex-1 grow text-right'>
            <button
              className='mr-1 mb-1 rounded bg-blue-500 px-3 py-1 font-bold uppercase text-white outline-none transition-all duration-150 ease-linear focus:outline-none active:bg-blue-600 dark:bg-gray-100 dark:text-gray-800 dark:active:text-gray-700'
              type='button'
            >
              See all
            </button>
          </div>
        </div>
        <div className='block w-full'>
          <div className='whitespace-nowrap border border-x-0 border-solid border-gray-200 bg-gray-100 px-4 py-3 text-left align-middle font-semibold uppercase text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100'>
            Today
          </div>
          <ul className='my-1'>
            <li className='flex px-4'>
              <div className='my-2 mr-3 h-9 w-9 shrink-0 rounded-full bg-indigo-500'>
                <svg className='h-9 w-9 fill-current text-indigo-50' viewBox='0 0 36 36'>
                  <path d='M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z'></path>
                </svg>
              </div>
              <div className='flex grow items-center border-b border-gray-100 py-2 text-sm text-gray-600 dark:border-gray-400 dark:text-gray-100'>
                <div className='flex grow items-center justify-between'>
                  <div className='self-center'>
                    <a
                      className='font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100'
                      href='#0'
                      style={{ outline: 'none' }}
                    >
                      Nick Mark
                    </a>{' '}
                    mentioned{' '}
                    <a
                      className='font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100'
                      href='#0'
                      style={{ outline: 'none' }}
                    >
                      Sara Smith
                    </a>{' '}
                    in a new post
                  </div>
                  <div className='ml-2 shrink-0'>
                    <a
                      className='flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500'
                      href='#0'
                      style={{ outline: 'none' }}
                    >
                      View
                      <span>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          className='transition-transform duration-500 ease-in-out'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className='flex px-4'>
              <div className='my-2 mr-3 h-9 w-9 shrink-0 rounded-full bg-red-500'>
                <svg className='h-9 w-9 fill-current text-red-50' viewBox='0 0 36 36'>
                  <path d='M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z'></path>
                </svg>
              </div>
              <div className='flex grow items-center border-gray-100 py-2 text-sm text-gray-600 dark:text-gray-50'>
                <div className='flex grow items-center justify-between'>
                  <div className='self-center'>
                    The post{' '}
                    <a
                      className='font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100'
                      href='#0'
                      style={{ outline: 'none' }}
                    >
                      Post Name
                    </a>{' '}
                    was removed by{' '}
                    <a
                      className='font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100'
                      href='#0'
                      style={{ outline: 'none' }}
                    >
                      Nick Mark
                    </a>
                  </div>
                  <div className='ml-2 shrink-0'>
                    <a
                      className='flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500'
                      href='#0'
                      style={{ outline: 'none' }}
                    >
                      View
                      <span>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          className='transition-transform duration-500 ease-in-out'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className='whitespace-nowrap border border-x-0 border-solid border-gray-200 bg-gray-100 px-4 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100'>
            Yesterday
          </div>
          <ul className='my-1'>
            <li className='flex px-4'>
              <div className='my-2 mr-3 h-9 w-9 shrink-0 rounded-full bg-green-500'>
                <svg className='text-light-blue-50 h-9 w-9 fill-current' viewBox='0 0 36 36'>
                  <path d='M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z'></path>
                </svg>
              </div>
              <div className='flex grow items-center border-gray-100 py-2 text-sm text-gray-600 dark:text-gray-50'>
                <div className='flex grow items-center justify-between'>
                  <div className='self-center'>
                    <a
                      className='font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100'
                      href='#0'
                      style={{ outline: 'none' }}
                    >
                      240+
                    </a>{' '}
                    users have subscribed to{' '}
                    <a
                      className='font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100'
                      href='#0'
                      style={{ outline: 'none' }}
                    >
                      Newsletter #1
                    </a>
                  </div>
                  <div className='ml-2 shrink-0'>
                    <a
                      className='flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500'
                      href='#0'
                      style={{ outline: 'none' }}
                    >
                      View
                      <span>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          className='transition-transform duration-500 ease-in-out'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
