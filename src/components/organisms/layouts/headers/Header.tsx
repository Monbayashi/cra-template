/**
 * Header
 * @returns
 */
export const Header: React.FC = () => {
  return (
    <header className='fixed z-10 flex h-14 w-full items-center justify-between bg-gray-800 text-gray-100'>
      <div className='flex h-14 w-20 items-center justify-start border-none pl-3 md:w-64 md:justify-center'>
        <h1 className='select-none font-black md:text-2xl'>WS TOOL</h1>
      </div>
    </header>
  );
};
