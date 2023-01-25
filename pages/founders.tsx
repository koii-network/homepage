import type { NextPage } from "next";
import {
  Hero,
  PirateShip,
  LearnToBuild,
  ProgramBenefits,
  Form,
  DiscordAndDocs,
} from "@/components/founders";

const Founders: NextPage = () => {
  return (
    <div className="pt-16">
      <Hero />
      <PirateShip />
      <LearnToBuild />
      <ProgramBenefits />
      <Form />
      <DiscordAndDocs />
    </div>
  );
};

export default Founders;
