import { SimpleButton } from '../../parts/buttons/SimpleButton.parts';
import { Card } from '../../parts/cards/Card';
import { CardHeader } from '../../parts/cards/CardHeader';

type Props = {
  datas: {
    logAt: string;
    logMsg: string;
    logData: string;
  }[];
  logDataShowHandling: (log: string) => void;
};

export const LogWss: React.FC<Props> = ({ datas, logDataShowHandling }) => {
  return (
    <Card>
      <CardHeader title='Websocket ログ' />
      <div className='h-96 overflow-y-auto'>
        <table className='w-full border-collapse items-center bg-transparent'>
          <thead className='border-x-0 border-solid border-gray-500 bg-gray-600 font-semibold text-gray-100 sticky top-0'>
            <tr>
              <th className='whitespace-nowrap px-4 py-1.5 text-left align-middle sm:w-44'>At</th>
              <th className='whitespace-nowrap px-4 py-1.5 text-left align-middle sm:w-56'>Msg</th>
              <th className='whitespace-nowrap px-4 py-1.5 text-left align-middle hidden sm:table-cell'>
                Data
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data) => (
              <tr key={`${data.logAt}_${data.logMsg}`} className='border-b border-gray-400'>
                <td className='px-2 align-top'>{data.logAt}</td>
                <td className='px-2 align-top'>{data.logMsg}</td>
                <td className='text-xs px-2 align-middle hidden sm:table-cell'>{data.logData}</td>
                <td className=''>
                  <SimpleButton
                    type='button'
                    onClick={() => logDataShowHandling(data.logData)}
                    color='white'
                  >
                    !
                  </SimpleButton>
                </td>
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
