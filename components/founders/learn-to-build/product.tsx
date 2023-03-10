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
  docsLink: string;
}

export const Product = ({
  label,
  images,
  text,
  side,
  docsLink,
  isSelected,
}: Props) => {
  const { ref, inView } = useInView({
    threshold: 1,
    delay: 300,
  });

  const isMobile = useMediaQuery(1023);
  const labelClasses = `text-white py-5 px-9 lg:px-4 lg:py-3 xl:py-5 xl:px-9 whitespace-nowrap transition-all ease-in-out duration-500 min-w-min w-56 bg-purple lg:w-full lg:max-w-[248px] lg:mx-auto xl:max-w-none z-10 lg:text-sm xl:text-base lg:flex-row lg:items-center ${
    side === "left" && isMobile
      ? "text-left rounded-r-full lg:rounded-full"
      : "text-right ml-auto rounded-l-full lg:rounded-full lg:text-center"
  } ${inView ? "w-12 bg-dark-green lg:w-full lg:bg-purple" : ""}`;
  const textClasses = `px-7 text-left transition-all ease-in-out duration-700 ${
    inView
      ? "max-h-96 opacity-1 lg:max-h-0 lg:opacity-0 overflow-hidden"
      : "max-h-0 opacity-0"
  }`;
  const image =
    (isSelected && !isMobile) || (inView && isMobile)
      ? images.big
      : images.small;

  return isSelected && !isMobile ? (
    <div className="mx-auto flex h-[380px] w-full max-w-[891px] justify-between gap-6 pb-10 transition-all duration-500 ease-in-out lg:-mb-24 lg:-mt-52 lg:h-[700px] xl:gap-0">
      <Image
        alt="Content Apps"
        className="animate-fade-in transition-all duration-500 ease-in-out xl:scale-100"
        src={image}
        height={330}
        key={label}
      />
      <div className="mt-56 flex flex-col text-left lg:scale-90 lg:self-start xl:scale-100">
        <div className="bg-transparent text-xl mt-10 w-48 whitespace-nowrap rounded-full font-semibold">
          {label}
        </div>
        <div className="my-4 w-[424px] text-left text-base">{text}</div>
        <a
          target="_blank"
          rel="noreferrer"
          href={docsLink}
          className="underline"
        >
          See the Docs
        </a>
      </div>
    </div>
  ) : (
    <div className="flex w-full flex-col gap-8 transition-all duration-500 ease-in-out lg:items-center">
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
      <a
        target="_blank"
        rel="noreferrer"
        href={docsLink}
        className={`${textClasses} -mt-4 underline`}
      >
        See the Docs
      </a>
    </div>
  );
};
