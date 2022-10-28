type Props = {
  children: React.ReactNode;
};

export const CardFooter: React.FC<Props> = ({ children }) => (
  <div className='flex justify-end mt-auto py-3  px-4'>{children}</div>
);
