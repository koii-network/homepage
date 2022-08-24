import { useEffect, useState } from "react";
import { isMobile as rddIsMobile } from "react-device-detect";
import Image from "next/image";
import styles from "/styles/home.module.css";
import fishstream from "public/images/fish-stream_desktop.svg";
import { FeaturesList } from "./components/FeaturesList";

export const Iceberg = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(rddIsMobile);
  }, []);

  return (
    <div className={`${styles.Iceberg} overflow-hidden`} id="iceberg">
      <div className="container relative mx-auto">
        <FeaturesList isMobile={isMobile} />

        <div className="fishstream relative w-[1300px] h-[503px] md:right-0 md:top-[-90px] z-10 ml-[-57rem] md:ml-14">
          <Image
            src={fishstream}
            alt="fishstream"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex justify-end mt-[-9rem] pb-[6rem] pr-[2rem] md:pb-0 md:mt-[1rem] lg:mt-[-12rem] md:pr-[12rem]">
          <div className="text-lightmint w-[300px] md:w-[560px] text-xl text-right z-10">
            We collected all the benefits of blockchain & decentralized storage
            to make web3 easy for everyone.
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="absolute bottom-[75px]">
          <Image
            src={"/images/anchor.svg"}
            alt="anchor"
            width="89px"
            height="119px"
          />
        </div>
        <div className="w-[100vw] h-[397px]">
          <img
            className="object-fill w-full h-full"
            alt="seabed"
            src={"/images/seadeep.svg"}
          />
        </div>
      </div>
    </div>
  );
};
