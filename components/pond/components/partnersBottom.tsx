// eslint-disable-next-line no-restricted-imports
import { useMediaQuery } from "@/components/hooks/mediaQuery";

// eslint-disable-next-line no-restricted-imports
import { partnersBottom } from "../linksConfig";
import { Iconlink } from "./IconLink";

export const PartnersBottom = () => {
  const isBreakpoint = useMediaQuery(768);

  const iconSize = isBreakpoint ? 32 : 64;

  return (
    <>
      <div className="flex flex-wrap justify-center w-[90%] mb-8 gap-3 md:w-[75%] md:gap-4">
        {partnersBottom.map(({ name, iconSrc, url }) => (
          <Iconlink
            width={iconSize}
            height={iconSize}
            url={url}
            iconSource={iconSrc}
            key={name}
          />
        ))}
      </div>
    </>
  );
};
