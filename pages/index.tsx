import type { NextPage } from "next";

import { NightSky } from "@/components/nightsky";
import { News } from "@/components/news";
import Hero from "@/components/hero";
import { WaysToEarn } from "@/components/ways-to-earn";

/**
 * @todo:
 * 1. Each section should have a container approx 1060-1090p to avoid layout shifts etc
 *
 */

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <NightSky />
      <WaysToEarn />
      <News />
    </div>
  );
};

export default Home;
