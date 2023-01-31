export const FeaturesList = ({ isMobile }: { isMobile: boolean }) => (
  <div className="relative z-30 grid grid-cols-1 py-12 text-center 2021list gap-y-10 md:text-xl w-fit text-koiiblue">
    <div className="list-title text-left md:text-right relative left-[2rem] xl:left-[30rem]">
      <span className="text-xl font-semibold md:text-3xl">2021</span>
      <br />
      <span className="text-base">
        {isMobile ? "Tap" : "Click"} for details
      </span>
    </div>
    <span className="relative left-[3rem] xl:left-[35rem] hover:underline underline-offset-8">
      <a
        href="https://docs.koii.network/koii-summary/tools"
        rel="noreferrer noopener"
        target="_blank"
      >
        Decentralized Identity
      </a>
    </span>
    <span className="relative left-[6rem] xl:left-[35rem] hover:underline underline-offset-8">
      <a
        href="https://docs.koii.network/build-dapps-with-koii/welcome-to-koii-x/tech-stack#k2-settlement-layer"
        rel="noreferrer noopener"
        target="_blank"
      >
        Near-Instant Transactions
      </a>
    </span>
    <span className="relative left-[7rem] xl:left-[37rem] hover:underline underline-offset-8">
      <a
        href="https://docs.koii.network/earning-koii/attention-mining"
        rel="noreferrer noopener"
        target="_blank"
      >
        Trustless Attention Tracking
      </a>
    </span>
    <span className="relative left-[8rem] xl:left-[40rem] hover:underline underline-offset-8">
      <a
        href="https://docs.koii.network/build-dapps-with-koii/template-library"
        rel="noreferrer noopener"
        target="_blank"
      >
        Koii-X UI Templates
      </a>
    </span>
    <span className="relative left-[10rem] xl:left-[47rem] hover:underline underline-offset-8">
      <a
        href="https://docs.koii.network/earning-koii/running-task-nodes"
        rel="noreferrer noopener"
        target="_blank"
      >
        Task Nodes
      </a>
    </span>
    <span className="relative left-[8rem] xl:left-[44rem] hover:underline underline-offset-8">
      <a
        href="https://docs.koii.network/build-dapps-with-koii/using-nfts-as-content/create-nfts"
        rel="noreferrer noopener"
        target="_blank"
      >
        Drag & Drop NFTs
      </a>
    </span>
    <span className="relative left-[6rem] xl:left-[40rem] hover:underline underline-offset-8">
      <a
        href="https://docs.koii.network/earning-koii/attention-mining"
        rel="noreferrer noopener"
        target="_blank"
      >
        Proofs of Real Traffic
      </a>
    </span>
    <span className="relative left-[5rem] xl:left-[35rem] hover:underline underline-offset-8">
      <a
        href="https://docs.koii.network/microservices-and-tasks/gradual-consensus"
        rel="noreferrer noopener"
        target="_blank"
      >
        Gradual Consensus
      </a>
    </span>
    <span className="relative left-[3rem] xl:left-[27rem] hover:underline underline-offset-8">
      <a
        href="https://docs.koii.network/koii-summary/philosophy"
        rel="noreferrer noopener"
        target="_blank"
      >
        Revolutionary Community
      </a>
    </span>
  </div>
);
