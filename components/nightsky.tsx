import styles from "/styles/home.module.css";
import Image from "next/image";
import icebergtop from "/public/images/icebergtop.svg";
import moon from "/public/images/moon.svg";

export const NightSky = () => {
  return (
    <div className={styles.nightsky}>
      <div className="moon absolute">
        <Image
          className="!ml-[-3rem]"
          src={moon}
          alt="moon"
          width="500"
          height="500"
          layout="fixed"
        />
      </div>
      <div className="px-24 py-28 text-right text-white">
        <div className="text-5xl font-semibold max-w-2xl inline-block">
          Take back control of your online life.
        </div>
        <div className="text-4xl mt-11 font-semibold">
          Koii is web3, for everyone.
        </div>
      </div>

      <div className="Icebergtop flex flex-row-reverse">
        <Image
          className="!mr-[-2rem] "
          src={icebergtop}
          alt="icebergtop"
          width="535"
          height="365"
          layout="fixed"
        />
      </div>
    </div>
  );
};
