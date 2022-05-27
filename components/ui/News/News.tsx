export type NewsProps = Readonly<
  {
    cover: any;
    title: string;
    content: string;
    logo: any;
    url: string;
    urltext: string;

  } & React.HTMLProps<HTMLButtonElement>
>;

export const News = ({ cover, title, content, logo, url, urltext }: NewsProps) => (
    <div className="col-md-4 col-sm-12 max-w-sm">
        <img className="rounded-2xl" src={cover} ></img>
        <div className="mt2 uppercase">{title}</div>
        <div className="mt2">{content}</div>
        <a className="underline underline-offset-2" href={url} target="_blank">{urltext}</a>
    </div>
);
