import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { getDiscordDocsLinks } from "@/config/links-config";

export const DiscordAndDocs = () => {
  return (
    <div className="pt-32 pb-[120px] w-full bg-lightmint flex justify-center lg:pb-32 lg:pt-28">
      <div className="max-auto w-full px-8 flex flex-col lg:flex-row lg:gap-10 lg:max-w-6xl">
        <div className="w-full lg:max-w-xs lg:flex lg:flex-col lg:items-start">
          <p className="text-koiipurpledark font-sans font-semibold text-xl leading-5 text-center lg:text-start">
            Jump in our Discord to say hello and chat with other powerhouse
            people.
          </p>
          <Button
            asLink
            label="Join the Discord"
            target="_blank"
            href={getDiscordDocsLinks.discord}
            className="hidden bg-purple text-base tracking-wider px-9 py-3 xl:flex text-[#FCFCFC] mt-10 rounded-md font-sans mx-auto  min-w-[220px] w-full"
          />
        </div>
        <div className="relative w-full h-24 mt-10 max-w-xs lg:max-w-sm mx-auto lg:h-36 lg:mt-0">
          <Image
            src={`/images/founders/discord-click.svg`}
            alt="discord-click"
            layout="fill"
          />
        </div>
        <div className="w-full lg:max-w-xs lg:flex lg:flex-col lg:items-end">
          <Button
            asLink
            label="Join the Discord"
            target="_blank"
            href={getDiscordDocsLinks.discord}
            className="bg-purple text-base tracking-wider px-9 py-3 text-[#FCFCFC] mt-10 rounded-md font-sans mx-auto  min-w-[220px] w-full lg:hidden"
          />
          <p className="text-koiipurpledark font-sans pt-11 lg:pt-0 font-semibold text-xl leading-5 text-center lg:text-end">
            And check out the newly updated Docs.
          </p>
          <Button
            asLink
            target="_blank"
            href={getDiscordDocsLinks.docs}
            label="Koii Wiki"
            className="bg-transparent text-base tracking-wider px-16 py-3 text-purple border-purple border-2 border-solid mt-10 rounded-md font-sans min-w-[220px] w-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
