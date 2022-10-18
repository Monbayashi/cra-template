import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

import { SimpleButton } from '../../parts/buttons/SimpleButton.parts';
import { Card } from '../../parts/cards/Card';
import { LineTextInput } from '../../parts/input/LineTextInput';

type Props = {
  registerHandling: (args: { origin: string; deviceId: string; secKey: string }) => void;
  origin: string;
  deviceId: string;
  secKey: string;
};

const formWssSchema = yup
  .object()
  .required()
  .shape({
    origin: yup.string().required('必須項目です'), // TODO match url ws:// wss://
    deviceId: yup.string().required('必須項目です'), // TODO 入力ルール
    secKey: yup.string().required('必須項目です'), // TODO セキュリティキールール
  });

type FormWssType = Readonly<{
  origin: string;
  deviceId: string;
  secKey: string;
}>;

export const FormWss: React.FC<Props> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormWssType>({
    resolver: yupResolver(formWssSchema),
    defaultValues: {
      origin: props.origin,
      deviceId: props.deviceId,
      secKey: props.secKey,
    },
  });

  const onSubmit: SubmitHandler<FormWssType> = (data) => {
    props.registerHandling(data);
  };

  return (
    <Card>
      <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
        <LineTextInput<FormWssType>
          id='origin'
          name='origin'
          placeholder='オリジン (ws://172.1.3.1:00)'
          register={register}
          error={errors.origin?.message}
        />
        <LineTextInput<FormWssType>
          id='deviceId'
          name='deviceId'
          placeholder='装置ID'
          register={register}
          error={errors.deviceId?.message}
        />
        <LineTextInput<FormWssType>
          id='secKey'
          name='secKey'
          placeholder='セキュリティキー'
          register={register}
          error={errors.secKey?.message}
        />
        <SimpleButton type='submit' color='blue'>
          設定
        </SimpleButton>
      </form>
    </Card>
  );
};
