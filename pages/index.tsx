import type { NextPage } from "next";
import { Button } from "@/components/ui/Button";
import { News } from "@/components/news";
import Head from "next/head";
import Image from "next/image";


const Home: NextPage = () => {
  return (
    <div>
  <div>Page content</div>
    <News/>
  </div>
  );
};

export default Home;
