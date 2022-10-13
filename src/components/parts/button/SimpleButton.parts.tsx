import { lintName } from "../../../utils/lintNames";

type TypeProps = 
{ type: 'button', onClick: () => void; }
| { type: 'submit', onClick?: () => void; }

type Props = {
  color: 'blue' | 'red' | 'green';
  children: React.ReactNode;
} & TypeProps;

export const classNames = {
  _base: lintName('rounded border py-2 px-4 font-bold text-white'),
  blue: lintName('border-blue-700 bg-blue-500 hover:bg-blue-700'),
  red: lintName('border-red-700 bg-red-500 hover:bg-red-700'),
  green: lintName('border-green-700 bg-green-500 hover:bg-green-700'),
} as const;

export const SimpleButton: React.FC<Props> = ({ type, onClick, color, children, }) => (
  <button type={type} className={`${classNames._base} ${classNames[color]}`} onClick={onClick} >
    {children}
  </button>
)