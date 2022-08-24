import { useMediaQuery } from "@/components/hooks";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { HubspotFormLinks } from "config/links-config";

export const Howitwork = () => {
  const isBreakpoint = useMediaQuery(1439);
  return (
    <div
      className={`heroabout container lg:h-[740px] lg:pt-[120px] relative z-10`}
    >
      <div className="px-[40px] lg:px-[120px]">
        <div className="flex flex-col">
          <div className="title text-[26px] lg:text-[40px] font-semibold">
            How it works.
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="subtitle text-[14px] lg:text-[16px] lg:max-w-[585px] pt-[20px] lg:pt-[30px]">
              <p>
                Nearly every person in the world has a computer, an internet
                connection, and an online presence.{" "}
              </p>
              <p className="pt-[10px]">
                Koii allows everyone to earn passive income not only from
                posting online, but by connecting idle personal devices to back
                transparent apps and audit systems to ensure fair operation.
              </p>

              {isBreakpoint ? (
                <div className="how_image py-[70px] px-[30px] md:pl-[95px] md:pr-[30px]">
                  <Image
                    src="/images/about/how_work.svg"
                    alt="how_it_works"
                    width={398}
                    height={372}
                  />
                </div>
              ) : (
                ""
              )}

              <div className="buttton lg:pt-[42px] flex justify-center lg:justify-start">
                <Button
                  width="221px"
                  height="53px"
                  asLink
                  href={HubspotFormLinks.NODE_PREREGISTER}
                  className="px-6 py-3 w-[190px] bg-koiiblue text-white text-normal rounded-[32px] drop-shadow-lg"
                  label="Run a Node"
                />
              </div>
            </div>
            {isBreakpoint ? (
              ""
            ) : (
              <div className="how_image lg:p-[30px]">
                <Image
                  src="/images/about/how_work.svg"
                  alt="how_it_works"
                  width={398}
                  height={372}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
