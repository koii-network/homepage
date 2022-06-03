import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Bubble } from "./Bubble";
import Link from "next/link";

export const GrantProgram = () => {
  return (
    <section className="grant-program h-[696px]">
      <div className="flex flex-row max-w-[1140px] md:mx-auto justify-between">
        <div className="flex flex-col">
          <div className="mb-20">
            <h2 className="text-4xl leading-[48px] pt-28 text-white pb-3">
              How will you
              <br />
              change the world?
            </h2>
            <p className="text-sm text-white">Get in on Koii’s</p>
            <p className="text-2xl text-gold">$1M Grant Program</p>
          </div>
          <div>
            <Link href="https://koii.network/form/grant/">
              <a>
                <Button
                  className="px-6 py-3 w-[190px] bg-white text-dark-blue text-normal rounded-[32px] drop-shadow-lg"
                  label="Apply Now"
                />
              </a>
            </Link>
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
          <div className="absolute top-[60px] right-[240px]">
            <Bubble
              width={280}
              height={280}
              text={"Community Governed Social Media"}
            />
          </div>
          <div className="absolute top-[140px] right-[0px]">
            <Bubble width={280} height={280} text={"Transparent Ad Networks"} />
          </div>

          <div className="absolute top-[340px] right-[240px]">
            <Bubble width={223} height={223} text={"Search Without Serfdom"} />
          </div>

          <div className="absolute top-[450px] right-[0px]">
            <Bubble width={175} height={175} text={"And more"} />
          </div>
        </div>
      </div>
    </section>
  );
};
