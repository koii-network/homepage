import type { NextPage } from "next";
import { Downloadhero } from "@/components/download/hero";
import styles from "/styles/node.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.background}>
      <Downloadhero />
    </div>
  );
};

export default Home;
