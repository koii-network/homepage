import type { NextPage } from "next";
import { NightSky } from "@/components/nightsky";

const Home: NextPage = () => {
  return (
    <div>
      <NightSky />
      Page content
    </div>
  );
};

export default Home;
