// eslint-disable-next-line no-restricted-imports
import { useMediaQuery } from "@/components/hooks";
import { partnersLinks } from "@/config/partners-links";

import { Iconlink } from "./IconLink";

export const PartnersList = () => {
  const isLgBreakpoint = useMediaQuery(1024);

  const iconSize = isLgBreakpoint ? 64 : 72;

  return (
    <>
      <div className="flex z-40 flex-wrap justify-center w-[90%] md:w-[480px] lg:w-[670px] md:gap-2 lg:gap-4 lg:gap-4 xl:gap-x-10 mb-[30px] md:mb-[30px]  lg:mb-[68px]">
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
    </>
  );
};
