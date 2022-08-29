import { useMediaQuery } from "@/components/hooks";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/Button";
import { isMobile } from "react-device-detect";

export const Downloadhero = () => {
  const isBreakpoint = useMediaQuery(728);
  return (
    <div
      className={`herodownload h-[1230px] lg:h-[900px] pt-[4rem] lg:pt-[70px]`}
      id="myID"
    >
      <div className="container ">
        <div className="flex flex-col pt-[8rem] lg:pt-[4rem] lg:pl-[5rem] items-center md:items-start relative z-20">
          <div className="download-title text-[#ECFFFE] text-white font-semibold md:font-blod text-[30px] md:text-[44px] lg:text-[56px] w-[330px] lg:w-[587px]">
            The Koii Node
          </div>
          <div className="download-subtitle text-[#ECFFFE] font-normal text-[18px] md:text-[20px] lg:text-[32px] md:w-[400px] lg:w-[455px] w-[300px] pt-[6px]">
            Making the internet better, <br />
            one node at a time.
          </div>
          <div className="download-subtitle font-semibold text-[#ECFFFE] text-white text-[18px] md:text-[20px] lg:text-[20px] md:w-[400px] lg:w-[600px] w-[330px] pt-[4rem] leading-[32px]">
            Get your node today
          </div>
          <div className="flex md:flex-col lg:flex-row lg:pr-[5rem] w-[100%] lg:place-content-evenly items-center">
            <div className="window text-center">
              <Button
                width=""
                height="40px"
                asLink
                target="_blank"
                href="https://share.hsforms.com/1kLtk8rfURZ-HY2xnKRTfCgc20dg"
                className="px-6 py-3 md:w-[240px] lg:w-[260px] bg-[#9BE7C4] text-koiiblue text-normal rounded-[32px] drop-shadow-lg mt-[3rem]"
                label="Download for Windows"
              />
              <p className="text-[#ECFFFE] mt-[1rem] text-[12px]">
                For Windows11 or later.
              </p>
            </div>
            <div className="mac text-center">
              <Button
                width=""
                height="40px"
                asLink
                target="_blank"
                href="https://share.hsforms.com/1kLtk8rfURZ-HY2xnKRTfCgc20dg"
                className="px-6 py-3 md:w-[240px] lg:w-[260px] bg-[#9BE7C4] text-koiiblue text-normal rounded-[32px] drop-shadow-lg mt-[3rem]"
                label="Download for Mac"
              />
              <p className="text-[#ECFFFE] mt-[1rem] text-[12px]">
                For Mac OS 11.5 or later.
              </p>
            </div>
            <div className="linux text-center">
              <Button
                width=""
                height="40px"
                asLink
                target="_blank"
                href="https://share.hsforms.com/1kLtk8rfURZ-HY2xnKRTfCgc20dg"
                className="px-6 py-3 md:w-[240px] lg:w-[260px] bg-[#9BE7C4] text-koiiblue text-normal rounded-[32px] drop-shadow-lg mt-[3rem]"
                label="Download for Linux"
              />
              <p className="text-[#ECFFFE] mt-[1rem] text-[12px]">
                For Linux ### or later.
              </p>
            </div>
          </div>
          <div className="download-subtitle text-[#ECFFFE] text-white text-[18px] md:text-[20px] lg:text-[20px] md:w-[400px] lg:w-[600px] w-[280px] pt-[4rem] leading-[32px]">
            <p>Having trouble?</p>
            <p>
              Check out the
              <Link href="/node">
                <a>
                  <span className="underline"> support page</span>
                </a>
              </Link>
            </p>
          </div>
        </div>
        {isMobile ? <div>mobile content</div> : <div>desktop content</div>}
        {isBreakpoint ? (
          <div className="absolute z-1 w-[400px] h-[300px] right-0 translate-y-4">
            <Image src="/images/download/hero_mobile.svg" layout="fill" />
          </div>
        ) : (
          <div className="absolute z-1 md:w-[469px] md:h-[421px] lg:w-[669px] lg:h-[521px] md:right-0 md:top-0">
            <Image src="/images/node/download.svg" layout="fill" />
          </div>
        )}
      </div>
    </div>
  );
};
