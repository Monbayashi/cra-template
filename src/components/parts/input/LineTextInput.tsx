import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

type Props<T extends FieldValues> = {
  id: string;
  name: Path<T>;
  placeholder: string;
  register: UseFormRegister<T>;
  error?: string;
};

export const LineTextInput = <T extends FieldValues>(props: Props<T>) => (
  <div className='group relative z-0 mb-6 w-full'>
    <input
      type='text'
      id={props.id}
      className='peer block w-full appearance-none border-0 border-b-2 border-gray-500 bg-transparent py-2.5 px-0 text-gray-50 focus:border-blue-500 focus:outline-none focus:ring-0'
      placeholder=' '
      autoComplete='off'
      {...props.register(props.name)}
    />
    <label
      htmlFor={props.id}
      className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'
    >
      {props.placeholder} {props.error && <span className='text-red-500'>※{props.error}</span>}
    </label>
  </div>
);
