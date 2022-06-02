import type { NextPage } from "next";
import { News } from "@/components/news";
import Hero from "@/components/hero";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <News />
    </div>
  );
};

export default Home;
