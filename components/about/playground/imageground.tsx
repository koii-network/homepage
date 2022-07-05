import Image from "next/image";
import { useMediaQuery } from "@/components/hooks";
import styles from "styles/playground.module.scss";

export const Imageground = () => {
  const isBreakpoint = useMediaQuery(728);
  return (
    <div className={`Imageground lg:h-[1260px] my-[-7rem]`}>
      <div
        className="h-[1800px] lg:h-[1360px] relative z-[1]"
        style={{
          background: isBreakpoint
            ? ``
            : `url("/images/about/playground.svg") no-repeat center / cover`,
        }}
      >
        <div className="container md:mt-[-16rem] lg:mt-0">
          <div className="ground relative z-30 pt-[10rem] px-[5rem] h-[1800px] lg:h-[1360px]">
            <div className="">
              <div className="absolute top-[15rem] left-[13rem] lg:left-[4rem] md:top-[31rem] lg:top-[20rem] text-[18px] lg:text-[25px]  lg:w-[126px] font-semibold">
                Finnie Wallet
              </div>
              <div
                className={`${styles.wallet} z-10 absolute left-0 lg:left-[10rem] bottom-[91rem] md:bottom-[75rem] lg:bottom-[45rem] max-w-[175px] lg:max-w-[400px] `}
              >
                <Image
                  src="/images/about/playground/wallet_front.svg"
                  alt="wallet front"
                  width={259}
                  height={330}
                />
              </div>
              <div
                className={`${styles.walletback} z-[1] ease-in-out duration-300 absolute lg:relative top-[0rem] md:top-[16rem] lg:top-[-2rem] left-[10rem] lg:left-[17rem] w-[200px] md:w-[307px] lg:max-w-[600px]`}
              >
                {isBreakpoint ? (
                  <Image
                    src="/images/about/playground/wallet_back_mobile.svg"
                    alt="wallet back"
                    width={362}
                    height={378}
                  />
                ) : (
                  <Image
                    src="/images/about/playground/wallet_back.svg"
                    alt="wallet back"
                    width={362}
                    height={278}
                  />
                )}
              </div>
            </div>

            <div className="">
              <div className="absolute top-[62rem] md:top-[78rem] lg:top-[20rem] right-[8rem] lg:left-[45rem] text-[18px] lg:text-[25px] w-[200px] font-semibold">
                Decentralized Identity
              </div>
              <div
                className={`${styles.decentralized} z-10  absolute right-[-1rem] lg:left-[51rem] bottom-[38rem] md:bottom-[22rem] lg:bottom-[39rem] w-[200px] lg:w-auto`}
              >
                <Image
                  src="/images/about/playground/decentralized_front.svg"
                  alt="wallet front"
                  width={262}
                  height={448}
                />
              </div>
              <div
                className={`${styles.decentralizedback} z-[1] ease-in-out duration-300 absolute lg:relative top-[44rem] md:top-[63rem] lg:top-[-19rem] left-0 lg:left-[57rem] md:w-[356px]`}
              >
                {isBreakpoint ? (
                  <Image
                    src="/images/about/playground/decentralized_back_mobile.svg"
                    alt="wallet back"
                    width={338}
                    height={306}
                  />
                ) : (
                  <Image
                    src="/images/about/playground/decentralized_back.svg"
                    alt="wallet back"
                    width={438}
                    height={306}
                  />
                )}
              </div>
            </div>

            <div className="">
              <div className="absolute top-[37rem] md:top-[53rem] lg:top-[44rem] left-[13rem] lg:left-[15rem] text-[18px] lg:text-[25px] w-[200px] font-semibold">
                Finnie Mobile
              </div>
              <div
                className={`${styles.mobile} z-10  absolute left-[-5rem] lg:left-[22rem] bottom-[68rem] md:bottom-[52rem] lg:bottom-[30rem] max-w-[303px] lg:max-w-[800px]`}
              >
                <Image
                  src="/images/about/playground/mobile_front.svg"
                  alt="wallet front"
                  width={382}
                  height={346}
                />
              </div>
              <div
                className={`${styles.mobileback} z-[1] ease-in-out duration-300 absolute lg:relative top-[22rem] md:top-[38rem] lg:top-[9rem] left-[8rem] lg:left-[4rem] w-[200px] md:w-[400px] lg:w-[462px]`}
              >
                {isBreakpoint ? (
                  <Image
                    src="/images/about/playground/mobile_back_mobile.svg"
                    alt="wallet back"
                    width={400}
                    height={401}
                  />
                ) : (
                  <Image
                    src="/images/about/playground/mobile_back.svg"
                    alt="wallet back"
                    width={536}
                    height={301}
                  />
                )}
              </div>
            </div>

            <div className="">
              <div className="absolute top-[80rem] md:top-[90rem] lg:top-[60rem] left-[13rem] lg:left-[55rem] text-[18px] lg:text-[25px] w-[200px] font-semibold">
                Desktop Node
              </div>
              <div
                className={`${styles.node} z-10  absolute left-[0rem] lg:left-[55rem] bottom-[20rem] md:bottom-[4rem] lg:bottom-[22rem]`}
              >
                <Image
                  src="/images/about/playground/node_front.svg"
                  alt="wallet front"
                  width={232}
                  height={361}
                />
              </div>
              <div
                className={`${styles.nodeback} z-[1] ease-in-out duration-300 absolute lg:relative top-[85rem] md:top-[94rem] lg:top-[-3rem] left-[3rem] md:left-[12rem] lg:left-[37rem]`}
              >
                {isBreakpoint ? (
                  <Image
                    src="/images/about/playground/node_back_moblie.svg"
                    alt="wallet back"
                    width={607}
                    height={317}
                  />
                ) : (
                  <Image
                    src="/images/about/playground/node_back.svg"
                    alt="wallet back"
                    width={607}
                    height={217}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
