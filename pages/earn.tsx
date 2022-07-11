import type { NextPage } from "next";
import { Earnhero } from "@/components/earn/hero";

import styles from "/styles/earn.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.background}>
      <Earnhero />
    </div>
  );
};

export default Home;
