import Image from "next/image";
import { useMediaQuery } from "@/components/hooks";
import { Button } from "@/components/ui/Button";
import { Bubble } from "./Bubble";

export const GrantProgram = () => {
  const isBreakpoint = useMediaQuery(768);
  return (
    <section className="grant-program h-[920px] md:h-[696px]">
      <div className="flex flex-row max-w-[1140px] md:mx-auto justify-between">
        <div className="flex flex-col items-center justify-center md:items-start">
          <div className="mb-20">
            {isBreakpoint ? (
              <h2 className="text-2xl leading-[48px] pt-28 px-12 text-white text-center pb-3">
                How will you change the world?
              </h2>
            ) : (
              <h2 className="text-4xl leading-[48px] pt-28 text-white pb-3">
                How will you
                <br />
                change the world?
              </h2>
            )}
            <p className="text-sm text-center text-white md:text-left">
              Get in on Koii’s
            </p>
            <p className="text-2xl text-center text-gold md:text-left">
              $1M Grant Program
            </p>
          </div>

          <div className="mt-[400px] md:mt-0">
            <Button
              width="190px"
              height="53px"
              asLink
              target="_blank"
              href="https://koii.network/form/grant/"
              className="px-6 py-3 w-[190px] bg-white text-dark-blue text-normal rounded-[32px] drop-shadow-lg"
              label="Apply Now"
            />
          </div>
        </div>

        <div className="relative bubbles">
          <div className="absolute right-[30px] z-20 w-10 h-10 top-[80px]">
            <Image
              src="/images/bubble-small.svg"
              alt=""
              width={38}
              height={38}
            />
          </div>
          <div className="absolute right-[246px] z-20 w-10 h-10 top-[340px]">
            <Image
              src="/images/bubble-outlined.svg"
              alt=""
              width={30}
              height={30}
            />
          </div>
          <div className="absolute right-[160px] z-20 w-10 h-10 top-[430px]">
            <Image
              src="/images/bubble-outlined.svg"
              alt=""
              width={19}
              height={19}
            />
          </div>
          <div className="absolute right-[460px] z-20 w-10 h-10 top-[390px]">
            <Image
              src="/images/bubble-outlined.svg"
              alt=""
              width={19}
              height={19}
            />
          </div>
          <div className="absolute right-[430px] z-20 w-10 h-10 top-[300px]">
            <Image
              src="/images/bubble-outlined.svg"
              alt=""
              width={19}
              height={19}
            />
          </div>

          {isBreakpoint ? (
            <div>
              <div className="absolute top-[260px] right-[160px]">
                <Bubble
                  width={200}
                  height={200}
                  text={"Community Governed Social Media"}
                />
              </div>
              <div className="absolute top-[360px] right-[0px]">
                <Bubble
                  width={200}
                  height={200}
                  text={"Transparent Ad Networks"}
                />
              </div>

              <div className="absolute top-[460px] right-[150px]">
                <Bubble
                  width={180}
                  height={180}
                  text={"Search Without Serfdom"}
                />
              </div>

              <div className="absolute top-[560px] right-[40px]">
                <Bubble width={135} height={135} text={"And more"} />
              </div>
            </div>
          ) : (
            <div>
              <div className="absolute top-[60px] right-[240px]">
                <Bubble
                  width={280}
                  height={280}
                  text={"Community Governed Social Media"}
                />
              </div>
              <div className="absolute top-[140px] right-[0px]">
                <Bubble
                  width={280}
                  height={280}
                  text={"Transparent Ad Networks"}
                />
              </div>

              <div className="absolute top-[340px] right-[240px]">
                <Bubble
                  width={223}
                  height={223}
                  text={"Search Without Serfdom"}
                />
              </div>

              <div className="absolute top-[450px] right-[0px]">
                <Bubble width={175} height={175} text={"And more"} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
