import { yupResolver } from '@hookform/resolvers/yup';
import { useRef } from 'react';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';

import { InputButton, InputButtonItem } from '../../parts/buttons/InputButton';
import { SimpleButton } from '../../parts/buttons/SimpleButton.parts';
import { Card } from '../../parts/cards/Card';
import { CardHeader } from '../../parts/cards/CardHeader';
import { CheckBox } from '../../parts/form/CheckBox';
import { LineTextInput } from '../../parts/form/LineTextInput';

type Props = {
  registerHandling: (args: {
    isRandom: boolean;
    randomMax: number;
    randomMin: number;
    tms: TmType[];
  }) => void;
  isRandom: boolean;
  randomMax: number;
  randomMin: number;
  tms: TmType[];
};

type TmType = {
  id: string;
  name: string;
  value: number;
};

type FormTmsType = Readonly<{
  isRandom: string;
  randomMax: number;
  randomMin: number;
  tms: TmType[];
}>;

export const FormTms: React.FC<Props> = (props) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTmsType>({
    resolver: yupResolver(formTmsSchema),
    defaultValues: {
      isRandom: props.isRandom ? 'random' : '',
      randomMax: props.randomMax,
      randomMin: props.randomMin,
      tms: props.tms,
    },
  });

  const countRef = useRef<HTMLInputElement | null>(null);
  const { fields, append, remove, replace } = useFieldArray({ control, name: 'tms' });

  const appendTm = () => append({ id: uuidv4(), name: '', value: 0 });

  const removeTm = (index: number) => remove(index);

  const appendTms = () => {
    if (countRef.current == null) return;
    const nValue = Number(countRef.current.value);
    if (!Number.isInteger(nValue) || nValue < 1) return;
    const numCount = Number(countRef.current.value);
    const list = [...new Array(numCount)].map((_, index) => {
      return { id: uuidv4(), name: `TM${index + 1}`, value: index + 1 };
    });
    replace(list);
  };

  const removeTms = () => remove();

  const onSubmit: SubmitHandler<FormTmsType> = (data) => {
    const { isRandom, randomMax, randomMin, tms } = data;
    props.registerHandling({
      isRandom: isRandom === 'random' ? true : false,
      randomMax,
      randomMin,
      tms,
    });
  };

  return (
    <Card>
      <CardHeader title='数値設定フォーム' />
      <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-wrap space-x-2'>
          <SimpleButton type='button' color='blue' onClick={appendTm}>
            追加
          </SimpleButton>
          <InputButton
            type='button'
            color='blue'
            onClick={appendTms}
            renderInput={() => <InputButtonItem ref={countRef} placeholder=' ' />}
          >
            登録
          </InputButton>
          <SimpleButton type='button' color='red' onClick={removeTms}>
            削除
          </SimpleButton>
        </div>

        {errors.tms?.message && (
          <span className='text-sm text-red-500'>※{errors.tms?.message}</span>
        )}
        <div className='max-h-96 overflow-y-auto py-4'>
          {fields.map((fields, index) => (
            <div className='flex items-center' key={fields.id}>
              <div className='mr-2'>
                <SimpleButton
                  type='button'
                  size='small'
                  color='red'
                  onClick={() => removeTm(index)}
                >
                  ×
                </SimpleButton>
              </div>
              <div className='grid w-full grid-cols-2 gap-3'>
                <LineTextInput<FormTmsType>
                  id={`name_${fields.id}`}
                  name={`tms.${index}.name`}
                  placeholder='識別子'
                  register={register}
                  error={errors.tms && errors.tms[index]?.name?.message}
                />
                <LineTextInput<FormTmsType>
                  id={`value_${fields.id}`}
                  name={`tms.${index}.value`}
                  placeholder='送信値'
                  register={register}
                />
              </div>
            </div>
          ))}
        </div>
        <CheckBox<FormTmsType>
          id='isRandom'
          name='isRandom'
          value='random'
          placeholder='送信たびにランダムにデータを変換する。'
          register={register}
        />
        <LineTextInput<FormTmsType>
          id='randomMax'
          name='randomMax'
          placeholder='最大値(ランダム)'
          register={register}
          error={errors.randomMax?.message}
        />
        <LineTextInput<FormTmsType>
          id='randomMin'
          name='randomMin'
          placeholder='最小値(ランダム)'
          register={register}
          error={errors.randomMin?.message}
        />
        <SimpleButton type='submit' color='blue'>
          設定
        </SimpleButton>
      </form>
    </Card>
  );
};

// ------------ Schemas
const tmSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required('必須項目です。'),
  value: yup.number().typeError('数値を入力して下さい').required('必須項目です。'),
});

const formTmsSchema = yup
  .object()
  .required()
  .shape({
    isRandom: yup.string(),
    randomMax: yup
      .number()
      .typeError('数値を入力して下さい')
      .integer('自然数を入力して下さい')
      .required('必須項目です'),
    randomMin: yup
      .number()
      .typeError('数値を入力して下さい')
      .integer('自然数を入力して下さい')
      .required('必須項目です')
      .test('max', '最大値より小さな値を入力して下さい', (value, context) => {
        if (value == null) return true;
        const contextAs = context.parent as FormTmsType;
        return value < contextAs.randomMax;
      }),
    tms: yup.array().of(tmSchema).min(1, '1件以上のデータを登録して下さい'),
  });
