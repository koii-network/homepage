import type { NextPage } from "next";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/Button";
import Head from "next/head";
import Image from "next/image";
import { Hero } from "@/components/hero"

const Home: NextPage = () => {
  return (
<div>
    <Hero/>
    Page content
    <IconButton
    as="twitter"
    href="https://twitter.com/"
    fill="#171753"
    />
</div>
  );

};

export default Home;
