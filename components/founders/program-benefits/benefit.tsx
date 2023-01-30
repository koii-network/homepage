import Image, { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@/components/hooks";
import styles from "/styles/benefit.module.scss";

interface BenefitProps {
  image: StaticImageData;
  text: string;
  side: "left" | "right";
  lastIndex: boolean;
}

export const Benefit = ({ image, text, side, lastIndex }: BenefitProps) => {
  const { ref, inView } = useInView({
    threshold: 0.35,
    delay: 100,
    rootMargin: "-30% 0% -45% 0%",
  });

  const isBreakpoint = useMediaQuery(1024);
  const benefitClasses = `flex gap-5 mb-4 items-center flex-shrink-0 ${
    side === "right" && isBreakpoint
      ? "flex-row-reverse"
      : "flex-row text-right"
  }
  ${lastIndex ? (side === "left" ? "-ml-10 sm:m-0" : "-mr-24 sm:m-0") : ""}`;

  const imageContainer = `${styles.container} flex-shrink-0`;

  const imageClasses = `transition-all ease-in-out duration-300 ${
    inView && isBreakpoint ? "drop-shadow-3xl" : ""
  }`;

  const textClasses = `font-sans transition-all text-lg leading-6 tracking-tighter ease-in-out duration-200 ${
    inView && isBreakpoint ? "text-mint font-bold" : "text-white"
  } ${side === "left" ? "text-left" : "text-right"}`;

  return (
    <div className={benefitClasses}>
      <div ref={ref} className={imageContainer}>
        <Image alt="Content Apps" className={imageClasses} src={image} />
      </div>
      <div className={textClasses}>{text}</div>
    </div>
  );
};
