import { useMediaQuery } from "@/components/hooks";
import Image from "next/image";

import { Bubble } from "./Bubble";

export const Bubbles = () => {
  const isBreakpoint = useMediaQuery(1024);
  return (
    <div className="flex flex-col items-center">
      <div className="relative bubbles h-[536px] w-[375px] lg:pt-10">
        <div className="absolute right-[180px] lg:top-[66px] lg:right-[80px] z-20 w-10 h-10 top-[200px]">
          <Image
            src="/images/bubble-small.svg"
            alt=""
            width={isBreakpoint ? 28 : 38}
            height={isBreakpoint ? 28 : 38}
          />
        </div>

        <div className="absolute lg:right-[246px] right-[10px] top-[320px] z-20 w-10 h-10 lg:top-[340px]">
          <Image
            src="/images/bubble-outlined.svg"
            alt=""
            width={30}
            height={30}
          />
        </div>

        <div className="absolute lg:hidden lg:right-[246px] right-[180px] top-[420px] z-20 w-10 h-10 lg:top-[340px]">
          <Image
            src="/images/bubble-outlined.svg"
            alt=""
            width={30}
            height={30}
          />
        </div>

        <div className="absolute right-[280px] z-20 w-10 h-10 top-[180px] lg:top-[320px] lg:right-[440px]">
          <Image
            src="/images/bubble-outlined.svg"
            alt=""
            width={19}
            height={19}
          />
        </div>

        <div className="absolute right-[-10px] z-20 w-10 h-10 top-[440px] lg:right-[460px]">
          <Image
            src="/images/bubble-outlined.svg"
            alt=""
            width={19}
            height={19}
          />
        </div>

        <div className="absolute right-[120px] lg:right-[160px] z-20 w-10 h-10 top-[480px]">
          <Image
            src="/images/bubble-outlined.svg"
            alt=""
            width={19}
            height={19}
          />
        </div>

        <div className="lg:hidden absolute right-[290px] z-20 w-10 h-10 top-[420px]">
          <Image
            src="/images/bubble-outlined.svg"
            alt=""
            width={19}
            height={19}
          />
        </div>

        <div>
          <div className="absolute top-[0px] right-[160px]  lg:top-[60px] lg:right-[240px]">
            <Bubble
              size={isBreakpoint ? 200 : 280}
              text={"Community Governed Social Media"}
            />
          </div>
          <div className="absolute top-[100px] right-[0px]  lg:top-[140px] lg:right-[0px]">
            <Bubble
              size={isBreakpoint ? 200 : 280}
              text={"Transparent Ad Networks"}
            />
          </div>

          <div className="absolute top-[200px] right-[168px] lg:top-[340px] lg:right-[240px]">
            <Bubble
              size={isBreakpoint ? 180 : 223}
              text={"Search Without Serfdom"}
            />
          </div>

          <div className="absolute top-[290px] right-[40px] lg:top-[450px] lg:right-[0px]">
            <Bubble size={isBreakpoint ? 135 : 175} text={"And more"} />
          </div>
        </div>
      </div>
    </div>
  );
};
