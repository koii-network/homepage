import { Product } from "./product";
import { products } from "@/config/products-to-build-on-koii";

export const LearnToBuild = () => (
  <div className="relative flex flex-col items-center gap-10 -mt-48 bg-lightmint pt-32 pb-96 rounded-t-full text-purple text-center font-medium">
    <h3 className="text-2xl">
      Community Ownership & Governance:
      <br />
      The future is in your hands.
    </h3>

    <p className="text-">LEARN TO BUILD:</p>
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
