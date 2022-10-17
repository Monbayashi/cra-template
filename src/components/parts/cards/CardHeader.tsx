type Props = {
  title: string;
  description?: string;
};

export const CardHeader: React.FC<Props> = ({ title, description }) => (
  <div className='flex items-end justify-between border-gray-500 px-4 py-2'>
    <h3 className='text-lg font-semibold text-gray-50'>{title}</h3>
    <p className='pl-2 text-sm text-gray-200'>{description}</p>
  </div>
);
