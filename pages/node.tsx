import type { NextPage } from "next";
import { Nodehero } from "@/components/node/hero";
import styles from "/styles/node.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.background}>
      <Nodehero />
    </div>
  );
};

export default Home;
