import { useMediaQuery } from "@/components/hooks";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/Button";
import { BrowserView, MobileView } from "react-device-detect";

export const Downloadhero = () => {
  const isBreakpoint = useMediaQuery(728);
  return (
    <div
      className={`herodownload h-[1230px] xl:h-[900px] pt-[4rem] xl:pt-[70px]`}
      id="myID"
    >
      <div className="container ">
        <div className="flex flex-col pt-[8rem] xl:pt-[4rem] xl:pl-[5rem] items-center md:items-start relative z-20">
          <div className="download-title text-[#ECFFFE] text-white font-semibold md:font-blod text-[40px] md:text-[44px] xl:text-[56px] w-[330px] xl:w-[587px]">
            The Koii Node
          </div>
          <div className="download-subtitle text-[#ECFFFE] font-normal text-[18px] md:text-[20px] xl:text-[32px] md:w-[400px] xl:w-[455px] w-[330px] pt-[6px]">
            Making the internet better, <br />
            one node at a time.
          </div>
          <div className="download-subtitle font-semibold text-[#ECFFFE] text-white text-[18px] md:text-[20px] xl:text-[20px] md:w-[400px] xl:w-[600px] w-[330px] pt-[2rem] md:pt-[4rem] leading-[32px]">
            Get your node today
          </div>
          <MobileView className="flex flex-col xl:flex-row xl:pr-[5rem] w-[100%] xl:place-content-evenly items-center text-center">
            <div className="w-[48px] h-[48px] mt-[2rem]">
              <Image src="/images/icon/warning.svg" width={48} height={48} />
            </div>
            <div className="text-[#FFA54B] text-[20px] font-semibold w-[270px]">
              Mobile nodes are still in development. <br />
              Open this page on a computer to get started.
            </div>
          </MobileView>
          <BrowserView className="flex flex-col xl:flex-row xl:pr-[5rem] w-[100%] xl:place-content-evenly items-center">
            <div className="window text-center">
              <Button
                width=""
                height="40px"
                asLink
                target="_blank"
                href="https://share.hsforms.com/1kLtk8rfURZ-HY2xnKRTfCgc20dg"
                className="px-6 py-3 md:w-[240px] xl:w-[260px] bg-[#9BE7C4] text-koiiblue text-normal rounded-[32px] drop-shadow-lg mt-[3rem]"
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
                className="px-6 py-3 md:w-[240px] xl:w-[260px] bg-[#9BE7C4] text-koiiblue text-normal rounded-[32px] drop-shadow-lg mt-[3rem]"
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
                className="px-6 py-3 md:w-[240px] xl:w-[260px] bg-[#9BE7C4] text-koiiblue text-normal rounded-[32px] drop-shadow-lg mt-[3rem]"
                label="Download for Linux"
              />
              <p className="text-[#ECFFFE] mt-[1rem] text-[12px]">
                For Linux ### or later.
              </p>
            </div>
          </BrowserView>
          <div className="download-subtitle text-[#ECFFFE] text-white text-[18px] md:text-[20px] xl:text-[20px] md:w-[400px] xl:w-[600px] w-[280px] pt-[4rem] leading-[32px]">
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
        {isBreakpoint ? (
          <div className="absolute z-1 w-[400px] h-[300px] right-0 translate-y-4">
            <Image src="/images/node/download_mobile.svg" layout="fill" />
          </div>
        ) : (
          <div className="absolute z-1 md:w-[469px] md:h-[421px] xl:w-[669px] xl:h-[521px] md:right-0 md:top-0">
            <Image src="/images/node/download.svg" layout="fill" />
          </div>
        )}
      </div>
    </div>
  );
};
