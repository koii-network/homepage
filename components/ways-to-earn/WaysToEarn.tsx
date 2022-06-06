import { WayToEarn } from "./components/WayToEarn";

export const WaysToEarn = () => {
  return (
    <section
      className="container md:mt-32 max-w-[1140px] md:mx-auto z-40"
      id="ways-to-earn"
    >
      <div className="flex flex-col justify-center lg:flex-row md: md:justify-between md:flex-nowrap">
        <div className="flex flex-col items-center mb-16 lg:items-start ">
          <h2 className="text-[28px] md:text-4xl leading-[48px] pt-28 text-dark-blue">
            So many ways to earn
          </h2>
          <p className="text-lg text-dark-blue">
            Start today so you don’t miss out.
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <div className="flex flex-col items-center justify-center md:gap-20 md:flex-row">
            <WayToEarn
              url="https://docs.koii.network/earning-koii/attention-mining"
              imgSrc="/images/way-1.svg"
              description={
                <div className="text-lg text-dark-blue w-[190px]">
                  <span className="font-bold">Install the script</span> to your
                  site to start earning now:
                </div>
              }
              buttonLabel={"Get the Script"}
            />
            <WayToEarn
              url="https://koii.me/finnie"
              imgSrc="/images/way-2.svg"
              description={
                <div className="text-lg text-dark-blue w-[190px]">
                  <span className="font-bold">Mint Dynamic NFTs</span> with
                  Finnie & earn attention rewards
                </div>
              }
              buttonLabel={"Get Finnie"}
            />
          </div>

          <div className="flex flex-col items-center justify-center md:gap-20 md:flex-row">
            <WayToEarn
              url="https://discord.gg/koii"
              imgSrc="/images/way-3.svg"
              description={
                <div className="text-lg text-dark-blue w-[190px]">
                  <span className="font-bold">Drive community growth</span> to
                  build a better internet
                </div>
              }
              buttonLabel={"Become an Ambassador"}
            />
            <WayToEarn
              url="https://koii.network/form/pre-register"
              imgSrc="/images/way-4.svg"
              description={
                <div className="text-lg text-dark-blue w-[190px]">
                  <span className="font-bold">Power the Network</span> by
                  running a node on your laptop
                </div>
              }
              buttonLabel={"Run a Node"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
