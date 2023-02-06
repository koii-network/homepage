import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@/components/hooks";

export interface Props {
  label: string;
  images: { small: StaticImageData; big: StaticImageData };
  text: ReactNode;
  side?: "left" | "right";
  isSelected?: boolean;
}

export const Product = ({ label, images, text, side, isSelected }: Props) => {
  const { ref, inView } = useInView({
    threshold: 1,
    delay: 300,
  });

  const isMobile = useMediaQuery(727);
  const labelClasses = `text-white py-5 px-9 whitespace-nowrap transition-all ease-in-out duration-500 min-w-min w-56 bg-purple md:w-full md:max-w-[248px] md:mx-auto xl:max-w-none z-10 ${
    side === "left" && isMobile
      ? "text-left rounded-r-full md:rounded-full"
      : "text-right ml-auto rounded-l-full md:rounded-full md:text-center"
  } ${inView ? "w-12 bg-dark-green md:w-full md:bg-purple" : ""}`;
  const textClasses = `px-7 text-left transition-all ease-in-out duration-700 ${
    inView ? "max-h-96 opacity-1 md:max-h-0 md:opacity-0" : "max-h-0 opacity-0"
  }`;
  const image = isSelected && !isMobile ? images.big : images.small;

  return isSelected && !isMobile ? (
    <div className="mx-auto -mt-20 flex h-[380px] w-full max-w-[891px] justify-between pb-10 transition-all duration-500 ease-in-out md:-mb-24 md:-mt-[224px] md:h-[700px]">
      <Image
        alt="Content Apps"
        className="animate-fade-in transition-all duration-500 ease-in-out md:scale-90 lg:scale-100"
        src={image}
        height={330}
        key={label}
      />
      <div className="flex flex-col md:scale-90 md:self-center lg:scale-100">
        <div className="w-48 whitespace-nowrap rounded-full bg-dark-green py-5 text-white">
          {label}
        </div>
        <div className="mt-10 w-[424px] text-left text-base">{text}</div>
      </div>
    </div>
  ) : (
    <div className="flex w-full flex-col gap-8 transition-all duration-500 ease-in-out md:items-center">
      <div className={labelClasses}>{label}</div>
      <div ref={ref}>
        <Image
          alt="Content Apps"
          className="transition-all duration-500 ease-in-out"
          src={image}
          height={isSelected && !isMobile ? 330 : 215}
        />
      </div>
      <div className={textClasses}>{text}</div>
    </div>
  );
};
