import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image";
import { useMediaQuery } from "@/components/hooks";

interface Props {
  label: string;
  text: ReactNode;
  images: { dark: StaticImageData; light: StaticImageData };
  onSelect: () => void;
}

export const Benefit = ({ label, text, images, onSelect }: Props) => {
  const isMobileScreen = useMediaQuery(1439);

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-50% 0% -50% 0%",
    onChange: (inView) => {
      if (inView) {
        onSelect();
      }
    },
  });

  const containerClasses = `relative flex flex-col items-center justify-center gap-8 transition-all ease-in-out duration-700 lg:-left-36 ${
    inView
      ? `shadow-benefit rounded-full bg-lightmint w-[305px] h-[305px] mb-10`
      : "w-50 h-50 ml-[5px]"
  }`;

  const externalRingClasses = `absolute transition-all ease-in-out duration-300 rounded-full ${
    inView
      ? `w-[365px] h-[365px] border-2 border-lightmint`
      : "opacity-0 scale(0)"
  }`;

  const textClasses = `pl-10 pr-5 text-left transition-all ease-in-out duration-300 text-xs text-koiiblue font-normal w-62 ${
    inView ? "max-h-96 opacity-1" : "max-h-0 opacity-0 scale(0)"
  }`;

  const image = inView && isMobileScreen ? images.dark : images.light;

  return (
    <div className="flex items-center lg:ml-2 lg:h-50 lg:gap-52" ref={ref}>
      <div className={containerClasses} ref={ref}>
        <div className={externalRingClasses} />
        <div className="flex items-center gap-6 lg:hidden">
          <BenefitLabel image={image} label={label} />
        </div>
        <div className={textClasses}>{text}</div>
      </div>

      <div className="hidden items-center gap-6 lg:flex lg:h-fit">
        <BenefitLabel image={image} label={label} />
      </div>
    </div>
  );
};

interface BenefitLabelProps {
  image: StaticImageData;
  label: string;
}

const BenefitLabel = ({ image, label }: BenefitLabelProps) => {
  const labelClasses =
    "text-koiiblue lg:text-lightmint text-left whitespace-normal w-[150px]";

  return (
    <>
      <Image
        alt="Benefit building on Koii"
        className="transition-all duration-700 ease-in-out"
        src={image}
      />
      <div className={labelClasses}>{label}</div>
    </>
  );
};
