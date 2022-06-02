import styles from "/styles/home.module.css";
import Image from "next/image";
import icebergtop from "/public/images/icebergtop.svg";
import iceberg from "/public/images/iceberg.svg";
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
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="birds absolute top-[115px] md:bottom-0 md:top-[unset] left-[3rem] md:left-[16rem] w-[300px] h-[750px]">
        <Image
          className=""
          src={birds}
          alt="birds"
          layout="fill"
          objectFit="cover"
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
      <div className="star-text text-2xl flex flex-col pl-[35rem] text-white ">
          <span className="relative bottom-[3rem]">Identity</span>
          <span className="relative left-[11rem] top-[2rem] opacity-40">Creativity</span>
          <span className="relative right-[19rem] opacity-20">Content</span>
          <span className="relative top-[5rem] opacity-80">Rewards</span>
          <span className="relative top-[8rem] right-[26rem] opacity-60">Attention</span>
      </div>
    <div className="icebergtext text-2xl flex flex-col relative text-[#171753]">
        <span className="relative left-[63rem] top-[5rem]">Free Crypto</span>
        <span className="relative left-[42rem] top-[14rem]">Amazing Developer Tools</span>
    </div>
      <div className="Icebergtop absolute top-[622px] right-0 w-[562px] h-[1035px]">
        <Image
          className=" "
          src={iceberg}
          alt="icebergtop"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
