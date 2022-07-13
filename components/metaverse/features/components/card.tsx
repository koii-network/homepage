import Image from "next/image";

type FeatureCardProps = {
  className?: string;
  textclassName?: string;
  imgSrc: string;
  title: string;
  description: string;
  alt?: string;
  width: string;
  height: string;
};

export const FeatureCard = ({
  className,
  textclassName,
  imgSrc,
  title,
  description,
  width,
  height,
  alt,
}: FeatureCardProps) => {
  return (
    <div
      className={`${className} flex flex-col md:flex-row md:w-[490px] md:items-center py-[1.5rem] md:py-0`}
    >
      <div className={`flex flex-row gap-4 justify-center ${width} ${height}`}>
        <Image src={imgSrc} width={172.5} height={172.5} alt={alt} />
      </div>

      <div className={`${textclassName} flex flex-col pt-[15px] md:pl-[2rem]`}>
        <p className="font-semibold text-[20px]">{title}</p>
        <p className="font-normal text-[16px] w-[234px] lg:w-[300px] pt-[20px] md:pt-[5px]">
          {description}
        </p>
      </div>
    </div>
  );
};
