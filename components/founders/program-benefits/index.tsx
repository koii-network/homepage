import Image from "next/image";
import { programBenefits } from "@/config/program-benefits";
import { Benefit } from "./benefit";

export const ProgramBenefits = () => {
  return (
    <div className="flex flex-col relative justify-center w-full">
      <div className="px-8 w-full flex-col pb-16 flex justify-center align-center z-[40]">
        <div className="flex justify-center align-center -mt-44">
          <div className="relative h-64 w-[278px]">
            <Image
              src="/images/founders/benefits-building.svg"
              alt="benefits building"
              layout="fill"
              className="z-[40]"
            />
          </div>
        </div>
        <p className="font-sans text-2xl font-semibold text-white text-center mx-auto tracking-tight max-w-xs align-middle">
          Join the Founder Support Program
        </p>
        <p className="mt-2 text-white font-semibold text-base leading-[22px] mb-11 text-center">
          Turn your passion project into reality, our mentor network is here to
          help
        </p>
        <div>
          {programBenefits.map(({ image, text }, index) => {
            return (
              <Benefit
                key={text}
                image={image}
                text={text}
                side={index % 2 ? "right" : "left"}
              />
            );
          })}
        </div>
      </div>
      <div className="absolute w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="/images/founders/benefits-background.png"
            alt="benefits building"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};
