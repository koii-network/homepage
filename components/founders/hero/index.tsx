import Image from "next/image";
import { Button } from "@/components/ui/Button";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const Hero = () => {
  return (
    <div className="relative flex justify-center bg-lightmint pt-40">
      <div className="relative flex w-full flex-col items-center justify-center px-8">
        <div className="relative z-30 flex flex-col items-center justify-center pb-80">
          <div className="relative mt-[-22px] h-[269px] w-60">
            <Image
              src={`/images/founders/desktop-node.svg`}
              alt="desktop-node"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <span className="pt-[30px] font-sans text-[32px] font-semibold leading-10 text-white">
            Reimagine the web: <br /> Bring your passion project to life.
          </span>
          <span className="w-full pt-7 font-sans text-base leading-[22px] text-white">
            Calling all founders with a revolutionary idea. <br />
            Koii’s tools and support program empower you to make it happen fast.
          </span>
          <a href="#founders-form">
            <Button
              label="Join the Next Cohort"
              className="mt-10 rounded-md bg-[#F5F5F5] px-6 py-3 font-sans text-base tracking-wider text-koiipurple"
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
        <div className="absolute h-full w-full">
          <div className="relative h-full w-full">
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
