import type { NextPage } from "next";
import { News } from "@/components/news";
import Hero from "@/components/hero";
import { Pond } from "@/components/pond/pond";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <News />
      <Pond />
    </div>
  );
};

export default Home;
