import { Newsblock } from "./ui/News";
import arweave from "/public/images/logos/arweave.svg";
import cointelegraph from "/public/images/logos/cointelegraph.svg";
import ethdenver from "/public/images/logos/ethdenver.png";
import Image from "next/image";

type NewsbgProps = {
  background?: string;
};

export const News = ({ background }: NewsbgProps) => {
  return (
    <div className={`${background} news-area relative`}>
      <div className="container z-40 py-16 mx-auto text-koiiblue 2xl:px-[260px]">
        <div className="mb-8 relative z-20">
          <h2 className="pt-2 text-5xl text-center lg:text-left">
            In the News
          </h2>
          <p className="pt-6 text-xs text-center uppercase lg:text-left md:pt-2">
            Catch Up on all the Latest
          </p>
        </div>

        <div className="flex flex-col flex-wrap items-center justify-center md:pt-12 lg:justify-between md:flex-row">
          <Newsblock
            imageSlot={
              <Image src="/images/news2.png" alt="" width={197} height={197} />
            }
            title="Growing The Attention Economy"
            content='"What were trying to do is complement that [proof of humanity] with proof of contribution. The way you prove your contribution to the collective knowledge commons is by getting attention from other people who have a higher reputation."'
            logo={arweave}
            url="https://open.spotify.com/episode/1UEi9pJKjuVii2jGnjFC6D?si=FrXk2eOTRZK5vB5h5_AiWw&utm_source=copy-link"
            urltext="Permaweb Pioneers podcast"
            width="200"
          />
          <Newsblock
            imageSlot={
              <Image src="/images/news1.png" alt="" width={330} height={197} />
            }
            title="User Experience At ETH Denver"
            content="See Creative Director Kayla Kroot speak at the future of User Experience in Web3 on a panel at ETH Denver with leaders from Chainlink Labs, Biconomy, and DeFi Saver."
            logo={ethdenver}
            url="https://www.youtube.com/watch?v=PcGVNZldGqk"
            urltext="ETH Denver"
            width="320"
            logowidth="74.66"
            logoheight="67"
            className="opacity-80"
          />
          <Newsblock
            imageSlot={
              <Image src="/images/news3.png" alt="" width={330} height={197} />
            }
            title="NFT potential takes quantum..."
            content="They decay! They grow back! They transform with the passage of time (sometimes into zombies!) Koii Network’s new NFT..."
            logo={cointelegraph}
            url="https://cointelegraph.com/news/nft-potential-takes-quantum-leap-with-koii-network-s-new-dynamic-nft-standard"
            urltext="Cointelegraph"
            width="320"
          />
        </div>
        <div className="metaverse-guy absolute z-[1] w-[394px] h-[547px] right-0 top-0 lg:top-[-5rem] opacity-[0.7]">
          <Image src="/images/vector/x_circle.svg" layout="fill" />
        </div>
        <div className="metaverse-guy absolute z-[1] w-[160px] h-[160px] left-[2rem] top-0 lg:top-[2rem]">
          <Image src="/images/vector/light_circle.svg" layout="fill" />
        </div>
      </div>
    </div>
  );
};
