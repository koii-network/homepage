import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/Button";
import { useMediaQuery } from "@/components/hooks";
import styles from "/styles/home.module.css";
import Typed from "typed.js";
import React, { useEffect } from "react";

const Heroslide1 = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  useEffect(() => {
    const options = {
      strings: ["access.", "ownership.", "privacy.", "identity.", "freedom."],
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: true,
      loop: true,
    };
    if (el.current != null) {
      typed.current = new Typed(el.current, options) as any;
      return () => {
        if (typed && typed.current) {
          (typed.current as any).destroy();
        }
      };
    }
  }, []);

  const isBreakpoint = useMediaQuery(768);

  return (
    <div className={styles.hero1}>
      <div className="grid md:grid-cols-2 gap-6 place-content-between px-10 md:pl-48 md:pr-10 py-36 md:pb-2">
        <div className="title text-3xl md:text-6xl font-light">
          <div className="pb-8">Reclaim</div>
          <p
            className="font-semibold inline underline underline-offset-[20px] decoration-mint"
            ref={el}
          />
        </div>
        <div className="content text-lg md:text-2xl leading-8 md:max-w-sm">
          For the last 25 years, you’ve been exploited by Big Tech.
          <p className="mt-3.5">We empower you instead.</p>
          <div className="link pt-14 text-center md:text-left">
            <Button
              label="Oh, really... How?"
              className="place-content-center min-w-[200px] text-base font-semibold bg-mint border-mint border-solid border-2 px-7 py-5 rounded-3xl leading-3"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 justify-items-center px-4 md:px-[28rem] mb-10 relative md:bottom-[-120px] ">
        <IconButton as="twitter" fill="#8585BC" px="40" />
        <IconButton as="discord" fill="#8585BC" px="40" />
        <IconButton as="telegram" fill="#8585BC" px="40" />
        <IconButton as="github" fill="#8585BC" px="40" />
      </div>

      {isBreakpoint ? (
        <svg
          viewBox="0 0 375 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V114.517H375V81.4194C238.391 67.8179 111.421 39.6279 0 0Z"
            fill="url(#paint0_linear_2108_3379)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2108_3379"
              x1="792.978"
              y1="114.517"
              x2="904.253"
              y2="7.08442"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#171751" />
              <stop offset="1" stopColor="#24295D" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          viewBox="0 0 1440 310"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0L2.70373e-05 309.271L1440 309.271V287.19C1359.72 293.068 1276.81 296.146 1192 296.146C658.361 296.146 199.878 174.27 0 0Z"
            fill="url(#paint0_linear_2112_3518)"
          />

          <defs>
            <linearGradient
              id="paint0_linear_2112_3518"
              x1="1440"
              y1="-366.827"
              x2="1398.6"
              y2="415.923"
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
export default Heroslide1;
