import { Newsblock } from "./ui/News";
import arweave from "/public/images/logos/arweave.svg";
import cointelegraph from "/public/images/logos/cointelegraph.svg";
import ethdenver from "/public/images/logos/ethdenver.svg";

export const News = () => {
  return (
    <div className="text-koiiblue py-16">
      <h2 className="text-center md:text-left md:pl-36 pt-2 text-5xl">
        In the News
      </h2>
      <p className="text-center md:text-left md:pl-36 pt-10 md:pt-2 text-xs">
        Catch Up on all the Latest
      </p>

      <div className="grid md:grid-cols-3 gap-4 flex justify-items-center justify-center px-12">
        <Newsblock
          cover="/images/news2.png"
          title="Growing Attention Economy"
          content='"What were trying to do is complement that [proof of humanity] with proof of contribution. The way you prove your contribution to the collective knowledge commons is by getting attention from other people who have a higher reputation."'
          logo={arweave}
          url="https://open.spotify.com/episode/1UEi9pJKjuVii2jGnjFC6D?si=FrXk2eOTRZK5vB5h5_AiWw&utm_source=copy-link"
          urltext="Permaweb Pioneers podcast"
          width="200"
        />
        <Newsblock
          cover="/images/news1.png"
          title="User Experience At ETH Denver"
          content="See Creative Director Kayla Kroot speak at the future of User Experience in Web3 on a panel at ETH Denver with leaders from Chainlink Labs, Biconomy, and DeFi Saver."
          logo={ethdenver}
          url="https://www.youtube.com/watch?v=PcGVNZldGqk"
          urltext="ETH Denver"
          width="320"
        />
        <Newsblock
          cover="/images/news3.png"
          title="NFT potential takes quantum..."
          content="They decay! They grow back! They transform with the passage of time (sometimes into zombies!) Koii Network’s new NFT..."
          logo={cointelegraph}
          url="https://cointelegraph.com/news/nft-potential-takes-quantum-leap-with-koii-network-s-new-dynamic-nft-standard"
          urltext="Cointelegraph"
          width="320"
        />
      </div>
    </div>
  );
};
