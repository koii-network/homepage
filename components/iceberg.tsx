import styles from "/styles/home.module.css";
import icebergbot from "public/images/icebergbot.svg";
import fishstream from "/public/images/fish-stream_desktop.svg";
import Image from "next/image";

export const Iceberg = () => {
  return (
    <div className={`${styles.Iceberg} md:h-[1515px]`}>
      <div className="mix-blend-hard-light Icebergtop absolute top-0 md:top-0 right-[-5rem] md:right-0 w-[339px] md:w-[535px] h-[395px] md:h-[617px]">
        <Image
          className=" "
          src={icebergbot}
          alt="icebergtop"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="2021list grid relative text-center grid-cols-1 gap-y-10 md:text-xl w-fit text-koiiblue py-12 z-20">
        <div className="list-title text-left md:text-right relative left-[2rem] md:left-[30rem]">
          <span className="text-xl md:text-3xl font-semibold">2021</span>
          <br />
          <span className="text-base">Click for details</span>
        </div>
        <span className="relative left-[3rem] md:left-[35rem] hover:underline underline-offset-8">
          <a href="https://koii.network/DID">Decentralized Identity</a>
        </span>
        <span className="relative left-[6rem] md:left-[35rem] hover:underline underline-offset-8">
          <a href="https://docs.koii.network/koii-software-toolkit-sdk/what-is-the-koii-sdk">
            Near-Instant Transactions
          </a>
        </span>
        <span className="relative left-[7rem] md:left-[37rem] hover:underline underline-offset-8">
          <a href="https://docs.koii.network/earning-koii/attention-mining">
            Trustless Attention Tracking
          </a>
        </span>
        <span className="relative left-[8rem] md:left-[40rem] hover:underline underline-offset-8">
          <a href="https://docs.koii.network/build-dapps-with-koii/template-library">
            Koii-X UI Templates
          </a>
        </span>
        <span className="relative left-[10rem] md:left-[47rem] hover:underline underline-offset-8">
          <a href="https://docs.koii.network/earning-koii/running-task-nodes">
            Task Nodes
          </a>
        </span>
        <span className="relative left-[8rem] md:left-[44rem] hover:underline underline-offset-8">
          <a href="https://docs.koii.network/build-dapps-with-koii/using-nfts-as-content/create-nfts">
            Drag & Drop NFTs
          </a>
        </span>
        <span className="relative left-[6rem] md:left-[40rem] hover:underline underline-offset-8">
          <a href="https://docs.koii.network/#the-koii-token">
            Proofs of Real Traffic
          </a>
        </span>
        <span className="relative left-[5rem] md:left-[35rem] hover:underline underline-offset-8">
          <a href="https://docs.koii.network/microservices-and-tasks/gradual-consensus">
            Gradual Consensus
          </a>
        </span>
        <span className="relative left-[3rem] md:left-[27rem] hover:underline underline-offset-8">
          <a href="https://discord.gg/koii">Revolutionary Community</a>
        </span>
      </div>
      <svg
        viewBox="0 0 1448 399"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0"
      >
        <mask
          id="mask0_2209_3498"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1448"
          height="399"
        >
          <rect width="1448" height="399" fill="#D9D9D9" />
        </mask>
        <g>
          <path
            d="M253.567 124.489C216.199 72.4935 68.9526 21.1649 0.000236729 2L0 1201H1448L1448 251.977C1194.43 226.979 1081 306.972 827.429 314.471C573.862 321.97 493.788 244.478 387.023 226.979C280.258 209.481 300.277 189.483 253.567 124.489Z"
            fill="#171753"
          />
          <path
            d="M916.042 294.414C920.436 289.201 924.743 284.091 929.124 278.904C929.841 280.57 930.12 282.223 930.299 283.893C930.769 288.352 930.391 292.741 929.451 297.114C928.98 299.313 928.318 301.45 927.572 303.766L924.922 299.429C923.811 301.139 922.739 302.763 921.583 304.333C915.442 312.625 907.114 317.193 896.876 318.62C890.544 319.505 884.163 319.657 877.795 320.026C876.716 320.088 875.637 320.148 874.559 320.215C874.245 320.235 873.983 320.224 873.712 319.979C869.436 316.118 864.976 312.459 860.777 308.513C857.051 305.01 853.588 301.291 850.998 296.854C847.749 291.291 846.454 285.267 846.48 278.926C846.487 276.782 846.674 274.653 846.895 272.413L842.107 274.193C845.077 266.06 848.999 258.809 856.058 253.696L856.285 253.812L856.962 273.973C855.854 273.59 854.843 273.283 853.868 272.887C853.201 272.617 853.087 272.878 853.05 273.456C852.869 276.32 853.381 279.191 854.542 281.83C856.136 285.56 858.442 288.758 861.859 291.069C866.93 294.497 872.253 293.858 876.353 289.373C878.947 286.534 880.588 283.16 881.888 279.596C885.018 271.018 888.15 262.441 891.283 253.865C893.644 247.403 896.002 240.941 898.392 234.491C898.595 233.941 898.363 233.864 897.955 233.724C892.878 231.966 887.805 230.197 882.714 228.47C882.017 228.229 881.919 227.966 882.181 227.339C882.536 226.49 882.807 225.612 883.093 224.739C883.209 224.403 883.363 224.325 883.717 224.414C888.197 225.544 892.678 226.664 897.161 227.774C898.087 228.004 899.022 228.203 899.944 228.449C900.307 228.548 900.499 228.497 900.652 228.129C901.472 226.177 902.309 224.233 903.164 222.297C903.312 221.959 903.235 221.766 902.991 221.505C899.56 217.813 898.743 213.574 900.765 209.09C902.892 204.37 907.517 202.022 912.486 202.808C918.974 203.835 923.003 209.577 921.869 215.976C921.084 220.403 917.186 224.075 912.576 224.683C912.003 224.759 911.754 224.944 911.615 225.51C911.151 227.417 910.638 229.313 910.102 231.201C909.963 231.688 910.042 231.905 910.528 232.12C915.149 234.177 919.753 236.271 924.37 238.335C926.103 239.11 926.112 239.087 925.506 240.834C925.33 241.34 925.123 241.836 924.99 242.357C924.857 242.878 924.637 242.968 924.12 242.783C921.739 241.929 919.342 241.115 916.947 240.286C914.188 239.33 911.427 238.383 908.674 237.412C908.257 237.268 908.068 237.267 907.914 237.75C905.157 246.214 902.387 254.674 899.606 263.13C897.271 270.26 894.913 277.374 892.632 284.518C891.524 287.983 890.895 291.543 891.352 295.214C891.805 298.818 893.371 301.771 896.729 303.523C899.009 304.709 901.48 305.056 904.017 304.827C909.774 304.309 914.663 302.061 918.461 297.697C918.829 297.275 919.142 296.808 919.476 296.358C919.781 295.952 919.796 295.68 919.198 295.5C918.175 295.195 917.168 294.804 916.042 294.414ZM912.857 208.353C909.965 207.306 906.671 208.611 905.51 211.498C905.213 212.217 905.067 212.99 905.08 213.769C905.093 214.549 905.266 215.318 905.587 216.032C905.908 216.746 906.372 217.389 906.95 217.922C907.528 218.456 908.208 218.868 908.949 219.136C911.895 220.237 915.222 218.705 916.369 215.711C917.478 212.835 915.874 209.472 912.857 208.353Z"
            fill="#171753"
          />
        </g>
      </svg>
      <div className="fishstream relative w-[1300px] h-[500px] md:right-0 md:top-[-10rem] z-10 ml-[-57rem] md:ml-14">
        <Image
          className=""
          src={fishstream}
          alt="fishstream"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};