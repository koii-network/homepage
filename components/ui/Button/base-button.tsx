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
    iconLabel?: any;
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
  iconLabel,
}: ButtonProps) => {
  const base = `w-[${width ?? "186px"}] h-[${height ?? "40px"}]`;

  if (asLink) {
    return (
      <div>
        <Link href={href ?? "#"}>
          <a target={target} className="self-center">
            <div
              className={`${base} items-center display flex justify-center ${className} cursor-pointer`}
            >
              {label}
              {iconLabel}
            </div>
          </a>
        </Link>
      </div>
    );
  }
  return <button className={className}>{label}</button>;
};
