import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

type Props<T extends FieldValues> = {
  id: string;
  name: Path<T>;
  value: string;
  placeholder: string;
  register: UseFormRegister<T>;
  error?: string;
};

export const CheckBox = <T extends FieldValues>(props: Props<T>) => (
  <div className='mb-4 flex items-center'>
    <input
      type='checkbox'
      id={props.id}
      value={props.value}
      className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
      {...props.register(props.name)}
    />
    <label htmlFor={props.id} className='ml-2 select-none text-sm'>
      {props.placeholder} {props.error && <span className='text-red-500'>※{props.error}</span>}
    </label>
  </div>
);
