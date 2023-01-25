import Image from "next/image";
import { Button } from "@/components/ui/Button";
import ReactPlayer from "react-player";

export const Hero = () => {
  return (
    <div className="bg-mint pt-40 relative flex justify-center">
      <div className="relative px-8 w-full flex flex-col justify-center items-center">
        <div className="relative pb-80 flex z-30 flex-col justify-center items-center">
          <div className="relative w-[238px] h-[269px] mt-[-22px]">
            <Image
              src={`/images/founders/desktop-node.svg`}
              alt="desktop-node"
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
          <p className="pt-[30px] text-[32px] leading-10 text-white font-sans font-semibold">
            Reimagine the web: Bring your passion project to life.
          </p>
          <p className="pt-7 text-base leading-[22px] w-full text-white font-sans">
            Calling all founders with a revolutionary idea. <br />
            Koii’s tools and support program empower you to make it happen fast.
          </p>
          <Button
            label=" Join the Next Cohort"
            className="text-koiipurple text-base tracking-wider px-6 py-3 bg-[#F5F5F5] mt-10 rounded-md font-sans"
          />
          <div className="mt-16 h-80 w-full">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              playsinline
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
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
