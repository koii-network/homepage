import Link from "next/link";

export type ButtonProps = Readonly<
  {
    label: string;
    className?: string;
    asLink?: boolean;
    href?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    width?: string;
    height?: string;
  } & React.HTMLProps<HTMLButtonElement>
>;

export const Button = ({
  label,
  className,
  asLink,
  href,
  target,
  width,
  height,
}: ButtonProps) => {
  const base = `w-[${width ?? "186px"}] h-[${height ?? "40px"}]`;

  if (asLink) {
    return (
      <div
        className={`${base} display flex justify-center ${className} cursor-pointer`}
      >
        <Link href={href ?? "#"}>
          <a target={target} className="self-center">
            {label}
          </a>
        </Link>
      </div>
    );
  }
  return <button className={className}>{label}</button>;
};
