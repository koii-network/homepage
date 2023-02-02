import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@/components/hooks";

interface Props {
  label: string;
  image: StaticImageData;
  text: ReactNode;
  side: "left" | "right";
}

export const Product = ({ label, image, text, side }: Props) => {
  const { ref, inView } = useInView({
    threshold: 1,
    delay: 300,
  });

  const isBreakpoint = useMediaQuery(1024);
  // ideally we'd go from w-fit to w-56 but to transition it needs for both to be absolute units,
  // so we go from w-12 but with a min-w-min to prevent us from having a width smaller than the actual label text
  const labelClasses = `text-white py-5 px-9 whitespace-nowrap transition-all ease-in-out duration-500 min-w-min ${
    inView && isBreakpoint ? "w-12 bg-dark-green" : "w-56 bg-purple lg:w-full"
  } ${
    side === "left" && isBreakpoint
      ? "text-left rounded-r-full lg:rounded-full"
      : "text-right ml-auto rounded-l-full lg:rounded-full lg:text-center"
  }`;

  const textClasses = `px-7 text-left transition-all ease-in-out duration-1300 ${
    inView && isBreakpoint ? "max-h-96 opacity-1" : "max-h-0 opacity-0"
  }`;

  return (
    <div className="w-full flex flex-col gap-8 transition-all ease-in-out duration-500 lg:items-center">
      <div className={labelClasses}>{label}</div>

      <div ref={ref}>
        <Image
          alt="Content Apps"
          className="transition-all ease-in-out duration-500"
          src={image}
        />
      </div>

      <div className={textClasses}>{text}</div>
    </div>
  );
};
