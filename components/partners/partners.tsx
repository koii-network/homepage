import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { Title } from "./components/title";
import { PartnersList } from "./components/partners-list";
import { MorePartners } from "./components/more-partners";
import { useMediaQuery } from "@/components/hooks";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

// const morePartnersVariant = {
//   visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
//   hidden: { opacity: 0, scale: 0 },
// };

export const Partners = () => {
  const control = useAnimation();
  const [, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  const isBreakpoint = useMediaQuery(640);

  const lillyHeight = isBreakpoint ? 128 : 320;
  const lillyWidth = isBreakpoint ? 128 : 320;
  const boatHeight = isBreakpoint ? 128 : 400;
  const boatWidth = isBreakpoint ? 128 : 400;

  return (
    <div
      className="md:h-[1096px]"
      style={{
        background: isBreakpoint
          ? `url("/images/backgrounds/partners_mobile.svg") no-repeat 50% 100px / cover`
          : `url("/images/backgrounds/partners_desktop.svg") no-repeat center`,
      }}
    >
      <div className="container flex flex-col items-center justify-center mx-auto item-center">
        <div className="mb-[140px] sm:mb-[340px]">
          <Title />
        </div>
        <div className="relative flex justify-center">
          <PartnersList />

          <div
            className={
              isBreakpoint
                ? `absolute left-[-60px] top-[-10px]`
                : `absolute left-[-420px] top-[0px]`
            }
          >
            <Image
              src="/images/lilly.svg"
              width={lillyWidth}
              height={lillyHeight}
              alt={"lilly"}
            />
          </div>

          <div
            className={
              isBreakpoint
                ? `absolute right-[-16px] top-[-90px]`
                : `absolute right-[-290px] top-[-240px]`
            }
          >
            <Image
              src="/images/boat.svg"
              width={boatWidth}
              height={boatHeight}
              alt={"lilly"}
            />
          </div>
        </div>
        <MorePartners />
      </div>
    </div>
  );
};
