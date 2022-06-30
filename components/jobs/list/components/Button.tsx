import Link from "next/link";

export type JobBtnProps = Readonly<
  {
    label: string;
    className?: string;
    id?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
  } & React.HTMLProps<HTMLButtonElement>
>;

export const JobBtn = ({ label, className, id, onClick }: JobBtnProps) => {
  return (
    <Link href="/career/#jobanchor">
      <button
        className={`${className}
  max-w-[300px] md:w-[352px] h-[48px] bg-[#F8F7FC] text-left rounded-3xl color-[#0A071B] my-[5px] pl-[30px]`}
        id={id}
        onClick={onClick}
      >
        {label}
      </button>
    </Link>
  );
};
