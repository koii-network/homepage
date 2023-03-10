import { useState } from "react";
// import { useInView } from "react-intersection-observer";
import { products } from "@/config/products-to-build-on-koii";
import type { Props } from "./product";
import { Product } from "./product";

// export type ProductSelected = 0 | 1 | 2 | 3 | 4;

export const LearnToBuild = () => {
  const [topProduct, setTopProduct] = useState<Props>(products[0]);

  // const getIntersectionObserverOptions = (featuredItem?: ProductSelected) => ({
  //   threshold: 0,
  //   rootMargin: "-50% 0% -50% 0%",
  //   onChange: (inView: boolean) => {
  //     if (inView) {
  //       handleHover(featuredItem);
  //     }
  //   },
  // });

  // const { ref: titleRef } = useInView(
  //   getIntersectionObserverOptions(undefined)
  // );
  // const { ref: firstProductRef } = useInView(getIntersectionObserverOptions(0));
  // const { ref: secondProductRef } = useInView(
  //   getIntersectionObserverOptions(1)
  // );
  // const { ref: thirdProductRef } = useInView(getIntersectionObserverOptions(2));
  // const { ref: fourthProductRef } = useInView(
  //   getIntersectionObserverOptions(3)
  // );
  // const { ref: fifthProductRef } = useInView(getIntersectionObserverOptions(4));

  // const baseReferenceClasses = "invisible h-[8vh] w-full absolute";
  // const scrollReferencesToProducts = [
  //   { classes: `${baseReferenceClasses} top-[40vh]`, ref: firstProductRef },
  //   { classes: `${baseReferenceClasses} top-[48vh]`, ref: secondProductRef },
  //   { classes: `${baseReferenceClasses} top-[56vh]`, ref: thirdProductRef },
  //   { classes: `${baseReferenceClasses} top-[64vh]`, ref: fourthProductRef },
  //   { classes: `${baseReferenceClasses} top-[72vh]`, ref: fifthProductRef },
  // ];

  return (
    <div className="relative flex flex-col items-center gap-20 bg-[#1e1d5a] pt-16 text-center font-medium text-purple lg:bg-[#191854]">
      <div className="lg:leading-48px text-2xl tracking-tighter text-lightmint lg:tracking-normal lg:text-white xl:-mb-48 xl:text-4xl">
        Community Ownership & Governance:
        <br />
        The future is in your hands.
      </div>
      <div className="flex w-full flex-col bg-products bg-cover bg-no-repeat pt-40 pb-[280px] lg:px-8 lg:pt-0 xl:bg-products-xl xl:pt-[340px]">
        <div className="hidden lg:mt-7 lg:flex xl:-mt-24">
          <Product
            label={topProduct.label}
            images={topProduct.images}
            text={topProduct.text}
            isSelected
            docsLink={topProduct.docsLink}
          />
        </div>

        <div className="flex w-full flex-col gap-16 transition-all duration-700 ease-in-out lg:mx-auto lg:max-w-5xl lg:gap-4 xl:max-w-screen-xl lg:flex-row">
          {products.map(({ label, images, text, docsLink }, index) => (
            <div
              key={label}
              className="flex w-full flex-col transition-all duration-500 ease-in-out lg:flex-1 lg:basis-[28%] lg:cursor-pointer lg:hover:scale-105 xl:basis-48"
              onMouseEnter={() =>
                setTopProduct({ label, images, text, docsLink })
              }
              onClick={() => setTopProduct({ label, images, text, docsLink })}
            >
              <Product
                label={label}
                images={images}
                text={text}
                side={index % 2 ? "right" : "left"}
                docsLink={docsLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
