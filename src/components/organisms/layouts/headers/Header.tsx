import { useEffect, useState } from 'react';

import { createNowUpdateTime } from '../../../../utils/dateTime';

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

  return (
    <header className='fixed z-10 flex h-14 w-full items-center justify-between bg-gray-800 text-gray-100 px-3 md:px-12'>
      <div className='flex h-14 items-center justify-start border-none'>
        <h1 className='select-none font-black md:text-2xl'>WS TOOL</h1>
      </div>
      <div className='text-sm md:text-base'>{time}</div>
    </header>
  );
};
