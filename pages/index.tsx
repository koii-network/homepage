import type { NextPage } from "next";

import { NightSky } from "@/components/nightsky";
import { Iceberg } from "@/components/iceberg";
import { Timeline } from "@/components/timeline";
import { News } from "@/components/news";
import Hero from "@/components/hero";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <NightSky />
      <Iceberg />
      {/* <Timeline /> */}
      <News />
      Page content
    </div>
  );
};

export default Home;
