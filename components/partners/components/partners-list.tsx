// eslint-disable-next-line no-restricted-imports
import { useMediaQuery } from "@/components/hooks";
import { partnersLinks } from "@/config/partners-links";
import { partnersFirstRow } from "@/config/partners-links";
import { partnersSecondtRow } from "@/config/partners-links";

import { Iconlink } from "./IconLink";

export const PartnersList = () => {
  const isLgBreakpoint = useMediaQuery(1024);

  const iconSize = isLgBreakpoint ? 64 : 72;

  return (
    <>
      {isLgBreakpoint ? (
        <div className="flex z-40 flex-wrap justify-center w-[90%] md:w-[480px] lg:w-[670px] md:gap-2 lg:gap-4 lg:gap-4 xl:gap-x-10 mb-[10px] md:mb-[20px]  lg:mb-[30px]">
          {partnersLinks.map(({ name, iconSrc, url }) => (
            <Iconlink
              url={url}
              iconSource={iconSrc}
              key={name}
              width={iconSize}
              height={iconSize}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex z-40 flex-wrap justify-center w-[90%] md:w-[480px] lg:w-[670px] md:gap-2 lg:gap-4 lg:gap-4 xl:gap-x-10 mb-[10px] md:mb-[20px]  lg:mb-[30px]">
            {partnersFirstRow.map(({ name, iconSrc, url }) => (
              <Iconlink
                url={url}
                iconSource={iconSrc}
                key={name}
                width={iconSize}
                height={iconSize}
              />
            ))}
          </div>
          <div className="flex z-40 flex-wrap justify-center w-[90%] md:w-[640px] lg:w-[770px] md:gap-2 lg:gap-4 lg:gap-4 xl:gap-x-4 mb-[30px] md:mb-[30px]  lg:mb-[68px]">
            {partnersSecondtRow.map(({ name, iconSrc, url }) => (
              <Iconlink
                url={url}
                iconSource={iconSrc}
                key={name}
                width={iconSize}
                height={iconSize}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
