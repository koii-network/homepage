import type { NextPage } from "next";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/Button";
import Head from "next/head";
import Image from "next/image";
import { Hero2 } from "@/components/hero/hero2"

const Home: NextPage = () => {
  return (
<div>
    <Hero2/>
    Page content
</div>
  );

};

export default Home;
