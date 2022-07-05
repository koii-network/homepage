import { IconButton } from "@/components/ui/Button";

export const SocialIcons = () => (
  <div className="flex items-center justify-center gap-4 place-content-around px-4 md:px-[12rem] mb-10 relative md:bottom-[-120px]">
    <IconButton
      className="md:px-[30px]"
      name="twitter"
      fill="#8585BC"
      px="40"
    />
    <IconButton
      className="md:px-[30px]"
      name="discord"
      fill="#8585BC"
      px="40"
    />
    <IconButton
      className="md:px-[30px]"
      name="telegram"
      fill="#8585BC"
      px="40"
    />
    <IconButton className="md:px-[30px]" name="github" fill="#8585BC" px="40" />
  </div>
);
