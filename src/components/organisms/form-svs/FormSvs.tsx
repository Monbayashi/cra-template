import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef } from 'react';
import { useForm, SubmitHandler, useFieldArray, Controller } from 'react-hook-form';
import { FixedSizeList } from 'react-window';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';

import { FileReadEx } from '../../../utils/fileReadEx';
import { InputButton, InputButtonItem } from '../../parts/buttons/InputButton';
import { SimpleButton } from '../../parts/buttons/SimpleButton.parts';
import { Card } from '../../parts/cards/Card';
import { CardFooter } from '../../parts/cards/CardFooter';
import { CardHeader } from '../../parts/cards/CardHeader';
import { CheckBox } from '../../parts/form/CheckBox';

type Props = {
  saveModalOpenHandling: () => void;
  loadModalOpenHandling: () => void;
  registerHandling: (args: { isRandom: boolean; svs: SvType[] }) => void;
  isRandom: boolean;
  svs: SvType[];
};

type SvType = {
  id: string;
  name: string;
  value: number;
};

type FormSvsType = Readonly<{
  isRandom: string;
  svs: SvType[];
}>;

export const FormSvs: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormSvsType>({
    resolver: yupResolver(formSvsSchema),
    reValidateMode: 'onSubmit',
    defaultValues: {
      isRandom: props.isRandom ? 'random' : '',
      svs: props.svs,
    },
  });

  useEffect(() => {
    reset({
      isRandom: props.isRandom ? 'random' : '',
      svs: props.svs,
    });
  }, [reset, props.isRandom, props.svs]);

  const countRef = useRef<HTMLInputElement | null>(null);
  const { fields, append, remove, replace } = useFieldArray({ control, name: 'svs' });

  const appendSvs = () => {
    if (countRef.current == null) return;
    const nValue = Number(countRef.current.value);
    if (!Number.isInteger(nValue) || nValue < 1) return;
    if (nValue >= 5000) return;
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

  // const loadCSV;
  const onLoadCSVClick = () => {
    inputRef.current?.click();
  };

  const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) return;
    const csvString = await new FileReadEx().readAsText(fileObj);
    const rows = csvString.split('\r\n');
    const csvArray = rows.map((row) => row.split(',')).filter((row) => row.length === 2);
    const svs = csvArray.map((item) => {
      const name = item[0] || '';
      const value = item[1] ? parseInt(item[1]) : 0;
      return { id: uuidv4(), name, value };
    });
    setValue('svs', svs);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <Card>
      <CardHeader title='2?????????????????????' />
      <input type='file' accept='.csv' className='hidden' ref={inputRef} onChange={onFileChange} />
      <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-wrap gap-2'>
          <SimpleButton
            type='button'
            color='blue'
            onClick={() => append({ id: uuidv4(), name: '', value: 0 })}
          >
            ??????
          </SimpleButton>
          <InputButton
            type='button'
            color='blue'
            onClick={appendSvs}
            renderInput={() => <InputButtonItem ref={countRef} placeholder=' ' />}
          >
            ??????
          </InputButton>
          <SimpleButton type='button' color='red' onClick={() => remove()}>
            ??????
          </SimpleButton>
          <SimpleButton type='button' color='green' onClick={onLoadCSVClick}>
            CSV??????
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
                      <span>{` (?????????:${errors.svs[index]?.name?.message})`}</span>
                    )}
                    {errors.svs && errors.svs[index]?.value?.message && (
                      <span>{` (?????????:${errors.svs[index]?.value?.message})`}</span>
                    )}
                  </span>
                )}
                <button
                  type='button'
                  className='w-[60px] shrink-0 rounded border-2 border-transparent text-red-500 focus:border-2 focus:border-red-500 focus:outline-none'
                  onClick={() => remove(index)}
                >
                  ??????
                </button>
                <Controller
                  render={({ field }) => (
                    <input
                      className='mx-2 grow border-b-2 border-gray-700 bg-transparent px-2 focus:border-blue-500 focus:outline-none'
                      placeholder='?????????'
                      {...field}
                    />
                  )}
                  name={`svs.${index}.name`}
                  control={control}
                />
                <Controller
                  render={({ field }) => (
                    <input
                      className='mx-2 grow border-b-2 border-gray-700 bg-transparent px-2 focus:border-blue-500 focus:outline-none'
                      placeholder='?????????'
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
          id='sv-isRandom'
          name='isRandom'
          value='random'
          placeholder='????????????????????????????????????????????????'
          register={register}
        />
        <input type='submit' className='hidden' />
      </form>
      <CardFooter>
        <div className='flex justify-between w-full'>
          <SimpleButton type='button' color='blue' onClick={handleSubmit(onSubmit)}>
            ??????
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

// ------------ Schemas
const svSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required('??????????????????'),
  value: yup
    .number()
    .typeError('??????????????????????????????')
    .oneOf([0, 1], '0 or 1????????????????????????')
    .required('??????????????????'),
});

const formSvsSchema = yup
  .object()
  .required()
  .shape({
    isRandom: yup.string(),
    svs: yup.array().of(svSchema).min(1, '1?????????????????????????????????????????????'),
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
//           ??
//         </SimpleButton>
//       </div>
//       <div className='grid w-full grid-cols-2 gap-3'>
//         <LineTextInput<FormSvsType>
//           id={`name_${fields.id}`}
//           name={`svs.${index}.name`}
//           placeholder='?????????'
//           register={register}
//           error={errors.svs && errors.svs[index]?.name?.message}
//         />
//         <LineTextInput<FormSvsType>
//           id={`value_${fields.id}`}
//           name={`svs.${index}.value`}
//           placeholder='?????????'
//           register={register}
//         />
//       </div>
//     </div>
//   ))}
// </div>
