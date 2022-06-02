import { IconButton } from "@/components/ui/Button";

export const SocialMediaLinks = () => {
  return (
    <div className="flex flex-row items-center self-center justify-between gap-8 px-6 pb-6 align-bottom">
      <a href="https://twitter.com/KoiiNetwork">
        <IconButton name={"twitter"} px={"24"} fill="#4E4E8D" />
      </a>
      <a href="https://discord.gg/koii">
        <IconButton name={"discord"} px={"24"} fill="#4E4E8D" />
      </a>
      <a href=" https://t.me/koiinetwork">
        <IconButton name={"telegram"} px={"24"} fill="#4E4E8D" />
      </a>
      <a href="https://github.com/koii-network/">
        <IconButton name={"github"} px={"24"} fill="#4E4E8D" />
      </a>
      <a href="https://www.linkedin.com/company/open-koi/">
        <IconButton name={"linkedin"} px={"24"} fill="#4E4E8D" />
      </a>
      <a href="https://www.youtube.com/c/KoiiNetwork">
        <IconButton name={"youtube"} px={"24"} fill="#4E4E8D" />
      </a>
      {/* <Image src="/twitter.png" alt="twitter" width={20.38} height={16.57} /> */}
    </div>
  );
};
