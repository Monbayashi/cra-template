import { forwardRef } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

type Props<T extends FieldValues> = {
  id: string;
  placeholder: string;
  error?: string;
} & ReturnType<UseFormRegister<T>>;

const InputText2Inner = <T extends FieldValues>(
  { id, placeholder, error, onChange, onBlur }: Props<T>,
  ref: React.ForwardedRef<HTMLInputElement>,
) => (
  <div className='group relative z-0 mb-6 w-full'>
    <input
      type='text'
      id={id}
      className='peer block w-full appearance-none border-0 border-b-2 border-gray-500 bg-transparent pt-2.5 pb-1.5 px-0 focus:border-blue-500 focus:outline-none focus:ring-0'
      autoComplete='off'
      spellCheck='false'
      onChange={onChange}
      onBlur={onBlur}
      ref={ref}
    />
    <label
      htmlFor={id}
      className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-400'
    >
      {placeholder} {error && <span className='text-sm text-red-500'>※{error}</span>}
    </label>
  </div>
);

export const InputText2 = forwardRef(InputText2Inner);
