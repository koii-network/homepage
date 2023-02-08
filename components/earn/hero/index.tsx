import { useMediaQuery } from "@/components/hooks";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/Button";

export const Earnhero = () => {
  const isBreakpoint = useMediaQuery(728);
  return (
    <div
      className={`heroearn h-[1230px] xl:h-[900px] pt-[4rem] xl:pt-[70px]`}
      id="myID"
    >
      <div
        className={`h-[1082px] xl:h-[525px] relative z-10`}
        style={{
          background: isBreakpoint
            ? `url("/images/earn/hero_curve.svg") no-repeat bottom center / cover`
            : `url("/images/earn/hero_curve.svg") no-repeat bottom center / cover`,
        }}
      >
        <div className="container ">
          <div className="flex flex-col pt-[8rem] xl:pt-[4rem] xl:pl-[5rem] ">
            <div className="earn-title text-white font-semibold md:font-normal text-[30px] md:text-[44px] xl:text-[50px] w-[300px] xl:w-[587px]">
              There are so many ways to earn
            </div>
            <div className="earn-subtitle text-white text-[18px] md:text-[20px] xl:text-[24px] md:w-[400px] xl:w-[455px] w-[280px] pt-[30px]">
              No matter who you are or where you’re from, you can earn KOII as
              long as you have an internet connection.
            </div>
            <div className="w-fit">
              <Button
                width="221px"
                height="40px"
                asLink
                target="_blank"
                href="https://docs.koii.network/earning-koii/attention-mining"
                className="px-6 py-3 w-[190px] bg-[#9BE7C4] text-koiiblue text-normal rounded-[32px] drop-shadow-lg mt-[3rem]"
                label="Find out how"
              />
            </div>
          </div>
          <div className="subtitle flex flex-col pt-[30rem] md:pt-[30rem] pb-[5rem] xl:pt-[8rem] xl:pl-[5rem]">
            <div className="sub_head font-semibold text-center md:text-left text-[28px] md:text-[30px] md:w-[565px]">
              The internet should be owned by those who use it.
            </div>
            <div className="sub_content text-[18px] md:w-[590px]" id="subtitle">
              We are giving away the keys to the new web. All you have to do is
              click one of the bubbles to get started.
            </div>
          </div>

          <div className="ease-in-out animate-[guy_15000ms_ease-in-out_infinite;] guy absolute z-20 w-[366.62px] h-[462.49px] xl:w-[466.62px] xl:h-[562.49px] right-[50%] translate-x-2/4 md:translate-x-[75%] xl:translate-x-[100%] 2xl:translate-x-[125%] bottom-[10rem] md:bottom-[12rem] xl:bottom-[-11rem]">
            <Image src="/images/earn/hero_guy.svg" layout="fill" />
          </div>
          <div className="ease-in-out animate-[guitar_15000ms_ease-in-out_infinite;] guitar absolute z-20 w-[378.62px] h-[414.49px] xl:w-[531.62px] xl:h-[514.49px] right-[50%] translate-x-2/4 md:translate-x-[75%] xl:translate-x-[100%] bottom-[10rem] md:bottom-[10rem] xl:bottom-[-11rem]">
            <Image src="/images/earn/hero_guitar.svg" layout="fill" />
          </div>
          <div className="ease-in-out animate-[paint_15000ms_ease-in-out_infinite;] paint absolute z-20 w-[462.62px] h-[532.49px] xl:w-[627.5px] xl:h-[632.89px] right-[50%] translate-x-[45%] md:translate-x-[80%] xl:translate-x-[95%] bottom-[7rem] md:bottom-[6rem] xl:bottom-[-11rem]">
            <Image src="/images/earn/hero_paint.svg" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};
