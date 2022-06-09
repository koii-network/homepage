import styles from "/styles/home.module.css";
import Image from "next/image";
import iceberg from "/public/images/iceberg.svg";
import moon from "/public/images/moon.svg";
import birds from "/public/images/birds.svg";

export const NightSky = () => {
  return (
    <div className={`${styles.nightsky} h-[900px] md:h-[1000px]`} id="nightsky">
      <div className="moon absolute top-[6rem] md:top-0 w-[180px] md:w-[450px] h-[270px] md:h-[500px]">
        <Image
          className="!ml-[-3rem]"
          src={moon}
          alt="moon"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="birds absolute top-[240px] md:bottom-0 md:top-[unset] left-[3rem] md:left-[16rem] w-[300px] h-[495px] md:h-[750px]">
        <Image
          className=""
          src={birds}
          alt="birds"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-10 md:px-24 py-12 md:py-28 text-right text-white">
        <div className="text-2xl md:text-5xl font-semibold md:max-w-2xl inline-block">
          Take back control of your online life.
        </div>
        <div className="text-lg md:text-4xl mt-[15rem] md:mt-11 font-semibold text-center md:text-right">
          Koii is web3, for everyone.
        </div>
      </div>
      <div className="star-text md:text-2xl flex md:pl-[35rem] text-white w-auto">
        <span className="animate-[identity_6000ms_ease_infinite;] relative bottom-[16rem] md:bottom-[3rem] left-[12rem] md:left-[5rem]">
          Identity
        </span>
        <span className="animate-[creativity_6000ms_ease_infinite;] relative bottom-[10rem] md:left-[5rem] left-[13rem] md:top-[4rem] opacity-40">
          Creativity
        </span>
        <span className="animate-[content_6000ms_ease_infinite;] relative right-[5rem] md:right-[30rem] bottom-[1rem] md:top-4[rem] opacity-20">
          Content
        </span>
        <span className="animate-[rewards_6000ms_ease_infinite;] relative top-[5rem] md:top-[11rem] md:right-[31rem] opacity-80">
          Rewards
        </span>
        <span className="animate-[attention_6000ms_ease_infinite;] relative top-[8rem] md:top-[15rem] right-[15rem] md:right-[54rem] opacity-60">
          Attention
        </span>
      </div>
      <div className="icebergtext md:text-2xl flex flex-row-reverse relative text-[#171753]">
        <span className="relative right-[5rem] md:right-[18rem] top-[13rem] md:top-[13rem]">
          Free Crypto
        </span>
        <span className="relative right-[4rem] md:right-[19rem] top-[19rem] md:top-[24rem]">
          Amazing Developer Tools
        </span>
      </div>
      <div className="Icebergtop absolute top-[674px] md:top-[622px] right-[-5rem] md:right-0 w-[347px] md:w-[562px] h-[630px] md:h-[1035px]">
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
