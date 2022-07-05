import Image from "next/image";

type TechCardProps = {
  imgSrc: string;
  title: string;
  subtitle: string;
  description: string;
  alt?: string;
  width: number;
  height: number;
};

export const TechCard = ({
  imgSrc,
  title,
  subtitle,
  description,
  width,
  height,
  alt,
}: TechCardProps) => {
  return (
    <div className="flex flex-col w-[270px] my-10 items-center">
      <div className="flex flex-row gap-4">
        <Image src={imgSrc} width={width} height={height} alt={alt} />
      </div>

      <div className="flex flex-col text-center text-[18px] pt-[15px]">
        <p className="font-semibold underline underline-offset-2">{title}</p>
        <p className="font-semibold">{subtitle}</p>
        <p className="font-light">{description}</p>
      </div>
    </div>
  );
};
