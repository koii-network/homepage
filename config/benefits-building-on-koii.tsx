import One from "@/public/images/founders/1.svg";
import Two from "@/public/images/founders/2.svg";
import Three from "@/public/images/founders/3.svg";
import Four from "@/public/images/founders/4.svg";
import fish1 from "@/public/images/founders/fish-1.svg";
import fish2 from "@/public/images/founders/fish-2.svg";
import fish3 from "@/public/images/founders/fish-3.svg";
import fish4 from "@/public/images/founders/fish-4.svg";
import fish5 from "@/public/images/founders/fish-5.svg";
import fish6 from "@/public/images/founders/fish-6.svg";
import fish7 from "@/public/images/founders/fish-7.svg";
import fish8 from "@/public/images/founders/fish-8.svg";
import fish9 from "@/public/images/founders/fish-9.svg";

// for some reason Tailwind doesn't like the classes to be passed within benefits like benefits.[0].background === 'bg-mint',
// it treats it like it was being constructed on the fly even when the whole class is present there at buildtime (https://tailwindcss.com/docs/content-configuration#dynamic-class-names)
export enum COLORS {
  "mint" = "mint",
  "[#71d4bc]" = "[#71d4bc]",
  "[#79abc6]" = "[#79abc6]",
  "[#a4d59e]" = "[#a4d59e]",
}

export type ColorsMap = Record<
  COLORS,
  { background: `bg-${COLORS}`; border: `border-${COLORS}` }
>;

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
    color: COLORS.mint,
    image: One,
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
    color: COLORS["[#71d4bc]"],
    image: Two,
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
    color: COLORS["[#79abc6]"],
    image: Three,
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
    color: COLORS["[#a4d59e]"],
    image: Four,
  },
];

export const buoys = [
  {
    originalPosition: "top-[261px]",
    shiftedPosition: "top-[261px]",
  },
  {
    originalPosition: "top-[465px]",
    shiftedPosition: "top-[600px]",
  },
  {
    originalPosition: "top-[655px]",
    shiftedPosition: "top-[790px]",
  },
  {
    originalPosition: "top-[845px]",
    shiftedPosition: "top-[990px]",
  },
];

export const fishes = [
  {
    benefit: null,
    image: fish1,
    originalPosition: "top-[460px] left-16",
    shiftedPosition: "top-[460px] left-16",
  },
  {
    benefit: null,
    image: fish2,
    originalPosition: "top-[452px] left-60",
    shiftedPosition: "top-[452px] left-60",
  },
  {
    benefit: 2,
    image: fish3,
    originalPosition: "top-[660px] left-16",
    shiftedPosition: "top-[800px] left-16",
  },
  {
    benefit: 3,
    image: fish4,
    originalPosition: "top-[900px] -left-8",
    shiftedPosition: "top-[900px] -left-8",
  },
  {
    benefit: 4,
    image: fish5,
    originalPosition: "top-[1090px] left-14",
    shiftedPosition: "top-[1190px] left-14",
  },
  {
    benefit: 4,
    image: fish6,
    originalPosition: "top-[1390px] left-28",
    shiftedPosition: "top-[1300px] left-28",
  },
  {
    benefit: null,
    image: fish7,
    originalPosition: "top-[1420px] left-20",
    shiftedPosition: "top-[1380px] left-20",
  },
  {
    benefit: null,
    image: fish8,
    originalPosition: "top-[1390px] -left-2",
    shiftedPosition: "top-[1280px] -left-2",
  },
  {
    benefit: null,
    image: fish9,
    originalPosition: "top-[1644px] -left-12",
    shiftedPosition: "top-[1688px] -left-12",
  },
];
