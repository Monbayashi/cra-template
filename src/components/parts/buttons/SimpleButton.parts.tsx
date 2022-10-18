import { lintName } from '../../../utils/lintNames';

type TypeProps = { type: 'button'; onClick: () => void } | { type: 'submit'; onClick?: () => void };

type Props = {
  color: keyof typeof classNames;
  children: React.ReactNode;
  disabled?: boolean;
} & TypeProps;

export const classNames = {
  _base: lintName('rounded border py-1 px-3 font-bold '),
  blue: lintName(
    'border-blue-700 bg-blue-500 text-gray-50 hover:bg-blue-700 focus:bg-red-700 focus:outline-none disabled:border-gray-600 disabled:bg-gray-500 ',
  ),
  red: lintName(
    'border-red-700 bg-red-500 text-gray-50 hover:bg-red-700 focus:bg-red-700 focus:outline-none disabled:border-gray-600 disabled:bg-gray-500',
  ),
  green: lintName('border-green-700 bg-green-500 text-gray-50 hover:bg-green-700'),
  white: lintName('border-gray-300 bg-gray-50 text-gray-800 hover:bg-gray-100'),
} as const;

export const SimpleButton: React.FC<Props> = ({ type, onClick, color, children, disabled }) => (
  <button
    disabled={disabled}
    type={type}
    className={`${classNames._base} ${classNames[color]}`}
    onClick={onClick}
  >
    {children}
  </button>
);
