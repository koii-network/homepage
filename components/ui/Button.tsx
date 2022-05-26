export type ButtonPropsType = Readonly<
  {
    label: string;
  } & HTMLButtonElement
>;

export const Button: React.FC<ButtonPropsType> = ({ label }) => (
  <button>{label}</button>
);
