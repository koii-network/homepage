import { TechCard } from "./components/tech";

export const Technology = () => {
  return (
    <div
      className={`herotech container lg:h-[520px] pt-[150px] lg:pt-[30px] relative z-10`}
    >
      <div className="flex flex-col px-[40px] lg:px-[120px]">
        <div className="title text-[30px] lg:text-[40px] font-semibold">
          Our Technology
        </div>
        <div className="description text-[16px] pt-[20px] pb-[70px] max-w-[478px]">
          Koii nodes are part of a constellation of decentralized systems. Start
          building peer to peer applications, today!
        </div>
        <div className="techcard flex flex-col items-center lg:flex-row lg:items-baseline mx-[-3.5rem]">
          <TechCard
            imgSrc="/images/tech_wallet.svg"
            width={92}
            height={70}
            title="Identity Layer"
            subtitle="Super wallet"
            description="Finnie"
            alt="Identity Layer"
          />
          <TechCard
            imgSrc="/images/tech_interface.svg"
            width={227}
            height={80}
            title="Interface Layer"
            subtitle="Toolkit, hosting, & templates"
            description="Koii-X"
            alt="Koii-X"
          />
          <TechCard
            imgSrc="/images/tech_settlement.svg"
            width={130}
            height={118}
            title="Settlement Layer"
            subtitle="Fast consensus"
            description="K2"
            alt="K2"
          />
          <TechCard
            imgSrc="/images/tech_storage.svg"
            width={116}
            height={107}
            title="Storage Layer"
            subtitle="SDKs & Libraries"
            description="Universal Content Registry"
            alt="Universal Content Registry"
          />
          <TechCard
            imgSrc="/images/tech_application.svg"
            width={118}
            height={90}
            title="Application Layer "
            subtitle="Serverless hosting "
            description="Task Nodes"
            alt="Task Nodes"
          />
        </div>
      </div>
    </div>
  );
};
