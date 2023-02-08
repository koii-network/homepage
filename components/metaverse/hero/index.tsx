import { useMediaQuery } from "@/components/hooks";
import Image from "next/image";
import React from "react";

export const Metaversehero = () => {
  const isBreakpoint = useMediaQuery(728);
  return (
    <div
      className={`herometaverse xl:h-[800px] pt-[4rem] xl:pt-[70px]`}
      id="myID"
    >
      <div
        className={`h-[782px] xl:h-[725px] relative z-10`}
        style={{
          background: isBreakpoint
            ? `url("/images/metaverse/hero_curve.svg") no-repeat center / cover`
            : `url("/images/metaverse/hero_curve.svg") no-repeat center / cover`,
        }}
      >
        <div className="container">
          <div className="flex flex-col pt-[8rem] xl:pt-[4rem] xl:pl-[5rem]">
            <div className="metaverse-title text-white font-semibold md:font-normal text-[30px] md:text-[44px] xl:text-[50px] xl:w-[587px]">
              Koii makes metaverses you can own—
            </div>
            <div className="metaverse-subtitle text-white text-[18px] md:text-[20px] xl:text-[24px] md:w-[400px] xl:w-[455px] pt-[30px]">
              And they pay you whenever someone spends time enjoying your world.
            </div>
          </div>
          <div className="metaverse-guy absolute z-20 w-[225px] h-[225px] xl:w-[324px] xl:h-[324px] right-[7rem] md:right-[16rem] xl:right-[20rem] 2xl:right-[25rem] bottom-[10rem] xl:bottom-[7rem]">
            <Image src="/images/metaverse/metaverse-guy.svg" layout="fill" />
          </div>
          <div className="metaverse-lady absolute z-30 w-[194px] h-[194px] xl:w-[258px] xl:h-[258px] right-[3rem] md:right-[12rem] xl:right-[10rem] 2xl:right-[15rem] bottom-[1rem] xl:bottom-[-1rem]">
            <Image src="/images/metaverse/metaverse-lady.svg" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};
