import Image from "next/image";
import Link from "next/link";
export type BubbleProps = {
  size: number;
  text?: string;
};

export const Bubble = ({ size, text }: BubbleProps) => {
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
      className={`relative flex flex-col items-center content-center justify-center text-center`}
    >
      {/**
       * @todo: use raw svg here and animate on hover
       */}
      <Image src="/images/bubble.svg" alt="" layout="fill" />

      <div className="z-20 flex justify-center text-center text-normal text-dark-blue w-[55%]">
        <Link href="https://blog.koii.network/The-Koii-Grant-Program-Set-for-Launch/">
          <a className="block">
            <p>{text}</p>
          </a>
        </Link>
      </div>
    </div>
  );
};
