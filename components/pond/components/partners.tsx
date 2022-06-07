// eslint-disable-next-line no-restricted-imports
import { partnersLinks } from "../linksConfig";
import { Iconlink } from "./IconLink";

export const Partners = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center w-[90%] md:w-[60%] gap-2 md:gap-4 mb-[84px] pt-[20px] sm:pt-[80px] md:pt-[120px] lg:pt-[200px] xl:pt-[200px]">
        {partnersLinks.map(({ name, iconSrc, url }) => (
          <Iconlink
            url={url}
            iconSource={iconSrc}
            key={name}
            width={96}
            height={96}
          />
        ))}
      </div>
    </>
  );
};
