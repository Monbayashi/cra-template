type TypeProps = 
{ type: 'button', onClick: () => void; }
| { type: 'submit', onClick?: () => void; }

type Props = {
  color: 'blue' | 'red' | 'green';
  children: React.ReactNode;
} & TypeProps;

export const className = {
  _base: 'text-white font-bold py-2 px-4 border rounded',
  blue: 'bg-blue-500 hover:bg-blue-700 border-blue-700',
  red: 'bg-red-500 hover:bg-red-700 border-red-700',
  green: 'bg-green-500 hover:bg-green-700 border-green-700',
} as const;

export const SimpleButton: React.FC<Props> = ({ type, onClick, color, children, }) => (
  <button type={type} className={`${className._base} ${className[color]}`} onClick={onClick} >
    {children}
  </button>
)