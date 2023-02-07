import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { getDiscordDocsLinks } from "@/config/links-config";

export const DiscordAndDocs = () => {
  return (
    <div className="flex w-full justify-center bg-lightmint pt-32 pb-[120px] lg:bg-faux-azure-mist lg:pb-32 lg:pt-28">
      <div className="max-auto flex w-full flex-col px-8 lg:max-w-6xl lg:flex-row lg:gap-10">
        <div className="w-full lg:flex lg:max-w-xs lg:flex-col lg:items-start lg:justify-between">
          <p className="text-center font-sans text-xl font-semibold leading-5 text-koiipurpledark lg:text-start">
            Jump in our Discord to say hello and chat with other powerhouse
            people.
          </p>
          <Button
            asLink
            label="Join the Discord"
            target="_blank"
            href={getDiscordDocsLinks.discord}
            className="mx-auto mt-10 hidden w-full rounded-md bg-purple px-9 py-3 font-sans text-base tracking-wider  text-[#FCFCFC] whitespace-nowrap xl:flex"
          />
        </div>
        <div className="relative mx-auto mt-10 h-24 w-full max-w-xs lg:mt-0 lg:h-36 lg:max-w-sm">
          <Image
            src={`/images/founders/discord-click.svg`}
            alt="discord-click"
            layout="fill"
          />
        </div>
        <div className="w-full lg:flex lg:max-w-xs lg:flex-col lg:items-end lg:justify-between">
          <Button
            asLink
            label="Join the Discord"
            target="_blank"
            href={getDiscordDocsLinks.discord}
            className="mx-auto mt-10 w-full min-w-[220px] rounded-md bg-purple px-9 py-3 font-sans text-base  tracking-wider whitespace-nowrap text-[#FCFCFC] lg:hidden"
          />
          <p className="pt-11 text-center font-sans text-xl font-semibold leading-5 text-koiipurpledark lg:pt-0 lg:text-end">
            And check out the newly updated Docs.
          </p>
          <Button
            asLink
            target="_blank"
            href={getDiscordDocsLinks.docs}
            label="Koii Wiki"
            className="mx-auto mt-10 w-full min-w-[220px] rounded-md border-2 border-solid border-purple bg-transparent px-16 py-3 font-sans text-base tracking-wider text-purple whitespace-nowrap"
          />
        </div>
      </div>
    </div>
  );
};
