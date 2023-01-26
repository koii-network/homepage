import Image from "next/image";
import { Button } from "@/components/ui/Button";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const Hero = () => {
  return (
    <div className="bg-lightmint pt-40 relative flex justify-center">
      <div className="relative px-8 w-full flex flex-col justify-center items-center">
        <div className="relative pb-80 flex z-30 flex-col justify-center items-center">
          <div className="relative w-60 h-[269px] mt-[-22px]">
            <Image
              src={`/images/founders/desktop-node.svg`}
              alt="desktop-node"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <span className="pt-[30px] text-[32px] leading-10 text-white font-sans font-semibold">
            Reimagine the web: <br /> Bring your passion project to life.
          </span>
          <span className="pt-7 text-base leading-[22px] w-full text-white font-sans">
            Calling all founders with a revolutionary idea. <br />
            Koii’s tools and support program empower you to make it happen fast.
          </span>
          <a href="#founders-form">
            <Button
              label="Join the Next Cohort"
              className="text-koiipurple text-base tracking-wider px-6 py-3 bg-[#F5F5F5] mt-10 rounded-md font-sans"
            />
          </a>
          <div className="mt-16 h-80 w-full">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              playsinline
              controls
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="w-full h-full absolute">
          <div className="relative w-full h-full">
            <Image
              src={`/images/founders/hero-background.png`}
              alt="desktop-node"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
