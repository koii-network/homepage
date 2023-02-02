import { useState, ReactNode } from "react";
import { Product } from "./product";
import { products } from "@/config/products-to-build-on-koii";
import { useMediaQuery } from "@/components/hooks";
import Image, { StaticImageData } from "next/image";

interface ProductProps {
  label: string;
  image: StaticImageData;
  imageXl: StaticImageData;
  text: ReactNode;
}

export const LearnToBuild = () => {
  const [topProduct, setTopProduct] = useState<ProductProps>();
  const [bottomProducts, setBottomProducts] = useState(products);
  const isBreakpoint = useMediaQuery(1024);


  const handleHover = (hoverItem: ProductProps) => {
    if (!isBreakpoint) {
      const filteredProducts = products.filter((item) => {
        return item.label !== hoverItem.label;
      });
      setBottomProducts(filteredProducts);
      setTopProduct(hoverItem);
    }
  };

  return (
    <div className="flex flex-col items-center gap-20 pt-16 text-purple text-center font-medium bg-[#1e1d5a] xl:bg-[#171753]">
      <h3 className="text-2xl text-lightmint tracking-tighter lg:text-white  lg:text-4xl lg:leading-48px lg:tracking-normal">
        Community Ownership & Governance:
        <br />
        The future is in your hands.
      </h3>
      <div className="pt-56 pb-80 bg-products lg:bg-products-xl bg-no-repeat bg-cover lg:flex w-full lg:flex-col lg:px-8 xl:pt-80">
        {topProduct && !isBreakpoint && (
          <div className="max-w-[891px] w-full flex justify-between mx-auto pb-10 -mt-20 xl:-mt-12 animate-[product_5s_ease-in_2]">
            <Image
              alt="Content Apps"
              className="transition-all ease-in-out duration-500"
              src={topProduct.imageXl}
            />
            <div className="flex flex-col">
              <div className="text-white py-5 w-48 whitespace-nowrap bg-dark-green rounded-full">
                {topProduct.label}
              </div>
              <p className="w-[424px] mt-10 text-left text-base">
                {topProduct.text}
              </p>
            </div>
          </div>
        )}
        <div className="lg:max-w-screen-xl w-full lg:flex lg:mx-auto lg:gap-16">
          {bottomProducts.map(({ label, image, text, imageXl }, index) => (
            <div
              key={label}
              className="w-full flex flex-col"
              onClick={(e) => handleHover({ label, image, text, imageXl })}
            >
              <Product
                label={label}
                image={image}
                text={text}
                side={index % 2 ? "right" : "left"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
