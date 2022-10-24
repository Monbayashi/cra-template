import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

import { SimpleButton } from '../../parts/buttons/SimpleButton.parts';
import { Card } from '../../parts/cards/Card';
import { CardHeader } from '../../parts/cards/CardHeader';
import { CheckBox } from '../../parts/form/CheckBox';
import { LineTextInput } from '../../parts/form/LineTextInput';

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
    isAutoSend: yup.string(),
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

  return (
    <Card>
      <CardHeader title='送信フォーム' />
      <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
        <CheckBox<FormCycleType>
          id='isAutoSend'
          name='isAutoSend'
          value='auto'
          placeholder='自動送信フラグ'
          register={register}
        />
        <LineTextInput<FormCycleType>
          id='origin'
          name='sendCycle'
          placeholder='自動送信周期(ms)'
          register={register}
          error={errors.sendCycle?.message}
        />
        <SimpleButton type='submit' color='blue'>
          設定
        </SimpleButton>
      </form>
    </Card>
  );
};
