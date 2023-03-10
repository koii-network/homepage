import { Button } from "@/components/ui/Button";
import { useMediaQuery, useTyped } from "@/components/hooks";
import { SocialIcons } from "./SocialIcons";

const Heroslide2 = ({
  onTypingComplete,
  activateTyping,
}: {
  activateTyping: boolean;
  onTypingComplete(): void;
}) => {
  const { wrapperElementRef } = useTyped(
    ["view.", "user.", "follow.", "critique.", "like."],
    onTypingComplete,
    activateTyping
  );

  const isBreakpoint = useMediaQuery(728);

  return (
    <div className="text-koiiblue">
      <div className="container grid gap-6 px-10 mx-auto md:grid-cols-2 place-content-between md:pl-[0.5rem] xl:pl-48 md:pr-[0.5rem] py-36 md:pb-2 h-[700px] md:h-[400px]">
        <div className="text-3xl font-light md:text-4xl xl:text-6xl title">
          <div className="pb-2 border-b-4 w-[74%] md:w-[290px] xl:w-[460px] xl:pl-4 border-mint">
            <div className="md:pb-2 xl:pb-8">Earn for every</div>
            <p className="inline font-semibold" ref={wrapperElementRef} />
          </div>
        </div>
        <div className="text-lg leading-8 content md:text-xl xl:text-2xl md:w-[340px] md:max-w-sm pt-[5.2rem] md:pt-0">
          You put talent and hard work into what you create online.
          <p className="mt-3.5">It’s time you got paid for it.</p>
          <div className="text-center link pt-14 md:text-left">
            <a href="#ways-to-earn">
              <Button
                label="Prove it."
                className="place-content-center min-w-[200px] text-base font-semibold bg-mint border-mint border-solid border-2 px-7 py-5 rounded-full leading-3"
              />
            </a>
          </div>
        </div>
      </div>
      <SocialIcons />
      {isBreakpoint ? (
        <svg
          viewBox="0 0 375 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-[-1px]"
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
          className="absolute bottom-[-1px]"
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

export default Heroslide2;
