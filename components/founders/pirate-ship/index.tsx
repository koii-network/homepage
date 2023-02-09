import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import pirateCode from "@/public/images/founders/pirate-code.svg";
import pirateShip from "@/public/images/founders/pirate-ship.svg";
import smallWaves from "@/public/images/founders/small-waves.svg";
import diver from "@/public/images/founders/diver.svg";
import oceanFloor from "@/public/images/founders/ocean-floor.svg";
import oceanFloorLg from "@/public/images/founders/ocean-floor-lg.svg";
import rocks from "@/public/images/founders/rocks.svg";
import treasure from "@/public/images/founders/treasure.svg";
import anchor from "@/public/images/founders/anchor.svg";
import fish1 from "@/public/images/founders/fish-1.svg";
import fish2 from "@/public/images/founders/fish-2.svg";
import fish3 from "@/public/images/founders/fish-3.svg";
import fish4 from "@/public/images/founders/fish-4.svg";
import fish5 from "@/public/images/founders/fish-5.svg";
import fish6 from "@/public/images/founders/fish-6.svg";
import fish7 from "@/public/images/founders/fish-7.svg";
import fish8 from "@/public/images/founders/fish-8.svg";
import fish9 from "@/public/images/founders/fish-9.svg";
import clouds from "@/public/images/founders/clouds.svg";
import cloudsXL from "@/public/images/founders/clouds-lg.svg";
import { benefits } from "@/config/benefits-building-on-koii";
import { Benefit } from "./benefit";
import { Buoy } from "./buoy";
import { useMediaQuery } from "@/components/hooks";

export type CurrentStep = 0 | 1 | 2 | 3 | 4 | 5;

export const PirateShip = () => {
  const [currentStep, setCurrentStep] = useState<CurrentStep>(0);

  const getIntersectionObserverOptions = (step: CurrentStep) => ({
    threshold: 0,
    rootMargin: "-50% 0% -50% 0%",
    onChange: (inView: boolean) => {
      if (inView) {
        setCurrentStep(step);
      }
    },
  });

  const { ref: topRef } = useInView(getIntersectionObserverOptions(0));

  const { ref: bottomRef } = useInView(getIntersectionObserverOptions(5));

  const isMobileScreen = useMediaQuery(1023);
  const shouldUseSmallOceanFloor = useMediaQuery(580);

  const diverVerticalPosition = {
    0: "top-90",
    1: "top-134.5",
    2: "top-188",
    3: "top-238",
    4: "top-288",
    5: "top-367",
  }[currentStep];

  const cloudsImage = isMobileScreen ? clouds : cloudsXL;
  const cloudsClasses =
    "lg:absolute lg:-top-80 xl:-top-90 lg:px-16 xl:px-40 lg:scale-90";
  const ropeLength = currentStep === 0 || currentStep === 5 ? "h-328" : "h-368";
  const anchorVerticalPosition =
    currentStep === 0 || currentStep === 5 ? "top-396 lg:top-392" : "top-428";
  const ropeClasses = `transition-all ease-in-out duration-500 absolute w-0.5 bg-koiipurpledark top-[282px] left-[14.5%] lg:top-66 lg:left-[7%] z-10 ${ropeLength}`;
  const anchorClasses = `transition-all ease-in-out duration-500 absolute ${anchorVerticalPosition} left-4 z-10 lg:-left-1.5`;
  const diverClasses = `transition-all ease-in-out duration-1000 absolute -left-4.4 lg:-left-10 z-20 ${diverVerticalPosition}`;
  const oceanFloorImage = shouldUseSmallOceanFloor ? oceanFloor : oceanFloorLg;

  return (
    <div className="relative -mt-250 flex flex-col items-center gap-9 bg-sea bg-cover bg-[center_top_36rem] bg-no-repeat pt-32 text-center font-medium lg:-mt-105 lg:bg-sea-lg lg:bg-[center_top_8rem]">
      <div className={cloudsClasses}>
        <Image
          alt="Clouds"
          src={cloudsImage}
          className="w-full lg:max-w-[1300px] xl:max-w-[1121px]"
        />
      </div>

      <div className="relative lg:-top-[220px] xl:-top-48 lg:right-48 xl:right-72">
        <h3 className="px-2 lg:ml-8 xl:ml-0 text-2xl mt-2 text-darkpurple lg:w-[790px] lg:pl-24 lg:text-left lg:text-[32px]">
          Koii makes it easy to build decentralized apps that don’t suck.
        </h3>
        <div className="relative mt-10 lg:-left-20 lg:ml-8 xl:ml-0 lg:mt-16 lg:scale-125">
          <Image alt="Pirate source code" src={pirateCode} />
        </div>
      </div>
      <div className="relative bottom-16 left-4 lg:left-52 lg:-top-64">
        <div className="clip-light-triangle absolute top-56 -left-166 h-350 w-350 lg:-left-[710px] lg:rotate-[2.5deg]" />
        <div ref={topRef} className="z-20 lg:relative lg:right-4">
          <Image alt="Pirate ship" src={pirateShip} />
        </div>

        <div className={ropeClasses}>
          {buoys.map(({ originalPosition, shiftedPosition }, index) => (
            <Buoy
              key={index}
              index={index}
              currentStep={currentStep}
              originalPosition={originalPosition}
              shiftedPosition={shiftedPosition}
            />
          ))}
        </div>
        <div className={diverClasses}>
          <Image alt="Scuba diver" src={diver} />
        </div>
        <div className={anchorClasses}>
          <Image alt="Anchor" src={anchor} />
        </div>
        <div className="relative right-26.2 top-2 z-10 lg:right-31.8">
          <Image alt="Small waves" src={smallWaves} />
        </div>

        {fishes.map(
          ({ image, originalPosition, shiftedPosition, benefit }, index) => {
            const classes = `transition-all ease-in-out duration-500 absolute z-10 ${
              (currentStep >= 1 && currentStep < Number(benefit)) ||
              currentStep === 5
                ? shiftedPosition
                : originalPosition
            }`;

            return (
              <div key={index} className={classes}>
                <Image alt="Fish" src={image} />
              </div>
            );
          }
        )}
      </div>

      <div className="flex w-3/4 flex-col items-center pl-20 lg:-mt-48">
        {benefits.map(({ label, text, images }, index) => (
          <Benefit
            key={label}
            label={label}
            text={text}
            images={images}
            onSelect={() => setCurrentStep((index + 1) as CurrentStep)}
          />
        ))}
      </div>
      <div className="mt-40 -mb-32 w-[130%] lg:mt-32 lg:mb-0" ref={bottomRef}>
        <Image alt="Ocean floor" src={oceanFloorImage} />
        <div className="relative -top-36 left-16 lg:-top-96 lg:-left-80">
          <Image alt="Small rocks" src={rocks} />
        </div>
        <div className="relative -top-85 left-4 md:-top-112.5 lg:left-48">
          <Image alt="Treasure" src={treasure} />
        </div>
      </div>
    </div>
  );
};

export const buoys = [
  {
    originalPosition: "top-[261px] lg:top-[279px]",
    shiftedPosition: "top-[261px]",
  },
  {
    originalPosition: "top-[465px] lg:top-[483px]",
    shiftedPosition: "top-[600px]",
  },
  {
    originalPosition: "top-[655px] lg:top-[673px]",
    shiftedPosition: "top-[790px]",
  },
  {
    originalPosition: "top-[845px] lg:top-[863px]",
    shiftedPosition: "top-[990px]",
  },
];

export const fishes = [
  {
    benefit: null,
    image: fish1,
    originalPosition: "top-[460px] left-16",
    shiftedPosition: "top-[460px] left-16",
  },
  {
    benefit: null,
    image: fish2,
    originalPosition: "top-[452px] left-60 lg:-left-16",
    shiftedPosition: "top-[452px] left-60 lg:-left-16",
  },
  {
    benefit: 2,
    image: fish3,
    originalPosition: "top-[660px] left-16",
    shiftedPosition: "top-[800px] left-16 lg:top-[660px]",
  },
  {
    benefit: 3,
    image: fish4,
    originalPosition: "top-[900px] -left-8 lg:top-[700px]",
    shiftedPosition: "top-[900px] -left-8 lg:top-[700px] lg:-left-24",
  },
  {
    benefit: 4,
    image: fish5,
    originalPosition: "top-[1090px] left-14",
    shiftedPosition: "top-[1190px] left-14",
  },
  {
    benefit: 4,
    image: fish6,
    originalPosition: "top-[1390px] left-28 lg:top-[1300px]",
    shiftedPosition: "top-[1300px] left-28",
  },
  {
    benefit: null,
    image: fish7,
    originalPosition: "top-[1420px] left-20",
    shiftedPosition: "top-[1380px] left-20",
  },
  {
    benefit: null,
    image: fish8,
    originalPosition: "top-[1390px] -left-2 lg:-left-24",
    shiftedPosition: "top-[1280px] -left-2 lg:-left-24",
  },
  {
    benefit: null,
    image: fish9,
    originalPosition: "top-[1644px] -left-12 lg:top-[960px] lg:-left-24",
    shiftedPosition: "top-[1688px] -left-12 lg:top-[960px] lg:-left-24",
  },
];
