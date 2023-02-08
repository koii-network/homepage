import { useMediaQuery } from "@/components/hooks";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const Howitwork = () => {
  const isBreakpoint = useMediaQuery(1439);
  return (
    <div
      className={`heroabout container xl:h-[740px] xl:pt-[120px] relative z-10`}
    >
      <div className="px-[40px] xl:px-[120px]">
        <div className="flex flex-col">
          <div className="title text-[26px] xl:text-[40px] font-semibold">
            How it works.
          </div>
          <div className="flex flex-col xl:flex-row">
            <div className="subtitle text-[14px] xl:text-[16px] xl:max-w-[585px] pt-[20px] xl:pt-[30px]">
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

              <div className="buttton xl:pt-[42px] flex justify-center xl:justify-start">
                <Button
                  width="221px"
                  height="53px"
                  asLink
                  href="/node"
                  className="px-6 py-3 w-[190px] bg-koiiblue text-white text-normal rounded-[32px] drop-shadow-lg"
                  label="Run a Node"
                />
              </div>
            </div>
            {isBreakpoint ? (
              ""
            ) : (
              <div className="how_image xl:p-[30px]">
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
