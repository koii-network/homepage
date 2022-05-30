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
    <div className="grid grid-cols-4 gap-4">
    <IconButton as="twitter" fill="#171799" px="80"/>
    <IconButton as="discord" fill="#171799" px="80"/>
    <IconButton as="telegram" fill="#171799" px="80"/>
    <IconButton as="github" fill="#171799" px="80"/>
    </div>
</div>
  );

};

export default Home;
