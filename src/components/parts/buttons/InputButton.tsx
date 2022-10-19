import { forwardRef, ReactElement } from 'react';

import { lintName } from '../../../utils/lintNames';

type TypeProps = { type: 'button'; onClick: () => void } | { type: 'submit'; onClick?: () => void };

type Props = {
  color: 'blue' | 'red' | 'green';
  size?: 'middle' | 'small';
  disabled?: boolean;
  renderInput: () => ReactElement<InputButtonItemProps>;
  children: React.ReactNode;
} & TypeProps;

export const classNames = {
  _base: lintName('rounded-r border font-bold'),
  blue: lintName(
    'border-blue-700 bg-blue-500 text-gray-50 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:border-gray-600 disabled:bg-gray-500',
  ),
  red: lintName(
    'border-red-700 bg-red-500 text-gray-50 hover:bg-red-700 focus:bg-red-700 focus:outline-none disabled:border-gray-600 disabled:bg-gray-500',
  ),
  green: lintName(
    'border-green-700 bg-green-500 text-gray-50 hover:bg-green-700 focus:bg-green-700 focus:outline-none disabled:border-gray-600 disabled:bg-gray-500',
  ),
  middle: lintName('py-1 px-3'),
  small: lintName('py-1 px-2 text-sm'),
} as const;

export const InputButton: React.FC<Props> = ({
  type,
  onClick,
  color,
  size = 'middle',
  disabled,
  renderInput,
  children,
}) => {
  const input = renderInput();
  return (
    <div className='flex'>
      {input}
      <button
        disabled={disabled}
        type={type}
        className={`${classNames._base} ${classNames[size]} ${classNames[color]}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

type InputButtonItemProps = {
  placeholder: string;
};

export const InputButtonItem = forwardRef<HTMLInputElement, InputButtonItemProps>((props, ref) => (
  <input
    type='text'
    ref={ref}
    className='block max-w-[80px] appearance-none rounded-l border border-gray-700 bg-gray-500 px-1 text-right text-gray-50 focus:border-blue-500 focus:outline-none focus:ring-0'
    placeholder={props.placeholder}
    autoComplete='off'
    spellCheck='false'
  />
));
InputButtonItem.displayName = 'InputButtonItem';
