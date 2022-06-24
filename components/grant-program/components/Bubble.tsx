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
      <Link href="https://blog.koii.network/The-Koii-Grant-Program-Set-for-Launch/">
        <a
          className="block text-center"
          rel="noreferrer noopener"
          target="_blank"
        >
          <div className="z-20 flex justify-center text-center text-normal text-dark-blue relative">
            <p className="w-[55%]">{text}</p>
          </div>
          <Image src="/images/bubble.svg" alt="" layout="fill" />
        </a>
      </Link>
    </div>
  );
};
