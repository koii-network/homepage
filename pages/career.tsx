import type { NextPage } from "next";
import { Jobshero } from "@/components/jobs/hero/hero";
import { Board } from "@/components/jobs/board";
import { JobsList } from "@/components/jobs/list";

const Home: NextPage = () => {
  return (
    <div>
      <Jobshero />
      <Board />
      <JobsList />
    </div>
  );
};

export default Home;
