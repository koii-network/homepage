import { FeatureCard } from "./components/card";
import { useMediaQuery } from "@/components/hooks/mediaQuery";

export const Feature = () => {
  const isBreakpoint = useMediaQuery(1439);
  return (
    <div
      className={`herotech container lg:h-[520px] pt-[150px] lg:pt-[30px] relative z-10`}
    >
      <div className="flex flex-col px-[40px] lg:px-[120px]">
        {isBreakpoint ? (
          <div className="FeatureCard grid grid-cols-1 lg:grid-cols-2 gap-4 items-center lg:flex-row lg:items-baseline mx-[-3.5rem]">
            <FeatureCard
              imgSrc="/images/metaverse/dynamic-nft.svg"
              width="w-[172.5px]"
              height="h-[172.5px]"
              title="Easy Dynamic NFTs"
              description="Fully on-chain & autonomous NFTs make for an immersive gaming experience."
              alt="Dynamic NFT"
              className="pl-[4rem] lg:pl-0"
              textclassName="text-left"
            />

            <FeatureCard
              imgSrc="/images/metaverse/dev-laptop.svg"
              width="w-[172.5px]"
              height="h-[172.5px]"
              title="Build 100% in JavaScript"
              description="Create entirely in JavaScript. No additional languages required!"
              alt="dev-laptop"
              className="items-end md:ml-[10rem] pr-[4rem] lg:pr-0"
              textclassName="text-right md:text-left items-end lg:items-start"
            />
            <FeatureCard
              imgSrc="/images/metaverse/Koii-token.svg"
              width="w-[172.5px]"
              height="h-[172.5px]"
              title="Mine KOII for every view"
              description="Earn tokens whenever someone looks at an NFT or app that you own."
              alt="Koii-X"
              className="pl-[4rem] lg:pl-0"
              textclassName="text-left"
            />
            <FeatureCard
              imgSrc="/images/metaverse/dstorage.svg"
              width="w-[172.5px]"
              height="h-[172.5px]"
              title="Decentralized Storage"
              description="Keep your media files safe and skip the centralized databases."
              alt="destorage"
              className="items-end md:ml-[10rem] pr-[4rem] lg:pr-0"
              textclassName="text-right md:text-left "
            />
          </div>
        ) : (
          <div className="FeatureCard grid grid-cols-1 lg:grid-cols-2 gap-4 items-center lg:flex-row lg:items-baseline mx-[-3.5rem]">
            <FeatureCard
              imgSrc="/images/metaverse/dynamic-nft.svg"
              width="w-[172.5px]"
              height="h-[172.5px]"
              title="Easy Dynamic NFTs"
              description="Fully on-chain & autonomous NFTs make for an immersive gaming experience."
              alt="dynamic nft"
              className="pl-[4rem] lg:pl-0"
              textclassName="text-left"
            />
            <FeatureCard
              imgSrc="/images/metaverse/Koii-token.svg"
              width="w-[172.5px]"
              height="h-[172.5px]"
              title="Mine KOII for every view"
              description="Earn tokens whenever someone looks at an NFT or app that you own."
              alt="Koii token"
              className="pl-[4rem] lg:pl-0"
              textclassName="text-left"
            />
            <FeatureCard
              imgSrc="/images/metaverse/dev-laptop.svg"
              width="w-[172.5px]"
              height="h-[172.5px]"
              title="Build 100% in JavaScript"
              description="Create entirely in JavaScript. No additional languages required!"
              alt="dev-laptop"
              className="items-end md:ml-[10rem] pr-[4rem] lg:pr-0"
              textclassName="text-right md:text-left items-end lg:items-start"
            />
            <FeatureCard
              imgSrc="/images/metaverse/dstorage.svg"
              width="w-[172.5px]"
              height="h-[172.5px]"
              title="Decentralized Storage"
              description="Keep your media files safe and skip the centralized databases."
              alt="destorage"
              className="items-end md:ml-[10rem] pr-[4rem] lg:pr-0"
              textclassName="text-right md:text-left "
            />
          </div>
        )}
      </div>
    </div>
  );
};
