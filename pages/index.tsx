import type { NextPage } from "next";

import { NightSky } from "@/components/nightsky";
import { Iceberg } from "@/components/iceberg";
import { News } from "@/components/news";
import Hero from "@/components/hero";
import { WaysToEarn } from "@/components/ways-to-earn";

/**
 * @todo:
 * 1. Each section should have a container approx 1060-1090p to avoid layout shifts etc
 *
 */
import { Pond } from "@/components/pond/pond";
import { GrantProgram } from "@/components/grant-program/GrantProgram";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <NightSky />
      <Iceberg />
      <GrantProgram />
      <WaysToEarn />
      <News />
      <Pond />
    </div>
  );
};

export default Home;
