import Image from "next/image";
import { programBenefits } from "@/config/program-benefits";
import { Benefit } from "./benefit";

export const ProgramBenefits = () => {
  return (
    <div className="bg-sky w-full">
      <div className="flex flex-col relative justify-center w-full lg:bg-faux-azure-mist bg-benefits-background lg:bg-benefits-background-xl bg-no-repeat bg-[length:100%_100%] bg-center">
        <div
          className={`!px-8 w-full flex-col pb-16 lg:pb-36 flex justify-center align-center z-40`}
        >
          <div className="flex w-full flex-col items-center justify-center lg:flex-row">
            <div className="flex justify-center align-center -mt-44">
              <div className="relative h-64 lg:h-[410px] w-[278px] lg:w-[485px]">
                <Image
                  src="/images/founders/benefits-building.svg"
                  alt="benefits building"
                  layout="fill"
                  className="z-40 h-full"
                />
              </div>
            </div>
            <div className="mt-5 lg:mt-20">
              <p className="font-sans text-2xl font-semibold text-white text-center mx-auto tracking-tight max-w-xs lg:max-w-lg align-middle lg:text-5xl lg:leading-[60px]">
                Join the Founder Support Program
              </p>
              <p className="mt-2 font-sans text-white lg:mt-5 font-semibold text-base leading-[22px] mb-11 text-center">
                Turn your passion project into reality. Our mentor network is
                here to help.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col grid-flow-row gap-4 justify-center items-center lg:grid lg:grid-cols-3 lg:pt-24 lg:gap-x-9 lg:gap-y-24 lg:max-w-7xl lg:mx-auto">
            {programBenefits.map(({ image, text }, index) => {
              return (
                <Benefit
                  key={text}
                  image={image}
                  text={text}
                  side={index % 2 ? "right" : "left"}
                  lastIndex={index >= programBenefits.length - 2}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
