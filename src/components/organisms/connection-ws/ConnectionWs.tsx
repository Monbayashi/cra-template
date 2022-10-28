import { lintName } from '../../../utils/lintNames';
import { SimpleButton } from '../../parts/buttons/SimpleButton.parts';
import { Card } from '../../parts/cards/Card';
import { CardFooter } from '../../parts/cards/CardFooter';
import { CardHeader } from '../../parts/cards/CardHeader';

type Props = {
  connectHandling: () => void;
  disConnectHandling: () => void;
  status: 0 | 1;
  wsInfo: {
    origin: string;
    deviceId: string;
    secKey: string;
  };
};

const classNames = {
  connect: lintName('pl-1.5 text-lg text-blue-500'),
  disconnect: lintName('pl-1.5 text-lg text-red-400'),
};

export const ConnectionWs: React.FC<Props> = (props) => {
  const urlOrigin = props.wsInfo.origin;
  const urlQueryDevice = `?deviceid=${props.wsInfo.deviceId}`;
  const urlQuerySeckey = `&seckey=${props.wsInfo.secKey}`;
  const statusName = props.status ? '接続済み' : '未接続';
  const statusClassName = props.status ? 'connect' : 'disconnect';
  const connectDisabled = props.status ? true : false;
  const disConnectDisabled = props.status ? false : true;
  return (
    <Card>
      <CardHeader title='Websocket コネクション' />
      <div className='overflow-hidden text-ellipsis px-6'>
        {urlOrigin}
        {urlQueryDevice}
        {urlQuerySeckey}
      </div>
      <CardFooter>
        <div className='flex justify-end items-end gap-4'>
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
          <span>
            <span>状態 :</span>
            <span className={classNames[statusClassName]}>{statusName}</span>
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};
