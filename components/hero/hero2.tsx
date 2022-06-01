import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/Button";
import { useMediaQuery } from "@/components/hooks";
import Typed from "typed.js";
import React, { useEffect } from "react";

const Hero2 = () => {
  useEffect(() => {
    const options = {
      strings: ["view.", "user.", "follow.", "critique.", "like."],
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: true,
      loop: true,
    };
    new Typed(".element2", options);
  });
  const isBreakpoint = useMediaQuery(768);
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 place-content-between px-10 md:px-64 py-36 md:pt-36">
        <div className="title text-3xl md:text-6xl font-light">
          <div className="pb-8">Earn for every</div>
          <p className="font-semibold element2 inline underline underline-offset-[20px] decoration-mint" />
        </div>
        <div className="content text-lg md:text-2xl leading-8">
          You put talent and hard work into what you create online.
          <p className="mt-3.5">It’s time you got paid for it.</p>
          <div className="link pt-14 text-center">
            <Button
              label="Prove it."
              className="place-content-center min-w-[200px] text-base font-semibold bg-mint border-mint border-solid border-2 px-7 py-5 rounded-3xl leading-3"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 justify-items-center px-4 md:px-[28rem] mb-10 relative md:bottom-[-120px]">
        <IconButton as="twitter" fill="#8585BC" px="40" />
        <IconButton as="discord" fill="#8585BC" px="40" />
        <IconButton as="telegram" fill="#8585BC" px="40" />
        <IconButton as="github" fill="#8585BC" px="40" />
      </div>
      {isBreakpoint ? (
        <svg
          viewBox="0 0 375 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 33.5166V0.419434C60.7664 6.46973 123.44 9.6333 187.5 9.6333C251.56 9.6333 314.234 6.46973 375 0.419434V33.5166H0Z"
            fill="url(#paint0_linear_2108_3386)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2108_3386"
              x1="417.978"
              y1="33.5166"
              x2="529.253"
              y2="-73.9156"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#171751" />
              <stop offset="1" stopColor="#24295D" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0.571289L8.35353e-06 96.1246L1440 96.1245V0.571289C1233.92 52.6446 986.319 82.9995 720 82.9995C453.681 82.9995 206.08 52.6446 0 0.571289Z"
            fill="url(#paint0_linear_2115_3647)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2115_3647"
              x1="1440"
              y1="-579.974"
              x2="1398.6"
              y2="202.776"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9BE7C4" />
              <stop offset="0.0203376" stopColor="#BEF0ED" />
              <stop offset="0.907216" stopColor="#171753" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default Hero2;
