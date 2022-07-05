import { useMediaQuery } from "@/components/hooks";
import { IconButton } from "@/components/ui/Button";

export const Abouthero = () => {
  const isBreakpoint = useMediaQuery(728);
  return (
    <div className={` heroabout lg:h-[740px] pt-[4rem] lg:pt-[120px]`}>
      <div
        className="h-[738px] lg:h-[925px] relative z-20"
        style={{
          background: isBreakpoint
            ? `url("/images/about/hero_curve_mobile.svg") no-repeat center / cover`
            : `url("/images/about/hero_curve.svg") no-repeat center / cover`,
        }}
      >
        <div className="container">
          <div className="flex flex-end text-[32px] lg:text-[45px] justify-end pr-[2rem] pt-[4rem] lg:pt-0 lg:pr-[5rem]">
            <span className="text-right w-[220px] lg:w-[450px]">
              Attention is our most valuable asset
            </span>
          </div>
          <div className="flex z-20 flex-col relative lg:pt-[10rem] pl-[1rem] lg:pl-[4rem]">
            <div className="title text-lightmint text-[18px] lg:text-[40px] max-w-[125px] lg:max-w-[460px]">
              Koii is the web of public knowledge.
            </div>
            <div className="sub-title text-white text-[14px] font-normal leading-[24px] pt-[20px] pr-[30px] lg:pt-[30px] lg:text-[18px] lg:max-w-[1060px]">
              Democratize the internet. Help us by recording attention on your
              content to add it to our knowledge archive.
              <br />
              Attention records are open, public, and transparent, creating a
              shared history of what matters most.
            </div>
            {isBreakpoint ? (
              <div className="flex justify-center gap-[4rem] place-content-around pt-[5rem] relative">
                <IconButton name="twitter" fill="#171753" px="30" />
                <IconButton
                  className="pt-[1rem]"
                  name="discord"
                  fill="#171753"
                  px="30"
                />
                <IconButton
                  className="pt-[3rem]"
                  name="telegram"
                  fill="#171753"
                  px="30"
                />
                <IconButton
                  className="pt-[6rem]"
                  name="github"
                  fill="#171753"
                  px="30"
                />
              </div>
            ) : (
              <div className="flex gap-[47px] lg:pt-[40px] relative">
                <IconButton name="twitter" fill="#FFFFFF" px="30" />
                <IconButton name="discord" fill="#FFFFFF" px="30" />
                <IconButton name="telegram" fill="#FFFFFF" px="30" />
                <IconButton name="github" fill="#FFFFFF" px="30" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
