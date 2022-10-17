type Props = {
  title: string;
};

export const SideBarTitle: React.FC<Props> = ({ title }) => (
  <li className='hidden px-5 md:block'>
    <div className='flex h-8 flex-row items-center'>
      <div className='text-sm font-light uppercase tracking-wide text-gray-400'>{title}</div>
    </div>
  </li>
);
