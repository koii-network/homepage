import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

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
        <Link href={url}>
          <a>
            <Button
              className=" py-2 px-6 rounded-[24px] w-[271px] text-dark-blue bg-mint"
              label={buttonLabel}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};
