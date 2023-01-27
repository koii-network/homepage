import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const DiscordAndDocs = () => {
  return (
    <div className="pt-32 pb-[120px] bg-lightmint px-8 flex flex-col justify-center">
      <p className="text-koiipurpledark font-sans font-semibold text-xl leading-5 text-center">
        Jump in our Discord to say hello and chat with other powerhouse people.
      </p>
      <div className="relative w-full h-24 mt-10 max-w-xs mx-auto">
        <Image
          src={`/images/founders/discord-click.svg`}
          alt="discord-click"
          layout="fill"
        />
      </div>
      <Button
        asLink
        label="Join the Discord"
        target="_blank"
        href=" https://discord.gg/koii"
        className="bg-purple text-base tracking-wider px-9 py-3 text-[#FCFCFC] mt-10 rounded-md font-sans mx-auto  min-w-[220px] w-full"
      />
      <p className="text-koiipurpledark font-sans pt-11 font-semibold text-xl leading-5 text-center">
        And check out the newly updated Docs.
      </p>
      <Button
        asLink
        target="_blank"
        href="https://docs.koii.network/"
        label="Koii Wiki"
        className="bg-transparent text-base tracking-wider px-9 py-3 text-purple border-purple border-2 border-solid mt-10 rounded-md font-sans min-w-[220px] w-full mx-auto"
      />
    </div>
  );
};
