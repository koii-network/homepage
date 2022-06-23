import Image from "next/image";
import styles from "/styles/home.module.css";
import { Card } from "./card";

export const Num = () => {
  return (
    <div
      className={`${styles.num} h-[900px] md:h-[900px] lg:h-[600px] overflow-visible`}
      id="nightsky"
    >
      <div className="container relative mx-auto overflow-visible text-koiiblue">
        <div className="topvector absolute top-[2rem]">
          <Image
            src="/images/vector/arrow-right.svg"
            width={854}
            height={162}
          />
        </div>
        <div className="botvector absolute right-0 bottom-[-2rem] lg:bottom-[-6rem]">
          <Image src="/images/vector/arrow-left.svg" width={854} height={162} />
        </div>
        <div className="relative flex flex-col lg:flex-row pt-[3rem] lg:pt-[6rem] items-center place-content-evenly">
          <Card top="more than" number="30M+" bot="Views" />
          <Card top="about" number="300K+" bot="Tokens awarded" />
          <Card top="more than" number="40K+" bot="Node pre-registered" />
        </div>
      </div>
    </div>
  );
};
