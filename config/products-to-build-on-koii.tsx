import apps from "@/public/images/founders/apps.svg";
import decentralizedStorage from "@/public/images/founders/decentralized-storage.svg";
import websites from "@/public/images/founders/websites.svg";
import nfts from "@/public/images/founders/nfts.svg";
import tokens from "@/public/images/founders/tokens.svg";
import appsXl from "@/public/images/founders/apps-xl.svg";
import decentralizedStorageXl from "@/public/images/founders/decentralized-storage-xl.svg";
import nftsXl from "@/public/images/founders/nfts-xl.svg";
import tokensXl from "@/public/images/founders/tokens-xl.svg";

export const products = [
  {
    label: "CONTENT APPS",
    images: {
      small: apps,
      big: appsXl,
    },
    text: (
      <div className="flex flex-col gap-2">
        <p>
          Build apps designed for creators and content. Attention Rewards for
          creators AND the app are included by default.
        </p>
        <p>
          Pay for hosting with Attention Rewards—a.k.a. get free hosting—and let
          your community make decisions alongside you for truly decentralized
          apps.
        </p>
      </div>
    ),
    docsLink:
      "https://docs.koii.network/build-dapps-with-koii/welcome-to-koii-x",
  },
  {
    label: "INFRASTRUCTURE",
    images: {
      small: decentralizedStorage,
      big: decentralizedStorageXl,
    },
    text: (
      <div className="flex flex-col gap-2">
        <p>
          Koii makes it easy to build fully decentralized infrastructure without
          having to figure it all out yourself. That includes storage and
          hosting.
        </p>
        <p>
          Koii Nodes are faster and easier than traditional blockchains—pay only
          for the nodes you need.
        </p>
        <p>And you get to do it all in JavaScript.</p>
      </div>
    ),
    docsLink:
      "https://docs.koii.network/microservices-and-tasks/what-are-tasks",
  },
  {
    label: "WEBSITES",
    images: {
      small: websites,
      big: websites,
    },
    text: (
      <div className="flex flex-col gap-2">
        <p>
          Create community-driven websites that simply integrate with Web2 and
          have access to free hosting.
        </p>
        <p>
          Using Attention Rewards, you can incentivize your community to grow
          beyond what you previously thought possible.
        </p>
      </div>
    ),
    docsLink:
      "https://docs.koii.network/build-dapps-with-koii/welcome-to-koii-x",
  },
  {
    label: "NFTS",
    images: {
      small: nfts,
      big: nftsXl,
    },
    text: (
      <div className="flex flex-col gap-2">
        <p>
          Create NFTs that are governed by the owners and integrate directly
          with decentralized storage.
        </p>
        <p>
          Your NFTs can create long-term value from attention mining, be easily
          discovered on community leaderboards, and integrate with social media.
        </p>
        <p>Mint simply and manage your assets with Finnie.</p>
      </div>
    ),
    docsLink:
      "https://docs.koii.network/build-dapps-with-koii/using-nfts-as-content",
  },
  {
    label: "TOKENS",
    images: {
      small: tokens,
      big: tokensXl,
    },
    text: (
      <div className="flex flex-col gap-2">
        <p>Koii Nodes and lightning fast transactions make it easy to:</p>
        <ul className="list-disc" style={{ marginLeft: "24px" }}>
          <li>Create an attention-driven economy,</li>
          <li>Build oracle nodes for any purpose,</li>
          <li>Do fully decentralized token distributions,</li>
          <li>
            and Integrate hosting & content management directly into your
            tokenomics.
          </li>
        </ul>
      </div>
    ),
    docsLink:
      "https://docs.koii.network/settlement-layer/creating-tokens-on-k2",
  },
];
