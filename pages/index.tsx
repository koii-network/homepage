import type { NextPage } from "next";
import { Button } from "@/components/ui/Button";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button label="Prove it." />
    </div>
  );
};

export default Home;
