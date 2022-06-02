import Image from "next/image";

export const SocialMediaLinks = () => {
  return (
    <div className="flex flex-row items-center self-center justify-between gap-8 px-6 pb-6 align-bottom">
      <a href="https://twitter.com/KoiiNetwork">
        <Image src="/twitter.png" alt="twitter" width={20.38} height={16.57} />
      </a>
      <a href="https://discord.gg/koii">
        <Image src="/discord.png" alt="discord" width={20.38} height={16.57} />
      </a>
      <a href=" https://t.me/koiinetwork">
        <Image src="/telegram.png" alt="twitter" width={20.38} height={16.57} />
      </a>
      <a href="https://github.com/koii-network/">
        <Image src="/github.png" alt="github" width={15.33} height={17.33} />
      </a>
      <a href="https://www.linkedin.com/company/open-koi/">
        <Image
          src="/linkedin.png"
          alt="linkedin"
          width={20.38}
          height={16.57}
        />
      </a>
      <a href="https://www.youtube.com/c/KoiiNetwork">
        <Image src="/youtube.png" alt="linkedin" width={20.38} height={16.57} />
      </a>
    </div>
  );
};
