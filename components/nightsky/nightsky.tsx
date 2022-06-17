import Image from "next/image";
import styles from "/styles/home.module.css";

export const NightSky = () => {
  return (
    <div
      className={`${styles.nightsky} h-[900px] md:h-[1000px] overflow-visible`}
      id="nightsky"
    >
      <div className="container relative mx-auto overflow-visible">
        <div className="moon absolute left-[-8rem] top-[4rem] md:top-0 md:left-[-200px] z-50 w-[500px] h-[632px] md:w-[858px] md:h-[1085px]">
          <Image
            src={"/images/moon-birds_desktop.svg"}
            alt="moon"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="py-10 text-right text-white md:py-28">
          <div className="inline-block text-3xl leading-[40px] font-semibold md:text-5xl md:max-w-2xl pr-8 md:pr-0">
            Take back control of
            <br /> your online life.
          </div>
          <div className="text-lg md:text-4xl mt-[15rem] md:mt-11 font-semibold text-center md:text-right">
            Koii is web3, for everyone.
          </div>
        </div>

        <div className="star-text md:text-2xl flex md:pl-[26rem] lg:pl-[35rem] text-white w-auto">
          <span className="animate-[identity_6000ms_ease_infinite;] relative bottom-[16rem] md:bottom-[3rem] left-[12rem] md:left-[5rem]">
            Identity
          </span>
          <span className="animate-[creativity_6000ms_ease_infinite;] relative bottom-[10rem] md:left-[5rem] left-[13rem] md:top-[4rem] opacity-40">
            Creativity
          </span>
          <span className="animate-[content_6000ms_ease_infinite;] relative right-[5rem] md:right-[30rem] bottom-[1rem] md:top-[4rem] opacity-20">
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
          <span className="relative right-[5rem] md:right-[13rem] lg:right-[18rem] top-[13rem] md:top-[13rem]">
            Free Crypto
          </span>
          <span className="relative right-[4rem] md:right-[14rem] lg:right-[19rem] top-[19rem] md:top-[24rem]">
            Amazing Developer Tools
          </span>
        </div>

        <div
          className={`Icebergtop absolute top-[720px] md:top-[646px] right-[-8rem] md:right-[-120px] w-[347px] md:w-[680px] h-[525px] md:h-[1025px]`}
        >
          <Image
            className="z-10"
            src={"/images/iceberg_desktop.svg"}
            alt="iceberg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};
