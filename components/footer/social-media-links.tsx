import { IconButton } from "../ui/Button";

export const SocialMediaLinks = () => {
  return (
    <div className="flex flex-row items-center self-center justify-between gap-8 px-6 pb-6 align-bottom">
      <IconButton name={"twitter"} px={"24"} fill="#4E4E8D" />
      <IconButton name={"discord"} px={"24"} fill="#4E4E8D" />
      <IconButton name={"telegram"} px={"24"} fill="#4E4E8D" />
      <IconButton name={"github"} px={"24"} fill="#4E4E8D" />
      <IconButton name={"linkedin"} px={"24"} fill="#4E4E8D" />
      <IconButton name={"youtube"} px={"24"} fill="#4E4E8D" />
      {/* <Image src="/twitter.png" alt="twitter" width={20.38} height={16.57} /> */}
    </div>
  );
};
