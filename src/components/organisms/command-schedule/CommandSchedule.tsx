import { Card } from '../../parts/cards/Card';
import { CardHeader } from '../../parts/cards/CardHeader';

type Props = {
  time: string;
  datas: {
    dispAt: string;
    at: string;
    duration: string;
    value: string;
  }[];
};

export const CommandSchedule: React.FC<Props> = ({ time, datas }) => {
  const description = time ? `(${time})` : undefined;
  return (
    <Card>
      <CardHeader title='充放電制御指令' description={description} />
      <div className='max-h-96 overflow-auto'>
        <table className='w-full border-collapse items-center bg-transparent'>
          <thead className='sticky top-0 bg-gray-600 font-semibold text-gray-100 outline-1'>
            <tr>
              <th className='whitespace-nowrap px-4 py-3 text-left align-middle'>実行時刻</th>
              <th className='whitespace-nowrap px-4 py-3 text-left align-middle'>継続時間(分)</th>
              <th className='whitespace-nowrap px-4 py-3 text-left align-middle'>値</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data) => (
              <tr key={`${data.at}_${data.duration}_${data.value}`} className='text-gray-100'>
                <td className='whitespace-nowrap px-4 py-2 align-middle'>{data.dispAt}</td>
                <td className='whitespace-nowrap px-4 py-2 align-middle'>{data.duration}</td>
                <td className='whitespace-nowrap px-4 py-2 align-middle'>{data.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {datas.length === 0 && (
          <div className='flex min-h-24 items-center justify-center text-lg text-gray-300'>
            データを取得していません . . . .
          </div>
        )}
      </div>
    </Card>
  );
};
