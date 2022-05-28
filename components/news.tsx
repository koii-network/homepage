import Image from "next/image";
import { Newsblock } from "./ui/News"

export const News = () => {
    return (
       
      <Newsblock
      cover= "/images/news1.png"
      title="Growing Attention Economy"
      content='"What were trying to do is complement that [proof of humanity] with proof of contribution. The way you prove your contribution to the collective knowledge commons is by getting attention from other people who have a higher reputation."'
      logo=""
      url="https://cointelegraph.com/news/nft-potential-takes-quantum-leap-with-koii-network-s-new-dynamic-nft-standard"
      urltext="Permaweb Pioneers podcast"
      />
    );
};