import styles from "/styles/home.module.css";
import fishstream from "/public/images/fish-stream_desktop.svg";
import anchor from "/public/images/anchor.svg";
import Image from "next/image";

export const Iceberg = () => {
  return (
    <div className={`${styles.Iceberg} h-[900px] md:h-[1485px]`}>
      <div className="2021list grid relative text-center grid-cols-1 gap-y-10 text-xl w-fit text-koiiblue py-12 z-20">
        <div className="list-title text-right relative left-[30rem]">
          <span className="text-3xl font-semibold">2021</span>
          <br />
          <span className="text-base">Click for details</span>
        </div>
        <span className="relative left-[35rem] hover:underline underline-offset-8">
          <a href="https://koii.network/DID">Decentralized Identity</a>
        </span>
        <span className="relative left-[35rem] hover:underline underline-offset-8">
          <a href="https://docs.koii.network/koii-software-toolkit-sdk/what-is-the-koii-sdk">
            Near-Instant Transactions
          </a>
        </span>
        <span className="relative left-[37rem] hover:underline underline-offset-8">
          <a href="https://docs.koii.network/earning-koii/attention-mining">
            Trustless Attention Tracking
          </a>
        </span>
        <span className="relative left-[40rem] hover:underline underline-offset-8">
          <a href="https://docs.koii.network/build-dapps-with-koii/template-library">
            Koii-X UI Templates
          </a>
        </span>
        <span className="relative left-[47rem] hover:underline underline-offset-8">
          <a href="https://docs.koii.network/earning-koii/running-task-nodes">
            Task Nodes
          </a>
        </span>
        <span className="relative left-[44rem] hover:underline underline-offset-8">
          <a href="https://docs.koii.network/build-dapps-with-koii/using-nfts-as-content/create-nfts">
            Drag & Drop NFTs
          </a>
        </span>
        <span className="relative left-[40rem] hover:underline underline-offset-8">
          <a href="https://docs.koii.network/#the-koii-token">
            Proofs of Real Traffic
          </a>
        </span>
        <span className="relative left-[35rem] hover:underline underline-offset-8">
          <a href="https://docs.koii.network/microservices-and-tasks/gradual-consensus">
            Gradual Consensus
          </a>
        </span>
        <span className="relative left-[27rem] hover:underline underline-offset-8">
          <a href="https://discord.gg/koii">Revolutionary Community</a>
        </span>
      </div>
      <div className="fisharea relative">
        <div className="fishstream absolute w-[1300px] h-[500px] right-0 top-[-10rem] z-10">
          <Image
            className=""
            src={fishstream}
            alt="fishstream"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};
