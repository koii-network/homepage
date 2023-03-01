import Image from "next/image";
import styles from "styles/earn.module.css";

type StepsCardProps = {
  className?: string;
  textclassName?: string;
  imgSrc: string;
  title: string;
  description: string;
  alt?: string;
  width: string;
  height: string;
  onMouseEnter?: any;
};

export const StepsCard = ({
  className,
  textclassName,
  imgSrc,
  title,
  description,
  width,
  height,
  alt,
  onMouseEnter,
}: StepsCardProps) => {
  return (
    <div
      className={`${className} ${styles.step1} flex flex-col md:flex-row md:w-[530px] md:items-center py-[1.5rem] md:py-0 relative z-50`}
      onMouseEnter={onMouseEnter}
    >
      <div className={`flex flex-row gap-4 justify-center ${width} ${height}`}>
        <Image src={imgSrc} width={172.5} height={172.5} alt={alt} />
      </div>

      <div
        className={`${textclassName} flex flex-col w-[265px] md:w-auto pt-[15px] md:pl-[2rem]`}
      >
        <p className="font-semibold text-[20px]">{title}</p>
        <p className="font-normal text-[16px] md:w-[300px] pt-[20px] md:pt-[5px]">
          {description}
        </p>
      </div>
    </div>
  );
};
