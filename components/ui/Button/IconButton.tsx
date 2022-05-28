import Image from "next/image";

export type IconButtonProps = Readonly<
  {
    as: string;
    className?: string;
    href: string;
  } & React.HTMLProps<HTMLButtonElement>
>;

export const IconButton = ({ as, className, href }: IconButtonProps) => {
  return (
    <div className={className}>
        <a href={href} target="_blank">
            <Image src={as} />
        </a>
    </div>
  )
  ;
};
