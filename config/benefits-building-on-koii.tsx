import One from "@/public/images/founders/1.svg";
import Two from "@/public/images/founders/2.svg";
import Three from "@/public/images/founders/3.svg";
import Four from "@/public/images/founders/4.svg";

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
