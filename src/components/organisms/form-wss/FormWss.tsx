import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

import { SimpleButton } from '../../parts/buttons/SimpleButton.parts';
import { Card } from '../../parts/cards/Card';
import { CardFooter } from '../../parts/cards/CardFooter';
import { CardHeader } from '../../parts/cards/CardHeader';
import { LineTextInput } from '../../parts/form/LineTextInput';

type Props = {
  saveModalOpenHandling: () => void;
  loadModalOpenHandling: () => void;
  registerHandling: (args: { origin: string; deviceId: string; secKey: string }) => void;
  origin: string;
  deviceId: string;
  secKey: string;
};

const formWssSchema = yup
  .object()
  .required()
  .shape({
    origin: yup.string().required('必須項目です'),
    deviceId: yup.string().required('必須項目です'),
    secKey: yup.string().required('必須項目です'),
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
    reset,
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

  useEffect(() => {
    reset({
      origin: props.origin,
      deviceId: props.deviceId,
      secKey: props.secKey,
    });
  }, [reset, props.origin, props.deviceId, props.secKey]);

  return (
    <Card>
      <CardHeader title='接続先設定フォーム' />
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
        <input type='submit' className='hidden' />
      </form>
      <CardFooter>
        <div className='flex justify-between w-full'>
          <SimpleButton type='button' color='blue' onClick={handleSubmit(onSubmit)}>
            設定
          </SimpleButton>
          <div className='flex gap-4'>
            <SimpleButton type='button' color='red' onClick={props.saveModalOpenHandling}>
              Save
            </SimpleButton>
            <SimpleButton type='button' color='green' onClick={props.loadModalOpenHandling}>
              Load
            </SimpleButton>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
