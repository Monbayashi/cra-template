import { Card } from '../../parts/cards/Card';
import { CardHeader } from '../../parts/cards/CardHeader';

type Props = {
  datas: {
    logAt: string;
    logMsg: string;
    logData: string;
  }[];
};

export const LogWss: React.FC<Props> = ({ datas }) => {
  return (
    <Card>
      <CardHeader title='Websocket ログ' />
      <div className='h-96 overflow-y-auto overflow-x-hidden'>
        <table className='w-full border-collapse items-center bg-transparent'>
          <thead className='border-x-0 border-solid border-gray-500 bg-gray-600 font-semibold text-gray-100 sticky top-0'>
            <tr>
              <th className='whitespace-nowrap px-4 py-2 text-left align-middle'>At</th>
              <th className='whitespace-nowrap px-4 py-2 text-left align-middle'>Msg</th>
              <th className='whitespace-nowrap px-4 py-2 text-left align-middle'>Data</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data) => (
              <tr key={`${data.logAt}_${data.logMsg}`} className='text-gray-100'>
                <td className='whitespace-nowrap px-4 align-middle'>{data.logAt}</td>
                <td className='whitespace-nowrap px-4 align-middle'>{data.logMsg}</td>
                <td className='whitespace-nowrap px-4 align-middle overflow-hidden text-ellipsis'>
                  {data.logData}
                </td>
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
