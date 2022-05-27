export type ButtonProps = Readonly<
  {
    label: string;
  } & React.HTMLProps<HTMLButtonElement>
>;

export const Button = ({ label }: ButtonProps) => (
  <button className="bg-mint w-40 h-14 rounded-3xl font-semibold">
    {label}
  </button>
);
