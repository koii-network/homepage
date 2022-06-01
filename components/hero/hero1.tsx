import { Button } from "../ui/Button";
import { IconButton } from "@/components/ui/Button";
import styles from "../../styles/home.module.css";
import Typed from "typed.js";
import React, { useEffect } from "react";

const Hero1 = () => {
  useEffect(() => {
    const options = {
      strings: ["access.", "ownership.", "privacy.", "identity.", "freedom."],
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: true,
      loop: true,
    };
    new Typed(".element1", options);
  });
  return (
    <div className={styles.hero1}>
      <div className="grid md:grid-cols-2 gap-6 place-content-between px-10 md:px-64 py-36">
        <div className="title text-4xl md:text-6xl font-light">
          <div className="pb-8">Reclaim</div>
          <p className="font-semibold element1 inline underline underline-offset-[20px] decoration-mint" />
        </div>
        <div className="content text-lg md:text-2xl leading-8">
          For the last 25 years, you’ve been exploited by Big Tech.
          <p className="mt-3.5">We empower you instead.</p>
          <div className="link pt-14">
            <Button
              label="Oh, really... How?"
              className="place-content-center w-auto text-base font-semibold bg-mint border-mint border-solid border-2 px-7 py-5 rounded-3xl leading-3"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 justify-items-center px-4 md:px-[28rem] my-10">
        <IconButton as="twitter" fill="#8585BC" px="40" />
        <IconButton as="discord" fill="#8585BC" px="40" />
        <IconButton as="telegram" fill="#8585BC" px="40" />
        <IconButton as="github" fill="#8585BC" px="40" />
      </div>

      <svg viewBox="0 0 1441 94" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.488281 0.571289V94H1440.49V0.571289C1234.41 52.6445 986.809 82.9995 720.488 82.9995C454.169 82.9995 206.568 52.6445 0.488281 0.571289Z"
          fill="url(#paint0_linear_1510_2500)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1510_2500"
            x1="1015.5"
            y1="94"
            x2="1111"
            y2="-37"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#171751" />
            <stop offset="1" stopColor="#24295D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
export default Hero1;
