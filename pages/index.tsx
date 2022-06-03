import type { NextPage } from "next";

import { NightSky } from "@/components/nightsky";
import { News } from "@/components/news";
import Hero from "@/components/hero";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <NightSky />
      <News />
    </div>
  );
};

export default Home;
