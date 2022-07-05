import type { NextPage } from "next";
import { Abouthero } from "@/components/about/hero/hero";
import { Howitwork } from "@/components/about/how";
import { Technology } from "@/components/about/technology/technology";
import { Playground } from "@/components/about/playground";
import { Koiimunity } from "@/components/about/koiimunity/koiimunity";
import styles from "/styles/about.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.background}>
      <Abouthero />
      <Howitwork />
      <Technology />
      <Playground />
      <Koiimunity />
    </div>
  );
};

export default Home;
