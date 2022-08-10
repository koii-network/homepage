import { useMediaQuery } from "@/components/hooks";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/Button";

export const Nodehero = () => {
  const isBreakpoint = useMediaQuery(728);
  return (
    <div
      className={`heroNode h-[1230px] lg:h-[900px] pt-[4rem] lg:pt-[70px]`}
      id="myID"
    >
      <div
        className={`h-[1082px] lg:h-[525px] relative z-10`}
        style={{
          background: isBreakpoint
            ? `url("/images/Node/hero_curve.svg") no-repeat bottom center / cover`
            : `url("/images/Node/hero_curve.svg") no-repeat bottom center / cover`,
        }}
      >
        <div className="container ">
          <div className="flex flex-col pt-[8rem] lg:pt-[4rem] lg:pl-[5rem] ">
            <div className="Node-title text-[#ECFFFE] text-white font-semibold md:font-blod text-[30px] md:text-[44px] lg:text-[56px] w-[300px] lg:w-[587px]">
              Nodes are here
            </div>
            <div className="Node-subtitle text-[#ECFFFE] font-normal text-[18px] md:text-[20px] lg:text-[32px] md:w-[400px] lg:w-[455px] w-[280px] pt-[6px]">
            Making the internet better, <br/>
one node at a time.
            </div>
            <div className="Node-subtitle font-semibold text-[#ECFFFE] text-white text-[18px] md:text-[20px] lg:text-[20px] md:w-[400px] lg:w-[600px] w-[280px] pt-[4rem] leading-[32px]">
            We’re slowly expanding the network to make sure everything runs smoothly.  <br/>
Get on the list now - it’s first come, first serve!
            </div>
            <div className="w-fit">
              <Button
                width="221px"
                height="40px"
                asLink
                target="_blank"
                href="https://docs.koii.network/Nodeing-koii/attention-mining"
                className="px-6 py-3 w-[190px] bg-[#9BE7C4] text-koiiblue text-normal rounded-[32px] drop-shadow-lg mt-[3rem]"
                label="Node Waitlist"
              />
            </div>
            <div className="Node-subtitle text-[#ECFFFE] text-white text-[18px] md:text-[20px] lg:text-[20px] md:w-[400px] lg:w-[600px] w-[280px] pt-[4rem] leading-[32px]">
            In the meantime, check out the Finnie Wallet for an easy, multi-chain wallet experience.
            </div>
            <div className="w-fit">
              <Button
                width="221px"
                height="40px"
                asLink
                target="_blank"
                href="https://docs.koii.network/Nodeing-koii/attention-mining"
                className="border-2 border-[#9BE7C4] px-6 py-3 w-[190px] bg-transparent text-koiiblue text-normal text-white rounded-[32px] drop-shadow-lg mt-[3rem]"
                label="Get Finnie"
              />
            </div>
          </div>

          <div className="ease-in-out animate-[guy_15000ms_ease-in-out_infinite;] guy absolute z-20 w-[366.62px] h-[462.49px] lg:w-[466.62px] lg:h-[562.49px] right-[50%] translate-x-2/4 md:translate-x-[75%] lg:translate-x-[100%] 2xl:translate-x-[125%] bottom-[10rem] md:bottom-[12rem] lg:bottom-[-11rem]">
            <Image src="/images/Node/hero_guy.svg" layout="fill" />
          </div>
          <div className="ease-in-out animate-[guitar_15000ms_ease-in-out_infinite;] guitar absolute z-20 w-[378.62px] h-[414.49px] lg:w-[531.62px] lg:h-[514.49px] right-[50%] translate-x-2/4 md:translate-x-[75%] lg:translate-x-[100%] bottom-[10rem] md:bottom-[10rem] lg:bottom-[-11rem]">
            <Image src="/images/Node/hero_guitar.svg" layout="fill" />
          </div>
          <div className="ease-in-out animate-[paint_15000ms_ease-in-out_infinite;] paint absolute z-20 w-[462.62px] h-[532.49px] lg:w-[627.5px] lg:h-[632.89px] right-[50%] translate-x-[45%] md:translate-x-[80%] lg:translate-x-[95%] bottom-[7rem] md:bottom-[6rem] lg:bottom-[-11rem]">
            <Image src="/images/Node/hero_paint.svg" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};
