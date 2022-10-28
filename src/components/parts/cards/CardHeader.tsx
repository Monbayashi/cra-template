type Props = {
  title: string;
  description?: string;
};

export const CardHeader: React.FC<Props> = ({ title, description }) => (
  <div className='flex flex-wrap items-end justify-between p-4 rounded-t'>
    <h3 className='text-lg font-semibold'>{title}</h3>
    <p className='inline-block pl-2 text-sm text-gray-500 overflow-hidden text-ellipsis'>
      {description}
    </p>
  </div>
);
