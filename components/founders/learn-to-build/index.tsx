import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { products } from "@/config/products-to-build-on-koii";
import { useMediaQuery } from "@/components/hooks";
import { Product } from "./product";

export type ProductSelected = 0 | 1 | 2 | 3 | 4;

export const LearnToBuild = () => {
  const [topProduct, setTopProduct] = useState<ProductSelected>();
  const isMobile = useMediaQuery(1439);

  const handleHover = (featuredItem?: ProductSelected) => {
    if (!isMobile) {
      setTopProduct(featuredItem);
    }
  };

  const getIntersectionObserverOptions = (featuredItem?: ProductSelected) => ({
    threshold: 0,
    rootMargin: "-50% 0% -50% 0%",
    onChange: (inView: boolean) => {
      if (inView) {
        handleHover(featuredItem);
      }
    },
  });

  const { ref: titleRef } = useInView(
    getIntersectionObserverOptions(undefined)
  );
  const { ref: firstProductRef } = useInView(getIntersectionObserverOptions(0));
  const { ref: secondProductRef } = useInView(
    getIntersectionObserverOptions(1)
  );
  const { ref: thirdProductRef } = useInView(getIntersectionObserverOptions(2));
  const { ref: fourthProductRef } = useInView(
    getIntersectionObserverOptions(3)
  );
  const { ref: fifthProductRef } = useInView(getIntersectionObserverOptions(4));

  const baseReferenceClasses = "invisible h-[8vh] w-full absolute";
  const scrollReferencesToProducts = [
    { classes: `${baseReferenceClasses} top-[40vh]`, ref: firstProductRef },
    { classes: `${baseReferenceClasses} top-[48vh]`, ref: secondProductRef },
    { classes: `${baseReferenceClasses} top-[56vh]`, ref: thirdProductRef },
    { classes: `${baseReferenceClasses} top-[64vh]`, ref: fourthProductRef },
    { classes: `${baseReferenceClasses} top-[72vh]`, ref: fifthProductRef },
  ];

  return (
    <div className="relative flex flex-col items-center gap-20 pt-16 text-purple text-center font-medium bg-[#1e1d5a] lg:bg-[#191854]">
      {scrollReferencesToProducts.map(({ classes, ref }) => (
        <div key={classes} className={classes} ref={ref} />
      ))}

      <div
        ref={titleRef}
        className="text-2xl text-lightmint tracking-tighter lg:text-white  lg:text-4xl lg:leading-48px lg:tracking-normal"
      >
        Community Ownership & Governance:
        <br />
        The future is in your hands.
      </div>
      <div className="lg:pt-56 pb-[620px] bg-products lg:bg-products-xl bg-no-repeat bg-cover lg:flex w-full lg:flex-col lg:px-8">
        <div
          className={`lg:max-w-screen-xl w-full flex flex-col lg:flex-row lg:mx-auto gap-16 transition-all ease-in-out duration-700 ${
            topProduct === undefined ? "-mt-[248px] lg:-mt-[336px]" : ""
          }`}
        >
          {products.map(({ label, images, text }, index) => (
            <div
              key={label}
              className={`w-full flex flex-col transition-all ease-in-out duration-1000 ${
                topProduct === index
                  ? "absolute top-[488px] left-0"
                  : "relative top-96"
              }`}
            >
              <Product
                label={label}
                images={images}
                text={text}
                side={index % 2 ? "right" : "left"}
                isSelected={topProduct === index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
