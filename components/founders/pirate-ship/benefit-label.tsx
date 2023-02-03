import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
  label: string;
}

export const BenefitLabel = ({ image, label }: Props) => (
  <>
    <Image
      alt="Benefit building on Koii"
      className="transition-all duration-700 ease-in-out"
      src={image}
    />
    <div className="w-[150px] whitespace-normal text-left text-koiiblue lg:text-lightmint">
      {label}
    </div>
  </>
);
