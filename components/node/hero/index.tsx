import { useMediaQuery } from "@/components/hooks";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/Button";

export const Nodehero = () => {
  const isBreakpoint = useMediaQuery(728);
  return (
    <div
      className={`heroNode h-[1230px] xl:h-[900px] pt-[4rem] xl:pt-[70px]`}
      id="myID"
    >
      <div className="container ">
        <div className="flex flex-col pt-[8rem] xl:pt-[4rem] xl:pl-[5rem] items-center md:items-start">
          <div className="Node-title text-[#ECFFFE] text-white font-semibold md:font-blod text-[30px] md:text-[44px] xl:text-[56px] w-[300px] xl:w-[587px]">
            Nodes are here
          </div>
          <div className="Node-subtitle text-[#ECFFFE] font-normal text-[18px] md:text-[20px] xl:text-[32px] md:w-[400px] xl:w-[455px] w-[300px] pt-[6px]">
            Making the internet better, <br />
            one node at a time.
          </div>
          <div className="Node-subtitle font-semibold text-[#ECFFFE] text-white text-[18px] md:text-[20px] xl:text-[20px] md:w-[400px] xl:w-[600px] w-[300px] pt-[4rem] leading-[32px]">
            We’re slowly expanding the network to make sure everything runs
            smoothly. <br />
            Get on the list now - it’s first come, first serve!
          </div>
          <div className="w-fit">
            <Button
              width="221px"
              height="40px"
              asLink
              target="_blank"
              href="https://share.hsforms.com/1kLtk8rfURZ-HY2xnKRTfCgc20dg"
              className="px-6 py-3 w-[190px] bg-[#9BE7C4] text-koiiblue text-normal rounded-[32px] drop-shadow-lg mt-[3rem]"
              label="Node Waitlist"
            />
          </div>
          <div className="Node-subtitle text-[#ECFFFE] text-white text-[18px] md:text-[20px] xl:text-[20px] md:w-[400px] xl:w-[600px] w-[280px] pt-[4rem] leading-[32px]">
            In the meantime, check out the Finnie Wallet for an easy,
            multi-chain wallet experience.
          </div>
          <div className="w-fit">
            <Button
              width="221px"
              height="40px"
              asLink
              target="_blank"
              href="https://chrome.google.com/webstore/detail/finnie/cjmkndjhnagcfbpiemnkdpomccnjblmj"
              className="border-2 border-[#9BE7C4] px-6 py-3 w-[190px] bg-transparent text-koiiblue text-normal text-white rounded-[32px] drop-shadow-lg mt-[3rem]"
              label="Get Finnie"
            />
          </div>
        </div>
        {isBreakpoint ? (
          <div className="absolute z-20 w-[400px] h-[300px] right-0 translate-y-4">
            <Image src="/images/node/hero_mobile.svg" layout="fill" />
          </div>
        ) : (
          <div className="absolute z-20 md:w-[469px] md:h-[421px] xl:w-[869px] xl:h-[721px] md:right-0 md:top-0">
            <Image src="/images/node/hero.svg" layout="fill" />
          </div>
        )}
      </div>
    </div>
  );
};
