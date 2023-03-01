import type { NextPage } from "next";
import Image from "next/image";
import styles from "/styles/earn.module.scss";

const Home: NextPage = () => {
    return (
      <div>
        <div className="w-[1920px]">
         <Image src="/images/Koii-Onepager-Mar23.png" layout="fill"/>
         </div>
      </div>
    );
  };
  
  export default Home;