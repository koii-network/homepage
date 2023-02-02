import oneLight from "@/public/images/founders/1-light.svg";
import twoLight from "@/public/images/founders/2-light.svg";
import threeLight from "@/public/images/founders/3-light.svg";
import fourLight from "@/public/images/founders/4-light.svg";
import oneDark from "@/public/images/founders/1-dark.svg";
import twoDark from "@/public/images/founders/2-dark.svg";
import threeDark from "@/public/images/founders/3-dark.svg";
import fourDark from "@/public/images/founders/4-dark.svg";

export const benefits = [
  {
    label: "Iterate Quickly in JavaScript",
    text: (
      <div className="flex flex-col gap-2">
        <p>
          Save big time and money building your team with the 15M+ JavaScript
          developers worldwide, compared to 200K Solidity devs.
        </p>
        <p>Speed up time between deployments with easy, pre-made Koii Tasks.</p>
      </div>
    ),
    images: { light: oneLight, dark: oneDark },
  },
  {
    label: "Go Beyond Smart Contracts",
    text: (
      <div className="flex flex-col gap-2">
        <p>Don’t mess around with smart contracts in Rust or Solidity.</p>
        <p>
          Plus, save money on storage & processing costs, and never worry about
          limited transaction bandwidth.
        </p>
      </div>
    ),
    images: { light: twoLight, dark: twoDark },
  },
  {
    label: "Scale Quickly",
    text: (
      <div className="flex flex-col gap-2">
        <p>
          Koii is sharded by default. That means you only use the Nodes you need
          for your Tasks.
        </p>
        <p>Don’t duplicate work and still get all the nodes you need.</p>
      </div>
    ),
    images: { light: threeLight, dark: threeDark },
  },
  {
    label: "Easily Integrate with Web2",
    text: (
      <div className="flex flex-col gap-2">
        <p>
          Koii Nodes interact easily with Web2 servers, so you can upgrade one
          step at a time or flow between communities.
        </p>
        <p>Do what’s best for your project at the right time.</p>
      </div>
    ),
    images: { light: fourLight, dark: fourDark },
  },
];
