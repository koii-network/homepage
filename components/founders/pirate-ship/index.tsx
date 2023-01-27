import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import pirateCode from "@/public/images/founders/pirate-code.svg";
import pirateShip from "@/public/images/founders/pirate-ship.svg";
import smallWaves from "@/public/images/founders/small-waves.svg";
import diver from "@/public/images/founders/diver.svg";
import oceanFloor from "@/public/images/founders/ocean-floor.svg";
import rocks from "@/public/images/founders/rocks.svg";
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
import { benefits } from "@/config/benefits-building-on-koii";
import { Benefit } from "./benefit";
import { Buoy } from "./buoy";

export const buoys = [
  {
    originalPosition: "top-[261px]",
    shiftedPosition: "top-[261px]",
  },
  {
    originalPosition: "top-[465px]",
    shiftedPosition: "top-[600px]",
  },
  {
    originalPosition: "top-[655px]",
    shiftedPosition: "top-[790px]",
  },
  {
    originalPosition: "top-[845px]",
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
    originalPosition: "top-[452px] left-60",
    shiftedPosition: "top-[452px] left-60",
  },
  {
    benefit: 2,
    image: fish3,
    originalPosition: "top-[660px] left-16",
    shiftedPosition: "top-[800px] left-16",
  },
  {
    benefit: 3,
    image: fish4,
    originalPosition: "top-[900px] -left-8",
    shiftedPosition: "top-[900px] -left-8",
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
    originalPosition: "top-[1390px] left-28",
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
    originalPosition: "top-[1390px] -left-2",
    shiftedPosition: "top-[1280px] -left-2",
  },
  {
    benefit: null,
    image: fish9,
    originalPosition: "top-[1644px] -left-12",
    shiftedPosition: "top-[1688px] -left-12",
  },
];

export type CurrentStep = 0 | 1 | 2 | 3 | 4 | 5;

export const PirateShip = () => {
  const [currentStep, setCurrentStep] = useState<CurrentStep>(0);

  const { ref: topRef } = useInView({
    threshold: 0,
    delay: 100,
    rootMargin: "-30% 0% -40% 0%",
    onChange: (inView) => {
      if (inView) {
        setCurrentStep(0);
      }
    },
  });

  const { ref: bottomRef } = useInView({
    threshold: 0,
    delay: 100,
    rootMargin: "-30% 0% -50% 0%",
    onChange: (inView) => {
      if (inView) {
        setCurrentStep(5);
      }
    },
  });

  const diverVerticalPosition = {
    0: "top-90",
    1: "top-134.5",
    2: "top-188",
    3: "top-238",
    4: "top-288",
    5: "top-367",
  }[currentStep];

  const ropeLength = currentStep === 0 || currentStep === 5 ? "h-328" : "h-368";
  const anchorVerticalPosition =
    currentStep === 0 || currentStep === 5 ? "top-396" : "top-428";
  const ropeClasses = `transition-all ease-in-out duration-500 absolute w-px bg-purple top-[282px] left-[14.5%] z-10 ${ropeLength}`;
  const anchorClasses = `transition-all ease-in-out duration-500 absolute ${anchorVerticalPosition} left-7 z-10`;
  const diverClasses = `transition-all ease-in-out duration-1000 absolute -left-4.4 z-20 ${diverVerticalPosition}`;

  return (
    <div className="flex flex-col items-center gap-9 relative -mt-48 bg-gradient-to-b from-lightmint to-midmint pt-32 rounded-t-full text-center font-medium">
      <h3 className="text-2xl px-2 text-darkpurple">
        Koii makes it easy to build decentralized apps that <br /> DON’T SUCK.
      </h3>
      <Image alt="Pirate source code" src={pirateCode} />
      <div className="relative bottom-20 left-4">
        <Image alt="Pirate ship" src={pirateShip} />
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
        <div className="relative right-27 top-2" ref={topRef}>
          <Image alt="Small waves" src={smallWaves} />
        </div>

        {fishes.map(
          ({ image, originalPosition, shiftedPosition, benefit }, index) => {
            const classes = `transition-all ease-in-out duration-700 absolute z-10 ${
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

      <div className="flex flex-col items-center pl-20 w-3/4">
        {benefits.map(({ label, color, text, image }, index) => (
          <Benefit
            key={label}
            label={label}
            color={color}
            text={text}
            image={image}
            onSelect={() => setCurrentStep((index + 1) as CurrentStep)}
          />
        ))}
      </div>

      <div className="mt-40 -mb-10 w-[130%]" ref={bottomRef}>
        <Image alt="Ocean floor" src={oceanFloor} />
      </div>
      <div className="relative -top-52 left-16">
        <Image alt="Small rocks" src={rocks} />
      </div>

      <div className="bg-gradient-to-b from-transparent via-darkpurple to-darkpurple h-100 -mt-80 w-full"></div>
    </div>
  );
};
