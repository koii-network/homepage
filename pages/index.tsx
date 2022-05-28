import type { NextPage } from "next";
import { Button } from "@/components/ui/Button";
import { News } from "@/components/ui/News";
import Head from "next/head";
import Image from "next/image";
import News1 from "../assets/images/news1.png"


const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button label="Prove it." />
      <News
      cover= {News1.src}
      title="Growing Attention Economy"
      content='"What were trying to do is complement that [proof of humanity] with proof of contribution. The way you prove your contribution to the collective knowledge commons is by getting attention from other people who have a higher reputation."'
      logo=""
      url="https://cointelegraph.com/news/nft-potential-takes-quantum-leap-with-koii-network-s-new-dynamic-nft-standard"
      urltext="Permaweb Pioneers podcast"
      />
    </div>
  );
};

export default Home;
