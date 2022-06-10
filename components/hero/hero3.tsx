import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/Button";
import { useMediaQuery, useTyped } from "@/components/hooks";
import styles from "/styles/home.module.css";

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

  const isBreakpoint = useMediaQuery(768);
  return (
    <div className={styles.hero3}>
      <div className="grid gap-6 px-10 md:grid-cols-2 place-content-between md:pl-48 md:pr-10 py-36 md:pb-2">
        <div className="text-3xl font-light md:text-6xl title">
          <div className="pb-8">Start building</div>
          <p
            className="font-semibold inline underline underline-offset-[20px] decoration-mint"
            ref={wrapperElementRef}
          />
        </div>
        <div className="text-lg leading-8 content md:text-2xl md:max-w-sm">
          Building scalable web3 apps shouldn’t be hard.
          <p className="mt-3.5">So we make it easy. </p>
          <div className="text-center link pt-14 md:text-left">
            <a
              rel="noreferrer noopener"
              href="https://docs.koii.network/"
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
      <div className="flex place-content-around px-4 md:px-[28rem] mb-10 relative md:bottom-[-120px]">
        <IconButton name="twitter" fill="#8585BC" px="40" />
        <IconButton name="discord" fill="#8585BC" px="40" />
        <IconButton name="telegram" fill="#8585BC" px="40" />
        <IconButton name="github" fill="#8585BC" px="40" />
      </div>
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
