import Image, { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";
import styles from "/styles/benefit.module.scss";

interface BenefitProps {
  image: StaticImageData;
  text: string;
  side: "left" | "right";
}

export const Benefit = ({ image, text, side }: BenefitProps) => {
  const { ref, inView } = useInView({
    threshold: 0.7,
    delay: 200,
  });

  const benefitClasses = `w-full flex items-center justify-center gap-5 mb-4 flex-shrink-0 ${
    side === "left" ? "flex-row text-right" : "flex-row-reverse"
  }`;
  const imageClasses = `transition-all ease-in-out duration-300 ${
    inView ? "drop-shadow-3xl" : ""
  }`;

  const textClasses = `font-sans transition-all text-lg leading-6 tracking-tighter ease-in-out duration-200 ${
    inView ? "text-mint font-bold" : "text-white"
  } ${side === "left" ? "text-left" : "text-right"}`;
  return (
    <div className={benefitClasses}>
      <div ref={ref} className={`${styles.container} flex-shrink-0`}>
        <Image alt="Content Apps" className={imageClasses} src={image} />
      </div>
      <div className={textClasses}>{text}</div>
    </div>
  );
};
