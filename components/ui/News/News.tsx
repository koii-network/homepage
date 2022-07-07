import Image, { StaticImageData } from "next/image";

export type NewsProps = Readonly<
  {
    title: string;
    content: string;
    logo: string | StaticImageData;
    url: string;
    urltext: string;
    imageSlot: React.ReactNode;
    logowidth?: string;
    logoheight?: string;
  } & React.HTMLProps<HTMLButtonElement>
>;

export const Newsblock = ({
  title,
  content,
  logo,
  url,
  urltext,
  logowidth = "66",
  logoheight = "66",
  imageSlot,
}: NewsProps) => (
  <div className="flex flex-col items-center justify-center px-5 mb-[60px] w-[340px] relative z-20">
    <a className="block" href={url} rel="noopener noreferrer" target="_blank">
      <div className="flex justify-center">{imageSlot}</div>
      <div className="mt-4 text-base font-semibold uppercase">
        {title}
      </div>
      <div className="relative z-20 text-sm leading-6 ">
        <div className="h-[168px] pt-[15px] relative z-30">
          <p>{content}</p>
          <div className="underline underline-offset-2">{urltext}</div>
        </div>

        <div className="absolute top-[60px] right-[-50px] z-10 opacity-[0.7]">
          <Image
            src={logo}
            alt="news logo"
            width={logowidth}
            height={logoheight}
          />
        </div>
      </div>
    </a>
  </div>
);
