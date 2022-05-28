import Image from "next/image";
import { Newsblock } from "./ui/News"

export const News = () => {
    return (
    <div>
        <h2 className="pl-36 pt-2 text-5xl">In the News</h2>
        <p className="pl-36 pt-2 text-xs">Catch Up on all the Latest</p>
       
       <div className="pt-12 grid grid-cols-3 gap-4 flex place-content-center px-12">
      <Newsblock
      cover= "/images/news2.png"
      title="Growing Attention Economy"
      content='"What were trying to do is complement that [proof of humanity] with proof of contribution. The way you prove your contribution to the collective knowledge commons is by getting attention from other people who have a higher reputation."'
      logo=""
      url="https://cointelegraph.com/news/nft-potential-takes-quantum-leap-with-koii-network-s-new-dynamic-nft-standard"
      urltext="Permaweb Pioneers podcast"
      width="200"
      />
      <Newsblock
      cover= "/images/news1.png"
      title="User Experience At ETH Denver"
      content='See Creative Director Kayla Kroot speak at the future of User Experience in Web3 on a panel at ETH Denver with leaders from Chainlink Labs, Biconomy, and DeFi Saver.'
      logo=""
      url="https://cointelegraph.com/news/nft-potential-takes-quantum-leap-with-koii-network-s-new-dynamic-nft-standard"
      urltext="ETH Denver"
      width="320"
      />
      <Newsblock
      cover= "/images/news3.png"
      title="NFT potential takes quantum..."
      content='They decay! They grow back! They transform with the passage of time (sometimes into zombies!) Koii Network’s new NFT...'
      logo=""
      url="https://cointelegraph.com/news/nft-potential-takes-quantum-leap-with-koii-network-s-new-dynamic-nft-standard"
      urltext="Cointelegraph"
      width="320"
      />
      </div>
    </div>
    );
};