import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image";
import { ColorsMap, COLORS } from "@/config/benefits-building-on-koii";

const colors: ColorsMap = {
  mint: { background: "bg-mint", border: "border-mint" },
  "[#71d4bc]": { background: "bg-[#71d4bc]", border: "border-[#71d4bc]" },
  "[#79abc6]": { background: "bg-[#79abc6]", border: "border-[#79abc6]" },
  "[#a4d59e]": { background: "bg-[#a4d59e]", border: "border-[#a4d59e]" },
};

interface Props {
  label: string;
  color: COLORS;
  text: ReactNode;
  image: StaticImageData;
  onSelect: () => void;
}

export const Benefit = ({ label, color, text, image, onSelect }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.35,
    delay: 100,
    rootMargin: "-30% 0% -45% 0%",
    onChange: (inView) => {
      if (inView) {
        onSelect();
      }
    },
  });

  const containerClasses = `relative flex flex-col items-center justify-center gap-8 transition-all ease-in-out duration-700 ${
    inView
      ? `rounded-full ${colors[color].background} w-[305px] h-[305px] mb-10`
      : "w-50 h-50 ml-[5px]"
  }`;

  const externalRingClasses = `absolute transition-all ease-in-out duration-300 rounded-full ${
    inView
      ? `w-[365px] h-[365px] border-2 ${colors[color].border}`
      : "opacity-0 scale(0)"
  }`;

  const labelClasses = `text-purple text-left whitespace-normal w-[150px]`;

  const textClasses = `pl-10 pr-5 text-left transition-all ease-in-out duration-300 text-xs text-koiiblue font-normal w-62 ${
    inView ? "max-h-96 opacity-1" : "max-h-0 opacity-0 scale(0)"
  }`;

  return (
    <div className={containerClasses} ref={ref}>
      <div className={externalRingClasses} />
      <div className="flex gap-6 items-center">
        <Image
          alt="Benefit building on Koii"
          className="transition-all ease-in-out duration-700 !w-full !h-full"
          src={image}
        />
        <div className={labelClasses}>{label}</div>
      </div>
      <div className={textClasses}>{text}</div>
    </div>
  );
};
