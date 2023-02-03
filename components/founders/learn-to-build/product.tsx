import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
// import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@/components/hooks";

export interface Props {
  label: string;
  images: { small: StaticImageData; big: StaticImageData };
  text: ReactNode;
  side?: "left" | "right";
  isSelected?: boolean;
}

export const Product = ({ label, images, text, side, isSelected }: Props) => {
  const isMobile = useMediaQuery(1439);
  const labelClasses = `text-white py-5 px-9 whitespace-nowrap transition-all ease-in-out duration-500 min-w-min w-56 bg-purple lg:w-full ${
    side === "left" && isMobile
      ? "text-left rounded-r-full lg:rounded-full"
      : "text-right ml-auto rounded-l-full lg:rounded-full lg:text-center"
  }`;
  const textClasses = `px-7 text-left transition-all ease-in-out duration-1300 max-h-96 lg:hidden`;
  const image = isSelected && !isMobile ? images.big : images.small;

  return isSelected && !isMobile ? (
    <div className="max-w-[891px] h-[380px] w-full flex justify-between mx-auto pb-10 -mt-20 transition-all ease-in-out duration-500 lg:h-[700px] lg:-mb-24 lg:-mt-[224px]">
      <Image
        alt="Content Apps"
        className="transition-all ease-in-out duration-500 animate-fade-in"
        src={image}
        height={330}
        key={label}
      />
      <div className="flex flex-col lg:self-center">
        <div className="text-white py-5 w-48 whitespace-nowrap bg-dark-green rounded-full">
          {label}
        </div>
        <div className="w-[424px] mt-10 text-left text-base">{text}</div>
      </div>
    </div>
  ) : (
    <div className="w-full flex flex-col gap-8 transition-all ease-in-out duration-500 lg:items-center">
      <div className={labelClasses}>{label}</div>
      <div>
        <Image
          alt="Content Apps"
          className="transition-all ease-in-out duration-500"
          src={image}
          height={isSelected && !isMobile ? 330 : 215}
        />
      </div>
      <div className={textClasses}>{text}</div>
    </div>
  );
};
