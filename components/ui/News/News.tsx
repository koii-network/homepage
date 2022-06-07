import Image from "next/image";

export type NewsProps = Readonly<
  {
    cover: string;
    title: string;
    content: string;
    logo: string;
    url: string;
    urltext: string;
    width?: string | 300;
  } & React.HTMLProps<HTMLButtonElement>
>;

export const Newsblock = ({
  cover,
  title,
  content,
  logo,
  url,
  urltext,
  width,
}: NewsProps) => (
  <div className="px-6 md:max-w-[28rem] pt-12">
    <a
      className="text-sm leading-6"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="cover-image" style={{ textAlign: "center" }}>
        <div
          style={{
            position: "relative",
            width: width + "px",
            height: "200px",
            maxHeight: "200px",
            maxWidth: "400px",
            display: "inline-block",
          }}
          className="center"
        >
          <Image
            className="rounded-2xl"
            src={cover}
            alt="news cover"
            layout="fill"
          />
        </div>
      </div>
      {logo && (
        <div className="flex relative float-right top-32 z-10">
          <Image
            className="inline"
            src={logo}
            alt="news logo"
            width="66"
            height="66"
          />
        </div>
      )}
      <div className="mt-2 uppercase text-base leading-6 min-w-[25rem] px-[2rem]">
        {title}
      </div>
      <div className="mt-2 text-sm leading-6 px-[2rem]">{content}</div>

      <div className="underline underline-offset-2 px-[2rem]">{urltext}</div>
    </a>
  </div>
);
