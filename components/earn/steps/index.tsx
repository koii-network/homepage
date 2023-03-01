import { StepsCard } from "./components/card";
import { useMediaQuery } from "@/components/hooks/mediaQuery";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import styles from "styles/earn.module.css";
import React, { MouseEvent } from "react";

export const Steps = () => {
  const Step1IN = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Do something
    if (typeof window !== "undefined") {
      const Stepcard = document.getElementById("Stepcard");
      const Step1 = document.getElementById("Step1Full");
      const Stepbox = document.getElementById("stepbox");
      const Anchor = document.getElementById("subtitle");
      const ListSection = document.getElementById("ListSection");
      if (
        Stepcard != null &&
        Step1 != null &&
        Stepbox != null &&
        ListSection != null
      ) {
        Stepcard.style.visibility = "hidden";
        Stepcard.style.opacity = "0";
        ListSection.style.visibility = "hidden";
        ListSection.style.opacity = "0";
        Step1.style.opacity = "1";
        Step1.style.visibility = "visible";
        Stepbox.classList.add("h-[950px]");
      }
      if (Anchor != null) {
        Anchor.scrollIntoView();
      }
    }
  };
  const Step1OUT = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Do something
    if (typeof window !== "undefined") {
      const Stepcard = document.getElementById("Stepcard");
      const Step1 = document.getElementById("Step1Full");
      const Stepbox = document.getElementById("stepbox");
      const ListSection = document.getElementById("ListSection");
      if (
        Stepcard != null &&
        Step1 != null &&
        Stepbox != null &&
        ListSection != null
      ) {
        Stepcard.style.visibility = "visible";
        Stepcard.style.opacity = "1";
        ListSection.style.visibility = "visible";
        ListSection.style.opacity = "1";
        Step1.style.opacity = "0";
        Step1.style.visibility = "hidden";
        Stepbox.classList.remove("h-[950px]");
      }
    }
  };
  const Step2IN = (e: any) => {
    e.preventDefault();
    // Do something
    if (typeof window !== "undefined") {
      const Stepcard = document.getElementById("Stepcard");
      const Step2 = document.getElementById("Step2Full");
      const Stepbox = document.getElementById("stepbox");
      const Anchor = document.getElementById("subtitle");
      if (Stepcard != null && Step2 != null && Stepbox != null) {
        Stepcard.style.visibility = "hidden";
        Stepcard.style.opacity = "0";
        Step2.style.opacity = "1";
        Step2.style.visibility = "visible";
        Stepbox.classList.add("h-[950px]");
      }
      if (Anchor != null) {
        Anchor.scrollIntoView();
      }
    }
  };
  const Step2OUT = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Do something
    if (typeof window !== "undefined") {
      const Stepcard = document.getElementById("Stepcard");
      const Step2 = document.getElementById("Step2Full");
      const Stepbox = document.getElementById("stepbox");
      if (Stepcard != null && Step2 != null && Stepbox != null) {
        Stepcard.style.visibility = "visible";
        Stepcard.style.opacity = "1";
        Step2.style.opacity = "0";
        Step2.style.visibility = "hidden";
        Stepbox.classList.remove("h-[950px]");
      }
    }
  };
  const Step3IN = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Do something
    if (typeof window !== "undefined") {
      const Stepcard = document.getElementById("Stepcard");
      const Step3 = document.getElementById("Step3Full");
      const Stepbox = document.getElementById("stepbox");
      const Anchor = document.getElementById("subtitle");
      if (Stepcard != null && Step3 != null && Stepbox != null) {
        Stepcard.style.visibility = "hidden";
        Stepcard.style.opacity = "0";
        Step3.style.opacity = "1";
        Step3.style.visibility = "visible";
        Stepbox.classList.add("h-[950px]");
      }
      if (Anchor != null) {
        Anchor.scrollIntoView();
      }
    }
  };
  const Step3OUT = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Do something
    if (typeof window !== "undefined") {
      const Stepcard = document.getElementById("Stepcard");
      const Step3 = document.getElementById("Step3Full");
      const Stepbox = document.getElementById("stepbox");
      if (Stepcard != null && Step3 != null && Stepbox != null) {
        Stepcard.style.visibility = "visible";
        Stepcard.style.opacity = "1";
        Step3.style.opacity = "0";
        Step3.style.visibility = "hidden";
        Stepbox.classList.remove("h-[950px]");
      }
    }
  };
  const Step4IN = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Do something
    if (typeof window !== "undefined") {
      const Stepcard = document.getElementById("Stepcard");
      const Step4 = document.getElementById("Step4Full");
      const Stepbox = document.getElementById("stepbox");
      const Anchor = document.getElementById("subtitle");
      if (Stepcard != null && Step4 != null && Stepbox != null) {
        Stepcard.style.visibility = "hidden";
        Stepcard.style.opacity = "0";
        Step4.style.opacity = "1";
        Step4.style.visibility = "visible";
        Stepbox.classList.add("md:min-h-[900px]");
        Stepbox.classList.add("h-[1050px]");
      }
      if (Anchor != null) {
        Anchor.scrollIntoView();
      }
    }
  };
  const Step4OUT = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Do something
    if (typeof window !== "undefined") {
      const Stepcard = document.getElementById("Stepcard");
      const Step4 = document.getElementById("Step4Full");
      const Stepbox = document.getElementById("stepbox");
      if (Stepcard != null && Step4 != null && Stepbox != null) {
        Stepcard.style.visibility = "visible";
        Stepcard.style.opacity = "1";
        Step4.style.opacity = "0";
        Step4.style.visibility = "hidden";
        Stepbox.classList.remove("md:min-h-[900px]");
        Stepbox.classList.remove("h-[1050px]");
      }
    }
  };

  const isBreakpoint = useMediaQuery(1439);
  const isMobile = useMediaQuery(728);
  return (
    <div
      className={`earnsteps container xl:min-h-[580px] pt-[50px] xl:pt-[30px] relative z-10`}
    >
      <div className="flex flex-col items-center" id="ListSection">
        <p className="text-center text-[32px]">
          There are so many ways to get involved...
          <br /> and to earn.
        </p>
        {isMobile ? (
          <p className="text-center text-[18px] pt-[10px]">
            Tap the sections below to learn more.
          </p>
        ) : (
          <p className="text-center text-[18px] pt-[10px]">
            Click the sections below to learn more.
          </p>
        )}
      </div>
      <div
        className={`${styles.stepbox} md:h-auto xl:min-h-[370px]  flex flex-col px-[40px] xl:px-[120px]`}
        id="stepbox"
      >
        {isBreakpoint ? (
          <div
            className={`${styles.stepcard} Steps grid grid-cols-1 xl:grid-cols-2 gap-4 items-center xl:flex-row xl:items-baseline mx-[-3.5rem]`}
            id="Stepcard"
          >
            {/* <span
              className="anchor absolute translate-y-[-60rem] md:translate-y-[-30rem]"
              id="earnanchor"
            ></span> */}

            <div onClick={Step1IN} className="cursor-pointer">
              <StepsCard
                imgSrc="/images/earn/step1.svg"
                width="w-[172.5px]"
                height="h-[172.5px]"
                title="Attention Tracking on your site"
                description="If you have a website with regular traffic, earn passive income now— it only takes 2 minutes."
                alt="Dynamic NFT"
                className={`pl-[4rem] xl:pl-0`}
                textclassName="text-left"
              />
            </div>

            <div onClick={Step2IN} className="cursor-pointer">
              <StepsCard
                imgSrc="/images/earn/step2.svg"
                width="w-[172.5px]"
                height="h-[172.5px]"
                title="Drag & Drop any file to create an NFT"
                description="Share it with your friends and start earning right away."
                alt="step2"
                className="items-end md:ml-[10rem] pr-[4rem] xl:pr-0"
                textclassName="text-right md:text-left items-end xl:items-start"
              />
            </div>

            <div onClick={Step3IN} className="cursor-pointer">
              <StepsCard
                imgSrc="/images/earn/step3.svg"
                width="w-[172.5px]"
                height="h-[172.5px]"
                title="Become an Ambassador"
                description="Learn about Koii, engage with the community, and earn for your time!"
                alt="Koii-X"
                className="pl-[4rem] xl:pl-0"
                textclassName="text-left"
              />
            </div>

            <div onClick={Step4IN} className="cursor-pointer">
              <StepsCard
                imgSrc="/images/earn/step4_big.svg"
                width="w-[172.5px]"
                height="h-[172.5px]"
                title="Rent your device’s extra compute power"
                description="Run the network and get rewarded without a second thought."
                alt="destorage"
                className="items-end md:ml-[10rem] pr-[4rem] xl:pr-0"
                textclassName="text-right md:text-left "
              />
            </div>
          </div>
        ) : (
          <div
            className={`${styles.stepcard} Steps grid grid-cols-1 xl:grid-cols-2 gap-4 items-center xl:flex-row xl:items-baseline mx-[-3.5rem]`}
            id="Stepcard"
          >
            <StepsCard
              onMouseEnter={Step1IN}
              imgSrc="/images/earn/step1.svg"
              width="w-[172.5px]"
              height="h-[172.5px]"
              title="Attention Tracking on your site"
              description="If you have a website with regular traffic, earn passive income now— it only takes 2 minutes."
              alt="dynamic nft"
              className="pl-[4rem] xl:pl-0"
              textclassName="text-left"
            />
            <StepsCard
              onMouseEnter={Step3IN}
              imgSrc="/images/earn/step3.svg"
              width="w-[172.5px]"
              height="h-[172.5px]"
              title="Become an Ambassador"
              description="Learn about Koii, engage with the community, and earn for your time!"
              alt="Koii token"
              className="pl-[4rem] xl:pl-0"
              textclassName="text-left"
            />
            <StepsCard
              onMouseEnter={Step2IN}
              imgSrc="/images/earn/step2.svg"
              width="w-[172.5px]"
              height="h-[172.5px]"
              title="Drag & Drop any file to create an NFT"
              description="Share it with your friends and start earning right away."
              alt="step2"
              className="items-end md:ml-[10rem] pr-[4rem] xl:pr-0"
              textclassName="text-right md:text-left items-end xl:items-start"
            />
            <StepsCard
              onMouseEnter={Step4IN}
              imgSrc="/images/earn/step4_big.svg"
              width="w-[172.5px]"
              height="h-[172.5px]"
              title="Rent your device’s extra compute power"
              description="Run the network and get rewarded without a second thought."
              alt="destorage"
              className="items-end md:ml-[10rem] pr-[4rem] xl:pr-0"
              textclassName="text-right md:text-left"
            />
          </div>
        )}
      </div>

      <div
        className={`${styles.step1full} absolute z-10 top-0 right-[50%] translate-x-[50%] pt-[50px] xl:pt-[30px]`}
        id="Step1Full"
        onMouseLeave={Step1OUT}
      >
        {isMobile ? (
          <div className={`self-start`} onClick={Step1OUT}>
            <Image src="/images/earn/icon_back.svg" width={46} height={46} />
          </div>
        ) : (
          ""
        )}
        <div className="flex flex-col items-center">
          <p className="text-center text-[32px]">
            There are so many ways to get involved...
            <br /> and to earn.
          </p>
          {isMobile ? (
            <p className="text-center text-[18px] pt-[10px]">
              Tap the sections below to learn more.
            </p>
          ) : (
            <p className="text-center text-[18px] pt-[10px]">
              Click the sections below to learn more.
            </p>
          )}
        </div>
        <div className=" flex flex-col xl:flex-row px-[4rem] items-center justify-between ">
          <div
            className={`justify-center xl:w-[371px] md:w-[242px] md:h-[242px] xl:h-[371px] mb-[2rem]`}
          >
            <Image src="/images/earn/step1.svg" width={371} height={371} />
          </div>
          <div className={`flex flex-col mx-[2rem]`}>
            <p className="text-[20px] font-semibold">
              Attention Tracking on your site
            </p>
            <p className="text-[16px] pt-[20px] max-w-[326px]">
              Earning rewards for every person who visits your website is easy—
              <br />
              Install this script and you’re good to go
            </p>
            <p className="text-[16px] pt-[20px]">
              Check out the docs for full configuration:
            </p>
            <Button
              width="197px"
              height="53px"
              asLink
              target="_blank"
              href="https://docs.koii.network/earning-koii/attention-mining"
              className=" my-[2rem] px-6 py-3 w-[221px] bg-koiiblue text-white text-normal rounded-[32px] drop-shadow-lg"
              label="Koii Wiki"
            />
          </div>
          <div className={`justify-center w-[242px] h-[auto] xl:w-[371px]`}>
            <div
              className={` ${styles.script} text-left script-box text-white p-[2rem] md:w-[242px] xl:w-[390px] h-auto`}
            >
              <p> import * as port from &quot;@_koii/k2-port&quot;</p>
              <p>
                <br />
                {` let portAPI = new port.PoRT({ `}{" "}
              </p>
              <p>
                trustedNodeAddress: &apos;https://k2-tasknet.koii.live&apos;,
              </p>
              <p> node: 5,</p>
              <p> connectionWait: true,</p>
              <p>{`});`}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.step2full} flex flex-col xl:flex-row px-[4rem] items-center justify-between absolute z-10 top-0 right-[50%] translate-x-[50%]`}
        id="Step2Full"
        onMouseLeave={Step2OUT}
      >
        {isMobile ? (
          <div className={`self-start`} onClick={Step2OUT}>
            <Image src="/images/earn/icon_back.svg" width={46} height={46} />
          </div>
        ) : (
          ""
        )}
        <div
          className={`justify-center md:w-[242px] md:h-[242px] xl:w-[371px] md:w-[242px] md:h-[242px] xl:h-[371px] mb-[2rem]`}
        >
          <Image src="/images/earn/step2.svg" width={371} height={371} />
        </div>
        <div className={`flex flex-col mx-[2rem]`}>
          <p className="text-[20px] font-semibold">
            Drag & Drop any file to create an NFT
          </p>
          <p className="text-[16px] pt-[20px] max-w-[326px]">
            Anything you create can become an NFT that earns attention rewards.
          </p>
          <p className="text-[16px] pt-[20px] max-w-[326px]">
            Get Finnie to mint any file on your computer in under a minutes.
            Then share with your friends to start earning.
          </p>
          <Button
            width="197px"
            height="53px"
            asLink
            target="_blank"
            href="https://koii.me/finnie"
            className=" my-[2rem] px-6 py-3 w-[221px] bg-koiiblue text-white text-normal rounded-[32px] drop-shadow-lg"
            label="Get Finnie"
          />
        </div>
        <div
          className={`justify-center md:w-[242px] md:h-[242px] xl:w-[371px] md:w-[242px] md:h-[242px] xl:h-[371px]`}
        >
          <Image src="/images/earn/step2_finnie.svg" width={371} height={371} />
        </div>
      </div>

      <div
        className={`${styles.step3full} flex flex-col xl:flex-row px-[4rem] items-center justify-between absolute z-10 top-0 right-[50%] translate-x-[50%]`}
        id="Step3Full"
        onMouseLeave={Step3OUT}
      >
        {isMobile ? (
          <div className={`self-start`} onClick={Step3OUT}>
            <Image src="/images/earn/icon_back.svg" width={46} height={46} />
          </div>
        ) : (
          ""
        )}
        <div
          className={`justify-center md:w-[242px] md:h-[242px] xl:w-[371px] md:w-[242px] md:h-[242px] xl:h-[371px] mb-[2rem]`}
        >
          <Image src="/images/earn/step3.svg" width={371} height={371} />
        </div>
        <div className={`flex flex-col mx-[2rem]`}>
          <p className="text-[20px] font-semibold">Become an Ambassador</p>
          <p className="text-[16px] pt-[20px] max-w-[326px]">
            Shout Koii from the rooftops, bring your friends, learn all about
            the space.
          </p>
          <p className="text-[16px] pt-[20px] max-w-[326px]">
            Join the Ambassador program to empower the next generation of
            internet users.
          </p>
          <Button
            width="197px"
            height="53px"
            asLink
            target="_blank"
            href="https://discord.gg/koii"
            className=" my-[2rem] px-6 py-3 w-[251px] bg-koiiblue text-white text-normal rounded-[32px] drop-shadow-lg"
            label="Become an Ambassador"
          />
        </div>
        <div
          className={`justify-center md:w-[242px] md:h-[242px] xl:w-[371px] md:w-[242px] md:h-[242px] xl:h-[371px]`}
        >
          <Image src="/images/earn/step3_become.svg" width={371} height={371} />
        </div>
      </div>

      <div
        className={`${styles.step4full} flex flex-col xl:flex-row px-[4rem] items-center justify-between absolute z-10 top-0 right-[50%] translate-x-[50%]`}
        id="Step4Full"
        onMouseLeave={Step4OUT}
      >
        {isMobile ? (
          <div className={`self-start`} onClick={Step4OUT}>
            <Image src="/images/earn/icon_back.svg" width={46} height={46} />
          </div>
        ) : (
          ""
        )}
        <div
          className={`justify-center md:w-[242px] md:h-[242px] xl:w-[371px] md:w-[242px] md:h-[242px] xl:h-[371px] mb-[2rem]`}
        >
          <Image src="/images/earn/step4_big.svg" width={371} height={371} />
        </div>
        <div className={`flex flex-col mx-[2rem]`}>
          <p className="text-[20px] font-semibold">
            Rent your device’s extra compute power
          </p>
          <p className="text-[16px] pt-[20px] max-w-[326px]">
            Rent the extra compute power on your laptop or desktop (mobile
            coming soon). Help run the network and earn tokens without even
            thinking about it.{" "}
          </p>
          <p className="text-[16px] pt-[20px] max-w-[326px]">
            The Koii Node takes the same amount of space and RAM as your
            favorite music playing app, so anyone can run one!
          </p>
          <Button
            width="197px"
            height="53px"
            asLink
            href="/node"
            className=" my-[2rem] px-6 py-3 w-[221px] bg-koiiblue text-white text-normal rounded-[32px] drop-shadow-lg"
            label="Run a Node"
          />
        </div>
        <div
          className={`justify-center md:w-[242px] md:h-[242px] xl:w-[371px] md:w-[242px] md:h-[242px] xl:h-[371px]`}
        >
          <Image src="/images/earn/step4_node.svg" width={371} height={371} />
        </div>
      </div>
    </div>
  );
};
