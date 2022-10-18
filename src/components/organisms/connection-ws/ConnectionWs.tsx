import { lintName } from '../../../utils/lintNames';
import { SimpleButton } from '../../parts/buttons/SimpleButton.parts';
import { Card } from '../../parts/cards/Card';
import { CardHeader } from '../../parts/cards/CardHeader';

type Props = {
  connectHandling: () => void;
  disConnectHandling: () => void;
  status: 0 | 1;
  wsInfo: {
    type: 'ws' | 'wss';
    ip: string;
    deviceId: string;
    secKey: string;
  };
};

const classNames = {
  connect: lintName('pl-1.5 text-lg text-blue-500'),
  disconnect: lintName('pl-1.5 text-lg text-red-400'),
};

export const ConnectionWs: React.FC<Props> = (props) => {
  const urlOrigin = `${props.wsInfo.type}://${props.wsInfo.ip}`;
  const urlQueryDevice = `?deviceid=${props.wsInfo.deviceId}`;
  const urlQuerySeckey = `&seckey=${props.wsInfo.secKey}`;
  const statusName = props.status ? '接続済み' : '未接続';
  const statusClassName = props.status ? 'connect' : 'disconnect';
  const connectDisabled = props.status ? true : false;
  const disConnectDisabled = props.status ? false : true;
  return (
    <Card>
      <CardHeader title='Websocket コネクション' />
      <div className='px-4 pb-2'>
        <div className='overflow-hidden text-gray-200'>
          <span className='whitespace-nowrap'>{urlOrigin}</span>
          <span className='whitespace-nowrap'>{urlQueryDevice}</span>
          <span className='whitespace-nowrap'>{urlQuerySeckey}</span>
        </div>
        <div className='flex items-end justify-between'>
          <div>
            <span className='text-white'>状態 :</span>
            <span className={classNames[statusClassName]}>{statusName}</span>
          </div>
          <div className='mt-3 flex justify-end space-x-1'>
            <SimpleButton
              color='blue'
              type='button'
              onClick={props.connectHandling}
              disabled={connectDisabled}
            >
              接続
            </SimpleButton>
            <SimpleButton
              color='red'
              type='button'
              onClick={props.disConnectHandling}
              disabled={disConnectDisabled}
            >
              切断
            </SimpleButton>
          </div>
        </div>
      </div>
    </Card>
  );
};
