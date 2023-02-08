import { useMediaQuery } from "@/components/hooks";
import Image from "next/image";

import { Bubble } from "./Bubble";

export const Bubbles = () => {
  const isBreakpoint = useMediaQuery(1024);
  return (
    <div className="flex flex-col items-center">
      <div className="relative bubbles h-[536px] w-[375px] xl:pt-10">
        <div className="absolute right-[180px] xl:top-[66px] xl:right-[80px] z-20 w-10 h-10 top-[200px]">
          <Image
            src="/images/bubble-small.svg"
            alt=""
            width={isBreakpoint ? 28 : 38}
            height={isBreakpoint ? 28 : 38}
          />
        </div>

        <div className="absolute xl:right-[246px] right-[10px] top-[320px] z-20 w-10 h-10 xl:top-[340px]">
          <Image
            src="/images/bubble-outlined.svg"
            alt=""
            width={30}
            height={30}
          />
        </div>

        <div className="absolute xl:hidden xl:right-[246px] right-[180px] top-[420px] z-20 w-10 h-10 xl:top-[340px]">
          <Image
            src="/images/bubble-outlined.svg"
            alt=""
            width={30}
            height={30}
          />
        </div>

        <div className="absolute right-[280px] z-20 w-10 h-10 top-[180px] xl:top-[320px] xl:right-[440px]">
          <Image
            src="/images/bubble-outlined.svg"
            alt=""
            width={19}
            height={19}
          />
        </div>

        <div className="absolute right-[-10px] z-20 w-10 h-10 top-[440px] xl:right-[460px]">
          <Image
            src="/images/bubble-outlined.svg"
            alt=""
            width={19}
            height={19}
          />
        </div>

        <div className="absolute right-[120px] xl:right-[160px] z-20 w-10 h-10 top-[480px]">
          <Image
            src="/images/bubble-outlined.svg"
            alt=""
            width={19}
            height={19}
          />
        </div>

        <div className="xl:hidden absolute right-[290px] z-20 w-10 h-10 top-[420px]">
          <Image
            src="/images/bubble-outlined.svg"
            alt=""
            width={19}
            height={19}
          />
        </div>

        <div>
          <div className="absolute top-[0px] right-[160px]  xl:top-[60px] xl:right-[240px]">
            <Bubble
              size={isBreakpoint ? 200 : 280}
              text={"Community Governed Social Media"}
            />
          </div>
          <div className="absolute top-[100px] right-[0px]  xl:top-[140px] xl:right-[0px]">
            <Bubble
              size={isBreakpoint ? 200 : 280}
              text={"Transparent Ad Networks"}
            />
          </div>

          <div className="absolute top-[200px] right-[168px] xl:top-[340px] xl:right-[240px]">
            <Bubble
              size={isBreakpoint ? 180 : 223}
              text={"Search Without Serfdom"}
            />
          </div>

          <div className="absolute top-[290px] right-[40px] xl:top-[450px] xl:right-[0px]">
            <Bubble size={isBreakpoint ? 135 : 175} text={"And more"} />
          </div>
        </div>
      </div>
    </div>
  );
};
