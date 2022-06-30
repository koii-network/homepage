import styles from "styles/career.module.css";
import Image from "next/image";

export const Jobshero = () => {
  return (
    <div id="jobs-header" className={`${styles.careerhero}`}>
      <div className="koiipool absolute z-[1] right-0 top-[16rem] md:top-[20rem] lg:top-0 w-[1796px] h-[1651px]">
        <Image
          src="/images/career/career_background.svg"
          alt=""
          layout="fill"
        />
      </div>
      <div className="container">
        <div className="pr-[2rem] pl-[2rem] pt-[8rem] md:pt-[13rem] relative z-10">
          <div className="md:text-[16px] uppercase text-darkmint">CAREERS</div>
          <div className="text-koiiblue text-[32px] md:text-[56px] mt-[16px] md:w-[583px] font-semibold">
            Want to create a better internet?
          </div>
          <div className="pt-[15px]">
            <a
              className="text-[28px] md:text-[40px] text-darkmint"
              href="/form/career/"
            >
              Join the team
            </a>
          </div>
          <div className="text-[20px] md:text-[24px] text-[#5B5675] md:w-[400px] pt-[20px]">
            Check our job listing and find the right spot for you.
          </div>
        </div>
      </div>
    </div>
  );
};
