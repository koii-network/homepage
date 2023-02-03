import { Button } from "@/components/ui/Button";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const Hero = () => {
  return (
    <div className="relative flex justify-center bg-gradient-to-b from-faux-azure-mist via-lightmint to-mint pt-24 pb-165 lg:pb-115">
      <div className="relative flex w-full max-w-[1220px] flex-col items-center justify-center px-8">
        <div className="relative z-30 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between  pb-80 text-koiipurpledark">
          <div className="flex flex-col items-center lg:mb-auto lg:mt-16 w-full">
            <span className="pt-[30px] font-sans text-[32px] font-semibold leading-10 mr-auto">
              Reimagine the web.
            </span>
            <span className="font-sans text-2xl font-semibold leading-10 mr-auto">
              Bring your passion project to life.
            </span>
            <span className="pt-7 font-sans text-base leading-[22px] mr-auto max-w-sm px-2">
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
          <div className="mt-16 h-80 lg:w-1/2">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
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
