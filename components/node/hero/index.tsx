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

          <div className="absolute z-20 md:w-[469px] md:h-[421px] lg:w-[869px] lg:h-[721px] md:right-0 md:top-0">
            <Image src="/images/node/hero.svg" layout="fill" />
          </div>
        </div>
    </div>
  );
};
