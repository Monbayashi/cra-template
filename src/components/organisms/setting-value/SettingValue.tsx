import { Card } from '../../parts/cards/Card';
import { CardHeader } from '../../parts/cards/CardHeader';

type Props = {
  time: string;
  datas: {
    name: string;
    dbName: string;
    value: string;
  }[];
};

export const SettingValue: React.FC<Props> = ({ time, datas }) => {
  const description = time ? `(${time})` : undefined;
  return (
    <Card>
      <CardHeader title='N-PMS設定' description={description} />
      <div className='overflow-x-auto'>
        <table className='w-full border-collapse items-center bg-transparent'>
          <thead className='border border-x-0 border-solid border-gray-500 bg-gray-600 font-semibold text-gray-100'>
            <tr>
              <th className='whitespace-nowrap px-4 py-1.5 text-left align-middle'>設定名</th>
              <th className='whitespace-nowrap px-4 py-1.5 text-left align-middle'>項目名</th>
              <th className='whitespace-nowrap px-4 py-1.5 text-left align-middle'>値</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data) => (
              <tr key={data.dbName}>
                <td className='whitespace-nowrap px-4 align-middle'>{data.name}</td>
                <td className='whitespace-nowrap px-4 align-middle'>{data.dbName}</td>
                <td className='whitespace-nowrap px-4 align-middle text-right'>{data.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {datas.length === 0 && (
          <div className='flex min-h-24 items-center justify-center text-lg text-gray-700'>
            データを取得していません . . . .
          </div>
        )}
      </div>
    </Card>
  );
};
