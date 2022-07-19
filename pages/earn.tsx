import type { NextPage } from "next";
import { Earnhero } from "@/components/earn/hero";
import { Steps } from "@/components/earn/steps";
import styles from "/styles/earn.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.background}>
      <Earnhero />
      <Steps />
    </div>
  );
};

export default Home;
