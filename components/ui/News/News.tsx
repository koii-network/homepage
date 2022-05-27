export type NewsProps = Readonly<
  {
    cover: any;
    title: string;
    content: string;
    logo: any;

  } & React.HTMLProps<HTMLButtonElement>
>;

export const News = ({ label }: NewsProps) => (
  <button className="bg-mint w-40 h-14 rounded-3xl font-semibold">
    {label}
  </button>
);
