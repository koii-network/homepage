import type { NextPage } from "next";
import { NightSky } from "@/components/nightsky/nightsky";
import { Iceberg } from "@/components/iceberg/iceberg";
import { Timeline } from "@/components/timeline";
import { News } from "@/components/news";
import Hero from "@/components/hero";
import { WaysToEarn } from "@/components/ways-to-earn";
import { Num } from "@/components/num";
import { Partners } from "@/components/partners/partners";
import { GrantProgram } from "@/components/grant-program/GrantProgram";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Num />
      <NightSky />
      <Iceberg />
      <Timeline />
      <GrantProgram />
      <WaysToEarn />
      <News />
      <Partners />
    </div>
  );
};

export default Home;
