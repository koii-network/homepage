import Image from "next/image";

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

export const Newsblock = ({ cover, title, content, logo, url, urltext }: NewsProps) => (
    <div className="col-md-4 col-sm-12 max-w-sm">
        <Image className="rounded-2xl" src={cover} alt="news cover"/>
        <div className="mt2 uppercase">{title}</div>
        <div className="mt2">{content}</div>
        <a className="underline underline-offset-2" href={url} target="_blank">{urltext}</a>
    </div>
);
