import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

import { SimpleButton } from '../../parts/buttons/SimpleButton.parts';
import { Card } from '../../parts/cards/Card';
import { CardHeader } from '../../parts/cards/CardHeader';
import { LineTextInput } from '../../parts/input/LineTextInput';

type Props = {
  registerHandling: (args: { isAutoSend: boolean; sendCycle: number }) => void;
  sendHandling: () => void;
  isAutoSend: boolean;
  sendCycle: number;
};

const formCycleSchema = yup
  .object()
  .required()
  .shape({
    isAutoSend: yup.string().oneOf(['auto', '']),
    sendCycle: yup
      .number()
      .typeError('数値を入力して下さい')
      .integer('自然数を入力して下さい')
      .min(0, '整数値を入力して下さい')
      .required('必須項目です'),
  });

type FormCycleType = Readonly<{
  isAutoSend: string;
  sendCycle: number;
}>;

export const FormCycle: React.FC<Props> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormCycleType>({
    resolver: yupResolver(formCycleSchema),
    defaultValues: {
      isAutoSend: props.isAutoSend ? 'auto' : '',
      sendCycle: props.sendCycle,
    },
  });

  const onSubmit: SubmitHandler<FormCycleType> = ({ isAutoSend, sendCycle }) => {
    props.registerHandling({
      isAutoSend: isAutoSend === 'auto' ? true : false,
      sendCycle,
    });
  };

  const send = () => {
    props.sendHandling();
  };

  return (
    <Card>
      <CardHeader title='送信フォーム' />
      <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4 flex items-center'>
          <input
            id='isAutoSend'
            type='checkbox'
            value={'true'}
            className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
            {...register('isAutoSend')}
          />
          <label
            htmlFor='isAutoSend'
            className='ml-2 text-sm font-medium text-gray-50 dark:text-gray-300'
          >
            自動送信フラグ
          </label>
        </div>
        <div className='max-w-xs'>
          <LineTextInput<FormCycleType>
            id='origin'
            name='sendCycle'
            placeholder='自動送信周期(ms)'
            register={register}
            error={errors.sendCycle?.message}
          />
        </div>
        <div className='flex justify-between'>
          <SimpleButton type='submit' color='blue'>
            設定
          </SimpleButton>
          <SimpleButton type='button' color='green' onClick={send}>
            手動送信
          </SimpleButton>
        </div>
      </form>
    </Card>
  );
};
