import { Product } from "./product";
import { products } from "@/config/products-to-build-on-koii";

export const LearnToBuild = () => (
  <div className="relative flex flex-col items-center bg-white pb-96 text-center font-medium text-purple">
    <h3 className="section-bottom-transition md:section-bottom-transition-desktop mb-12 h-64 w-full bg-[#1e1d5a] text-2xl text-lightmint lg:bg-[#191854] lg:text-[40px] lg:text-white">
      Community Ownership & Governance:
      <br />
      The future is in your hands.
    </h3>

    {products.map(({ label, image, text }, index) => (
      <Product
        key={label}
        label={label}
        image={image}
        text={text}
        side={index % 2 ? "right" : "left"}
      />
    ))}
  </div>
);
