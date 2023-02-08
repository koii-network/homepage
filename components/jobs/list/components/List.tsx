import Link from "next/link";

export type JobListProps = Readonly<{
  title: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
  id?: string;
}>;

export const JobList = ({ title, className, onClick }: JobListProps) => {
  return (
    <div
      className={`${className} 
  md:w-[662px]  xl:w-[836px] h-auto text-koiiblue my-[5px] p-[30px]`}
    >
      <div className="flex flex-col xl:flex-row justify-between">
        <div className="flex flex-col">
          <p className="title text-[32px]">{title}</p>
          <p className="text-[16px]">Remote</p>
        </div>
        <div className="apply pt-[5px]">
          <Link href="/career/#jobanchor">
            <a className="underline text-[16px]" onClick={onClick}>
              Apply Now
            </a>
          </Link>
        </div>
      </div>
      <hr className="mt-10" />
    </div>
  );
};
