import Image from "next/image";
import { Button } from "@/components/ui/Button";

type WayToEarnProps = {
  imgSrc: string;
  description: React.ReactNode;
  buttonLabel: string;
  url: string;
  alt?: string;
};

export const WayToEarn = ({
  imgSrc,
  alt,
  description,
  buttonLabel,
  url,
}: WayToEarnProps) => {
  return (
    <div className="flex flex-col w-[270px] mb-10">
      <div className="flex flex-row gap-4 mb-10">
        <Image src={imgSrc} width={60} height={80} alt={alt ?? "number"} />
        <div>{description}</div>
      </div>

      <div>
        <Button
          asLink
          href={url}
          className=" py-2 px-6 rounded-[24px] w-[271px] text-dark-blue bg-mint"
          label={buttonLabel}
        />
      </div>
    </div>
  );
};
