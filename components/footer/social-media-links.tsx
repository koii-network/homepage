import Image from "next/image";

export const SocialMediaLinks = () => {
  return (
    <div className="flex flex-row items-center self-center justify-between gap-8 px-6 pb-6 align-bottom">
      <a href="https://twitter.com/KoiiNetwork">
        <Image src="/images/twitter.svg" alt="twitter" width={32} height={32} />
      </a>
      <a href="https://discord.gg/koii">
        <Image src="/images/discord.svg" alt="discord" width={32} height={32} />
      </a>
      <a href="https://t.me/koiinetwork">
        <Image
          src="/images/telegram.svg"
          alt="telegram"
          width={32}
          height={32}
        />
      </a>
      <a href="https://github.com/koii-network/">
        <Image src="/images/github.svg" alt="github" width={32} height={32} />
      </a>
      <a href="https://www.linkedin.com/company/open-koi/">
        <Image
          src="/images/linkedin.svg"
          alt="linkedin"
          width={32}
          height={32}
        />
      </a>
      <a href="https://www.youtube.com/c/KoiiNetwork">
        <Image
          src="/images/youtube.svg"
          alt="linkedin"
          width={32}
          height={32}
        />
      </a>
    </div>
  );
};
