import { IconButton } from "@/components/ui/Button";

export const SocialIcons = () => (
  <div className="flex items-center justify-center gap-4 place-content-around px-4 md:px-[28rem] mb-10 relative md:bottom-[-120px]">
    <IconButton name="twitter" fill="#8585BC" px="40" />
    <IconButton name="discord" fill="#8585BC" px="40" />
    <IconButton name="telegram" fill="#8585BC" px="40" />
    <IconButton name="github" fill="#8585BC" px="40" />
  </div>
);
