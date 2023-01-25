import type { NextPage } from "next";
import {
  Hero,
  PirateShip,
  ProductsToBuild,
  ProgramBenefits,
  Form,
  DiscordAndDocs,
} from "@/components/founders";

const Founders: NextPage = () => {
  return (
    <div>
      <Hero />
      <PirateShip />
      <ProductsToBuild />
      <ProgramBenefits />
      <Form />
      <DiscordAndDocs />
    </div>
  );
};

export default Founders;
