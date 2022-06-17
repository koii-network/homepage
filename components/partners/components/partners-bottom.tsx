// eslint-disable-next-line no-restricted-imports
import { useMediaQuery } from "@/components/hooks/mediaQuery";

// eslint-disable-next-line no-restricted-imports
import { partnersBottom } from "@/config/partners-links";
import { Iconlink } from "./IconLink";

export const PartnersBottom = () => {
  const isLgBreakpoint = useMediaQuery(1024);
  const isMdBreakpoint = useMediaQuery(768);

  const getIconSize = () => {
    if (isMdBreakpoint) {
      return 32;
    }
    if (isLgBreakpoint) {
      return 48;
    }
    return 58;
  };

  const iconSize = getIconSize();

  return (
    <>
      <div className="flex flex-wrap justify-center w-[90%] mb-8 gap-3 max-w-[976px] md:w-[70%] md:gap-2">
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
