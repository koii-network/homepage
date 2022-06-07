import { Button } from "@/components/ui/Button";
import { Partners } from "./components/partners";
import { PartnersBottom } from "./components/partnersBottom";
import { useMediaQuery } from "@/components/hooks";
import Image from "next/image";
import { HubspotFormLinks } from "config/links-config";

export const Pond = () => {
  const isBreakpoint = useMediaQuery(768);

  const lillyHeight = isBreakpoint ? 128 : 320;
  const lillyWidth = isBreakpoint ? 128 : 320;
  const boatHeight = isBreakpoint ? 128 : 400;
  const boatWidth = isBreakpoint ? 128 : 400;
  return (
    <div id="partners">
      <div className="flex justify-center item-center mb-30">
        <h2 className="text-[28px] mb-8 font-semibold leading-10 md:text-5xl text-center text-dark-blue md:leading-[72px]">
          Dive in, the pond is
          <br />
          filling fast.
        </h2>
      </div>

      <div className="relative pond">
        <div
          className={
            isBreakpoint
              ? `absolute left-[-20px] top-[110px]`
              : `absolute left-[-3%] top-[27%]`
          }
        >
          <Image
            src="/images/lilly.svg"
            width={lillyWidth}
            height={lillyHeight}
            alt={"lilly"}
          />
        </div>
        <div
          className={
            isBreakpoint
              ? `absolute right-[0px] top-[80px]`
              : `absolute right-[5%] top-[15%]`
          }
        >
          <Image
            src="/images/boat.svg"
            width={boatWidth}
            height={boatHeight}
            alt={"lilly"}
          />
        </div>
        <div className="pt-[120px]  lg:pt-[180px] lg:pb-[80px] xl:pt-[260px] container mx-auto">
          <div className="z-10 flex flex-col items-center justify-center ">
            <Partners />

            <div className="flex flex-col items-center mt-4 mb-7 ">
              <p className="text-lg font-semibold text-dark-blue">
                Just kidding...
              </p>
              <p className="flex text-lg font-normal text-center text-dark-blue">
                There’s room for everyone!
                <br className="md:hidden" /> Earn more for being early.
              </p>
            </div>

            {/**
             * @todo: Animate this section so it will pop in from bottom
             */}
            <div className="flex flex-col items-center justify-center mt-7 md:mt-0">
              <Button
                asLink
                href={HubspotFormLinks.PARTNERSHIP}
                className="px-6 w-[220px] py-3 mb-10 bg-white text-dark-blue rounded-[32px] drop-shadow-lg"
                label="Partner with Koii"
              />

              <PartnersBottom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
