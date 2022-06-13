import { Button } from "@/components/ui/Button";
import { useMediaQuery, useTyped } from "@/components/hooks";
import styles from "/styles/home.module.css";
import { SocialIcons } from "./SocialIcons";

const Heroslide1 = ({
  onTypingComplete,
  activateTyping,
}: {
  activateTyping: boolean;
  onTypingComplete(): void;
}) => {
  const { wrapperElementRef } = useTyped(
    ["access.", "ownership.", "privacy.", "identity.", "freedom."],
    onTypingComplete,
    activateTyping
  );

  const isBreakpoint = useMediaQuery(768);

  return (
    <div className={styles.hero1}>
      <div className="container grid gap-6 px-10 mx-auto md:grid-cols-2 place-content-between md:pl-48 md:pr-10 py-36 md:pb-2">
        <div className="text-3xl font-light md:text-6xl title">
          <div className="pb-4 border-b-4 w-[363px] pl-4 border-mint">
            <div className="pb-8">Reclaim</div>
            <p className="inline font-semibold" ref={wrapperElementRef} />
          </div>
        </div>
        <div className="text-lg leading-8 content md:text-2xl md:max-w-sm">
          For the last 25 years, you’ve been exploited by Big Tech.
          <p className="mt-3.5">We empower you instead.</p>
          <div className="text-center link pt-14 md:text-left">
            <a href="#nightsky">
              <Button
                label="Oh, really... How?"
                className="place-content-center min-w-[200px] text-base font-semibold bg-mint border-mint border-solid border-2 px-7 py-5 rounded-full leading-3"
              />
            </a>
          </div>
        </div>
      </div>
      <SocialIcons />
      {isBreakpoint ? (
        <svg
          className="relative top-[1px]"
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
              <stop offset="0" stopColor="#24295D" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          className="relative top-[1px]"
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
              x1="1440.74"
              y1="1376.22"
              x2="1482.13"
              y2="593.473"
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
