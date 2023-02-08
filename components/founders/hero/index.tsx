import { Button } from "@/components/ui/Button";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const Hero = () => {
  return (
    <div className="relative flex justify-center bg-gradient-to-b from-faux-azure-mist via-lightmint to-mint pt-24 pb-165 lg:pb-115">
      <div className="container relative flex w-full max-w-[1024px] flex-col items-center justify-center px-8">
        <div className="relative z-30 flex w-full flex-col items-center justify-center pb-80 text-koiipurpledark  lg:flex-row lg:justify-between">
          <div className="flex w-full !max-w-[326px] flex-col items-center md:!max-w-[500px] lg:mb-auto lg:mt-16 lg:!max-w-none">
            <span className="mr-auto pt-[30px] font-sans text-[32px] font-semibold leading-10">
              Reimagine the web.
            </span>
            <span className="mr-auto font-sans text-2xl font-semibold leading-10">
              Bring your passion project to life.
            </span>
            <span className="mr-auto max-w-sm px-2 pt-7 font-sans text-base leading-[22px] md:max-w-lg">
              Koii’s tools and support program empower you to make it happen
              fast.
            </span>
            <a href="#founders-form" className="lg:mr-auto">
              <Button
                label="Join the Next Cohort"
                className="mt-10 rounded-md bg-koiipurple px-6 py-3 font-sans text-base tracking-wider text-[#FCFCFC]"
              />
            </a>
          </div>
          <div className="mt-16 !h-80 !w-80 rounded-md lg:!w-[27.7rem]">
            <ReactPlayer
              url="https://youtu.be/p4m4qThshfg"
              playsinline
              controls
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
