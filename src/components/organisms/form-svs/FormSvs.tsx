import { yupResolver } from '@hookform/resolvers/yup';
import { useRef } from 'react';
import { useForm, SubmitHandler, useFieldArray, Controller } from 'react-hook-form';
import { FixedSizeList } from 'react-window';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';

import { InputButton, InputButtonItem } from '../../parts/buttons/InputButton';
import { SimpleButton } from '../../parts/buttons/SimpleButton.parts';
import { Card } from '../../parts/cards/Card';
import { CardHeader } from '../../parts/cards/CardHeader';
import { CheckBox } from '../../parts/form/CheckBox';

type Props = {
  registerHandling: (args: { isRandom: boolean; svs: SvType[] }) => void;
  isRandom: boolean;
  randomMax: number;
  randomMin: number;
  svs: SvType[];
};

type SvType = {
  id: string;
  name: string;
  value: number;
};

type FormSvsType = Readonly<{
  isRandom: string;
  randomMax: number;
  randomMin: number;
  svs: SvType[];
}>;

export const FormSvs: React.FC<Props> = (props) => {
  const {
    register,
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<FormSvsType>({
    resolver: yupResolver(formSvsSchema),
    reValidateMode: 'onSubmit',
    defaultValues: {
      isRandom: props.isRandom ? 'random' : '',
      svs: props.svs,
    },
  });

  const countRef = useRef<HTMLInputElement | null>(null);
  const { fields, append, remove, replace } = useFieldArray({ control, name: 'svs' });

  const appendSvs = () => {
    if (countRef.current == null) return;
    const nValue = Number(countRef.current.value);
    if (!Number.isInteger(nValue) || nValue < 1) return;
    const numCount = Number(countRef.current.value);
    const list = [...new Array(numCount)].map((_, index) => {
      return { id: uuidv4(), name: `SV${index + 1}`, value: 1 };
    });
    replace(list);
    clearErrors('svs');
  };

  const onSubmit: SubmitHandler<FormSvsType> = (data) => {
    const { isRandom, svs } = data;
    props.registerHandling({
      isRandom: isRandom === 'random' ? true : false,
      svs,
    });
  };

  return (
    <Card>
      <CardHeader title='2値設定フォーム' />
      <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-wrap space-x-2'>
          <SimpleButton
            type='button'
            color='blue'
            onClick={() => append({ id: uuidv4(), name: '', value: 0 })}
          >
            追加
          </SimpleButton>
          <InputButton
            type='button'
            color='blue'
            onClick={appendSvs}
            renderInput={() => <InputButtonItem ref={countRef} placeholder='　' />}
          >
            登録
          </InputButton>
          <SimpleButton type='button' color='red' onClick={() => remove()}>
            削除
          </SimpleButton>
        </div>

        <div className='h-5 text-sm text-red-500'>{errors.svs?.message}</div>
        <FixedSizeList
          height={384} // h-96
          itemSize={50}
          itemCount={fields.length}
          itemData={fields}
          itemKey={(i) => fields[i].id}
          width={'100%'}
        >
          {({ style, index }) => {
            return (
              <div style={style} className='relative flex w-full pt-5'>
                {errors.svs && (
                  <span className='absolute top-0 left-[60px] text-xs text-red-500'>
                    {errors.svs && errors.svs[index]?.name?.message && (
                      <span>{` (識別子:${errors.svs[index]?.name?.message})`}</span>
                    )}
                    {errors.svs && errors.svs[index]?.value?.message && (
                      <span>{` (送信値:${errors.svs[index]?.value?.message})`}</span>
                    )}
                  </span>
                )}
                <button
                  type='button'
                  className='w-[60px] shrink-0 rounded border-2 border-transparent text-red-500 focus:border-2 focus:border-red-500 focus:outline-none'
                  onClick={() => remove(index)}
                >
                  削除
                </button>
                <Controller
                  render={({ field }) => (
                    <input
                      className='mx-2 grow border-b-2 border-gray-700 bg-transparent px-2 text-gray-50 focus:border-blue-500 focus:outline-none'
                      placeholder='識別子'
                      {...field}
                    />
                  )}
                  name={`svs.${index}.name`}
                  control={control}
                />
                <Controller
                  render={({ field }) => (
                    <input
                      className='mx-2 grow border-b-2 border-gray-700 bg-transparent px-2 text-gray-50 focus:border-blue-500 focus:outline-none'
                      placeholder='送信値'
                      {...field}
                    />
                  )}
                  name={`svs.${index}.value`}
                  control={control}
                />
              </div>
            );
          }}
        </FixedSizeList>
        <CheckBox<FormSvsType>
          id='isRandom'
          name='isRandom'
          value='random'
          placeholder='送信たびにランダムにデータを変換する。'
          register={register}
        />
        <SimpleButton type='submit' color='blue'>
          設定
        </SimpleButton>
      </form>
    </Card>
  );
};

// ------------ Schemas
const svSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required('必須項目です'),
  value: yup
    .number()
    .typeError('数値を入力して下さい')
    .oneOf([0, 1], '0 or 1を入力して下さい')
    .required('必須項目です'),
});

const formSvsSchema = yup
  .object()
  .required()
  .shape({
    isRandom: yup.string(),
    svs: yup.array().of(svSchema).min(1, '1件以上のデータを登録して下さい'),
  });

// <div className='max-h-96 overflow-y-auto py-4'>
//   {fields.map((fields, index) => (
//     <div className='flex items-center' key={fields.id}>
//       <div className='mr-2'>
//         <SimpleButton
//           type='button'
//           size='small'
//           color='red'
//           onClick={() => removeSv(index)}
//         >
//           ×
//         </SimpleButton>
//       </div>
//       <div className='grid w-full grid-cols-2 gap-3'>
//         <LineTextInput<FormSvsType>
//           id={`name_${fields.id}`}
//           name={`svs.${index}.name`}
//           placeholder='識別子'
//           register={register}
//           error={errors.svs && errors.svs[index]?.name?.message}
//         />
//         <LineTextInput<FormSvsType>
//           id={`value_${fields.id}`}
//           name={`svs.${index}.value`}
//           placeholder='送信値'
//           register={register}
//         />
//       </div>
//     </div>
//   ))}
// </div>
