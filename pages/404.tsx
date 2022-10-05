import React from "react";
import { Button } from "@/components/ui/Button";

export default function FourOhFour() {
  return (
    <div className={`heroearn pt-[4rem] lg:pt-[60px]`}>
      <div
        className={`h-[1082px] lg:h-[525px] relative z-10`}
        style={{
          background: `linear-gradient(90deg, #BEF0ED 0%, #FFFFFF 100%);`,
        }}
      >
        <div className="container ">
          <div className="flex flex-col pt-[8rem] lg:pt-[4rem] lg:pl-[5rem] ">
            <div className="text-koiiblue font-semibold md:font-normal text-[30px] md:text-[44px] lg:text-[50px] w-[300px] lg:w-[587px]">
              404 Page Not Found
            </div>
            <div className="text-koiiblue text-[18px] md:text-[20px] lg:text-[24px] md:w-[400px] lg:w-[455px] w-[280px] pt-[30px]">
              The Page you are looking for doesn&apos;t exist or an other error
              occurred.
            </div>
            <div className="w-fit">
              <Button
                width="221px"
                height="40px"
                asLink
                href="/"
                className="px-6 py-3 w-[190px] bg-[#9BE7C4] text-koiiblue text-normal rounded-[32px] drop-shadow-lg mt-[3rem]"
                label="Back Home"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
