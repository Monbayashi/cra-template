import { lintName } from '../../../utils/lintNames';

type TypeProps = { type: 'button'; onClick: () => void } | { type: 'submit'; onClick?: () => void };

type Props = {
  color: 'blue' | 'red' | 'green';
  size?: 'middle' | 'small';
  children: React.ReactNode;
  disabled?: boolean;
} & TypeProps;

export const classNames = {
  _base: lintName('rounded border font-bold'),
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

export const SimpleButton: React.FC<Props> = ({
  type,
  size = 'middle',
  onClick,
  color,
  children,
  disabled,
}) => (
  <button
    disabled={disabled}
    type={type}
    className={`${classNames._base} ${classNames[size]} ${classNames[color]}`}
    onClick={onClick}
  >
    {children}
  </button>
);
