export type ButtonProps = Readonly<
  {
    label: string;
    className?: string;
  } & React.HTMLProps<HTMLButtonElement>
>;

export const Button = ({ label, className }: ButtonProps) => {
  return <button className={className}>{label}</button>;
};
