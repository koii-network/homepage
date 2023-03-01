import { useMediaQuery } from "@/components/hooks";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/Button";
import { HubspotForm } from "@/components/subscribe/hubspot-form";

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
          <div className="flex flex-col pt-[8rem] xl:pt-[10rem] xl:pl-[5rem] ">
            <div className="earn-title text-white font-semibold md:font-normal text-[30px] md:text-[44px] xl:text-[50px] w-[300px] xl:w-[587px]">
              Take back the internet.
            </div>
            <div className="earn-subtitle text-white text-[18px] md:w-[400px] xl:w-[505px] w-[280px] pt-[30px]">
              Rent your computer to make income while you sleep, and help us
              power the next generation of communities.
            </div>
            <div className="w-fit pt-[4rem]">
              <HubspotForm
                formId={"a5b3b039-0c80-4c95-90b3-73bd3ee00315"}
                wrapperClassNames={
                  "p-1 bg-white border border-solid border-dark-blue rounded-[32px] md:w-[400px] flex flex-row justify-between subscribe-button"
                }
                inputClassNames={
                  " outline-none bg-none focus:border-none md:w-[224px]"
                }
                inputWrapperClassNames={"ml-4 pt-3"}
                submitClassNames={
                  "bg-[#4E4E8D] text-white rounded-[24px] w-[142px] h-[48px] text-[12px] uppercase"
                }
              />
            </div>
          </div>
          <div className="subtitle flex flex-col pt-[30rem] md:pt-[30rem] pb-[5rem] xl:pt-[8rem] xl:pl-[5rem]">
            <div className="sub_head font-semibold text-center md:text-left text-[28px] md:text-[28px] md:w-[565px]">
              Tasks are like Uber for your computer.
            </div>
            <div
              className="sub_content text-[18px] md:w-[590px] py-[10px]"
              id="subtitle"
            >
              Developers need lots of computers to run the apps and websites
              that you use every day. <br />
              <p className="py-[10px]">
                You don’t need a supercomputer—the unused power from your laptop
                and an internet connection is worth a lot.
              </p>
            </div>
            <div className="md:w-fit md:flex md:space-x-6">
              <Button
                width="280px"
                height="40px"
                asLink
                target="_blank"
                href="https://docs.koii.network/earning-koii/attention-mining"
                className="px-6 py-3 w-[245px] bg-[#4D3D8D] text-white text-normal rounded-[32px] drop-shadow-lg mt-[1rem]"
                label="Run Tasks, Earn $$$"
              />
              <Button
                width="280px"
                height="40px"
                asLink
                target="_blank"
                href="https://docs.koii.network/earning-koii/attention-mining"
                className="px-6 py-3 w-[154px] bg-[#087980] text-white text-normal rounded-[32px] drop-shadow-lg mt-[1rem]"
                label="Developers"
              />
            </div>
          </div>

          <div className="ease-in-out animate-[guy_15000ms_ease-in-out_infinite;] guy absolute z-20 w-[366.62px] h-[462.49px] xl:w-[366.62px] translate-y-[7%] xl:h-[562.49px] right-[50%] translate-x-2/4 md:translate-x-[75%] xl:translate-x-[130%] 2xl:translate-x-[125%] bottom-[10rem] md:bottom-[12rem] xl:bottom-[-9rem]">
            <Image
              src="/images/earn/Hero-People-Money.svg"
              layout="fill"
              alt="People investing"
            />
          </div>
          <div className="ease-in-out animate-[guitar_15000ms_ease-in-out_infinite;] guitar absolute z-20 w-[278.62px] h-[414.49px] xl:w-[331.62px] xl:h-[514.49px] right-[50%] translate-x-2/4 md:translate-x-[75%] xl:translate-x-[130%] bottom-[10rem] md:bottom-[10rem] xl:bottom-[-9rem]">
            <Image
              src="/images/earn/Hero- Server-Data.svg"
              layout="fill"
              alt="Servers running"
            />
          </div>
          <div className="ease-in-out animate-[paint_15000ms_ease-in-out_infinite;] paint absolute z-20 w-[310px] h-[532.49px] xl:w-[400px] xl:h-[632.89px] right-[50%] translate-x-[45%] translate-y-[7%] md:translate-x-[80%] xl:translate-x-[130%] bottom-[7rem] md:bottom-[6rem] xl:bottom-[-9rem]">
            <Image
              src="/images/earn/Hero-Desktop-Money.svg"
              layout="fill"
              alt="Laptop with tokens"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
