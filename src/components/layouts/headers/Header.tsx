import { useEffect, useMemo, useState } from 'react';

import { ReactComponent as TitleIcon } from '../../../assets/avatar-driving-female-svgrepo-com.svg';
import { createNowUpdateTime } from '../../../utils/dateTime';

/**
 * Header
 * @returns
 */
export const Header: React.FC = () => {
  const [time, setTime] = useState(createNowUpdateTime());

  useEffect(() => {
    const timeNum = window.setInterval(() => setTime(createNowUpdateTime()), 500);
    return () => window.clearInterval(timeNum);
  }, []);

  const Title = useMemo(
    () => (
      <div className='w-14 h-14 bg-blue-500 md:w-64 flex items-center justify-center select-none text-white'>
        <TitleIcon className='inline-block w-10 h-10' />
        <span className='text-2xl font-bold hidden md:inline-block px-2'>N-PMS sim</span>
      </div>
    ),
    [],
  );

  return (
    <header className='fixed w-full flex items-center justify-between h-14 z-10 bg-gray-200'>
      {/* Header Title */}
      {Title}
      {/* Header Action */}
      <div className='flex justify-between items-center h-14 bg-gray-200'>
        <ul className='flex items-center'>
          <li className='mx-3'>
            <div className='block w-px h-6 bg-gray-400' />
          </li>
          <li>
            <a href='#' className='flex items-center mr-4 hover:text-blue-100'>
              {time}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
