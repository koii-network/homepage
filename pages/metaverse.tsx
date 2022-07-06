import type { NextPage } from "next";
import { Metaversehero } from "@/components/metaverse/hero";
import { Feature } from "@/components/metaverse/features";
import { Signup } from "@/components/signup";
import { News } from "@/components/news";
import styles from "/styles/metaverse.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.background}>
        <Metaversehero />
        <Feature />
        <Signup title="Sign up to hear more about Koii and the Metaverse" />
      </div>
      <News background={styles.newsbackground} />
    </div>
  );
};

export default Home;
