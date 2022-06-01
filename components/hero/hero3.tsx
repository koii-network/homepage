import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/Button";
import styles from "/styles/home.module.css";
import Typed from "typed.js";
import React, { useEffect } from "react";

const Hero3 = () => {
  useEffect(() => {
    const options = {
      strings: [
        "your community.",
        "epic NFTs.",
        "better apps.",
        "a universe.",
        "the future.",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: true,
      loop: true,
    };
    new Typed(".element3", options);
  });
  return (
    <div className={styles.hero3}>
      <div className="grid md:grid-cols-2 gap-6 place-content-between px-10 md:px-64 py-36">
        <div className="title text-3xl md:text-6xl font-light">
          <div className="pb-8">Start building</div>
          <p className="font-semibold element3 inline underline underline-offset-[20px] decoration-mint" />
        </div>
        <div className="content text-lg md:text-2xl leading-8">
          Building scalable web3 apps shouldn’t be hard.
          <p className="mt-3.5">So we make it easy. </p>
          <div className="link pt-14 text-center">
            <a
              rel="noreferrer noopener"
              href="https://docs.koii.network/"
              target="_blank"
            >
              <Button
                label="Go to the Wiki"
                className="place-content-center min-w-[200px] text-base font-semibold bg-mint border-mint border-solid border-2 px-7 py-5 rounded-3xl leading-3"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 justify-items-center px-4 md:px-[28rem] my-10">
        <IconButton as="twitter" fill="#8585BC" px="40" />
        <IconButton as="discord" fill="#8585BC" px="40" />
        <IconButton as="telegram" fill="#8585BC" px="40" />
        <IconButton as="github" fill="#8585BC" px="40" />
      </div>

      <svg viewBox="0 0 375 115" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 114.517V81.4194C136.609 67.8179 263.579 39.6279 375 0V114.517H0Z"
          fill="url(#paint0_linear_2108_3388)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2108_3388"
            x1="42.9779"
            y1="114.517"
            x2="154.253"
            y2="7.0844"
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

export default Hero3;
