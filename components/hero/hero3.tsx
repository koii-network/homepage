import { Button } from "@/components/ui/Button";
import { useMediaQuery, useTyped } from "@/components/hooks";
import styles from "/styles/home.module.css";
import { SocialIcons } from "./SocialIcons";

const Heroslide3 = ({
  onTypingComplete,
  activateTyping,
}: {
  activateTyping: boolean;
  onTypingComplete(): void;
}) => {
  const { wrapperElementRef } = useTyped(
    [
      "your community.",
      "epic NFTs.",
      "better apps.",
      "a universe.",
      "the future.",
    ],
    onTypingComplete,
    activateTyping
  );

  const isBreakpoint = useMediaQuery(728);
  return (
    <div className={`${styles.hero3}`}>
      <div className="container grid gap-6 px-10 mx-auto  md:grid-cols-2 place-content-between md:pl-[0.5rem] xl:pl-48 md:pr-[0.5rem] py-36 md:pb-2 h-[700px] md:h-[400px]">
        <div className="text-3xl font-light md:text-4xl xl:text-6xl title">
          <div className=" pb-2 border-b-4 w-[74%] md::w-[86%] xl:pl-4 border-mint">
            <div className="md:pb-2 xl:pb-8">Start building</div>
            <p className="inline font-semibold" ref={wrapperElementRef} />
          </div>
        </div>
        <div className="text-lg leading-8 content md:text-xl xl:text-2xl md:w-[340px] md:max-w-sm">
          Building scalable web3 apps shouldn’t be hard.
          <p className="mt-3.5">So we make it easy. </p>
          <div className="text-center link pt-14 md:text-left">
            <a
              rel="noreferrer noopener"
              href="https://docs.koii.network/build-dapps-with-koii/welcome-to-koii-x"
              target="_blank"
            >
              <Button
                label="Go to the Wiki"
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
            d="M0 114.517V81.4194C136.609 67.8179 263.579 39.6279 375 0V114.517H0Z"
            fill="url(#paint0_linear_2108_3388)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2108_3388"
              x1="0"
              y1="0"
              x2="0"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#171753" />
              <stop offset="100%" stopColor="#171753" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          className="relative top-[11px]"
          viewBox="0 0 1440 310"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1439.73 0.385986C1239.53 174.372 781.441 295.999 248.347 295.999C163.321 295.999 80.2025 292.905 -0.265625 286.998L-0.265623 309.125L1439.73 309.124V0.385986Z"
            fill="url(#paint0_linear_2118_3469)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2118_3469"
              x1="1440.74"
              y1="1076.22"
              x2="1082.13"
              y2="593.473"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9BE7C4" />
              <stop offset="0.6303376" stopColor="#BEF0ED" />
              <stop offset="0.07216" stopColor="#171753" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default Heroslide3;
