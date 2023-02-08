import Image, { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";
import styles from "/styles/benefit.module.scss";

interface BenefitProps {
  image: StaticImageData;
  text: string;
  side: "left" | "right";
  lastIndex: boolean;
}

export const Benefit = ({ image, text, side, lastIndex }: BenefitProps) => {
  const { ref, inView } = useInView({
    delay: 100,
    rootMargin: "-50% 0% -50% 0%",
  });

  const benefitClasses = `group text-lg hover:text-[18.5px] text-white !leading-6 flex gap-5 items-center flex-shrink-0 transition-all ease-in-out duration-200 ${
    side === "right" ? "flex-row-reverse lg:flex-row" : "flex-row text-right"
  }
  ${inView ? "text-[18.5px] text-mint lg:text-lg lg:text-white" : ""}
  ${
    lastIndex
      ? side === "left"
        ? "-ml-10 sm:m-0"
        : "-mr-14 gap-x-0 sm:gap-5 sm:m-0"
      : ""
  }
  lg:hover:text-mint lg:hover:drop-shadow-3xl`;

  const imageContainer = `${styles.container} flex-shrink-0 lg:flex-shrink xl:flex-shrink-0`;

  const imageClasses = `relative transition-all ease-in-out duration-300 group-hover:lg:!-top-7 ${
    inView ? "drop-shadow-3xl lg:drop-shadow-none !-top-7 lg:!-top-0" : ""
  }
  `;

  const textClasses = `font-sans transition-all tracking-tighter ease-in-out duration-200 ${
    side === "right" ? "text-right lg:text-left" : "text-left pr-6 lg:pr-0"
  }`;

  return (
    <div className={benefitClasses}>
      <div ref={ref} className={imageContainer}>
        <Image alt="Content Apps" className={imageClasses} src={image} />
      </div>
      <div className={textClasses}>{text}</div>
    </div>
  );
};
