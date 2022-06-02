import styles from "/styles/home.module.css";
import Image from "next/image";
import icebergtop from "/public/images/icebergtop.svg";
import moon from "/public/images/moon.svg";
import birds from "/public/images/birds.svg";

export const NightSky = () => {
  return (
    <div className={styles.nightsky}>
      <div className="moon absolute w-[180px] md:w-[450px] h-[270px] md:h-[500px]">
        <Image
          className="!ml-[-3rem]"
          src={moon}
          alt="moon"
          layout="fill" objectFit="cover"
        />
      </div>
      <div className="birds absolute top-[115px] md:bottom-0 md:top-[unset] left-[3rem] md:left-[16rem] w-[300px] h-[550px]">
        <Image
          className=""
          src={birds}
          alt="birds"
          layout="fill" objectFit="cover"
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
