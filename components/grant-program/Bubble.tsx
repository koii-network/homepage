import Image from "next/image";
import Link from "next/link";
export type BubbleProps = {
  width: number;
  height: number;
  text?: string;
};

export const Bubble = ({ width, height, text }: BubbleProps) => {
  return (
    <div
      style={{
        // backgroundImage: "url('/images/bubble.svg')",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        width,
        height,
      }}
      className={`relative`}
    >
      {/**
       * @todo: use raw svg here and animate on hover
       */}
      <Image src="/images/bubble.svg" alt="" layout="fill" />
      <div className="text-center text-normal absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-dark-blue">
        <Link href="https://blog.koii.network/The-Koii-Grant-Program-Set-for-Launch/">
          <a>{text}</a>
        </Link>
      </div>
    </div>
  );
};
