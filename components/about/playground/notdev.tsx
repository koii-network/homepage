import { useMediaQuery } from "@/components/hooks";

export const Notdev = () => {
  const isBreakpoint = useMediaQuery(728);
  return (
    <div className={` heroabout xl:h-[740px]`}>
      <div
        className="h-[738px] xl:h-[925px] relative z-[2]"
        style={{
          background: isBreakpoint
            ? `url("/images/about/nondev_curve_mobile.svg") no-repeat center / cover`
            : `url("/images/about/nondev_curve.svg") no-repeat center / cover`,
        }}
      >
        <div className="container">
          <div className="flex z-20 flex-col relative pt-[13rem] md:pt-[18rem] xl:pt-[23rem] text-center items-center">
            <div className="title text-lightmint font-semibold text-[35px] md:text-[45px] max-w-[252px] md:max-w-[460px]">
              Not a developer?
            </div>
            <div className="sub-title text-white text-[14px] font-normal leading-[24px] pt-[20px] pr-[30px] xl:pt-[30px] xl:text-[16px] xl:max-w-[620px]">
              <p>
                Koii nodes are part of a constellation of decentralized systems.
                {isBreakpoint ? "" : <br />}
                <span className="font-semibold">
                  {" "}
                  There are useful tools for everyone. See what looks right for
                  you below.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
