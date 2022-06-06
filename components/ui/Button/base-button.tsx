export type ButtonProps = Readonly<
  {
    label: string;
    className?: string;
    asLink?: boolean;
    href?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
  } & React.HTMLProps<HTMLButtonElement>
>;

export const Button = ({
  label,
  className,
  asLink,
  href,
  target,
}: ButtonProps) => {
  if (asLink) {
    return (
      <a href={href} target={target} className={`${className} cursor-pointer`}>
        {label}
      </a>
    );
  }
  return <button className={className}>{label}</button>;
};
