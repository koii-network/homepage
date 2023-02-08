import { MediaCard } from "./components/mediacard";
import { useMediaQuery } from "@/components/hooks";

export const Koiimunity = () => {
  const isBreakpoint = useMediaQuery(728);
  return (
    <div
      className={`heroabout xl:min-h-[1085px] pt-[150px] xl:pt-[30px] relative z-10`}
      style={{
        background: isBreakpoint
          ? `url("/images/about/koiimunity-mobile.svg") no-repeat center / cover`
          : `url("/images/about/koiimunity.svg") no-repeat center / cover`,
      }}
    >
      <div className=" container flex flex-col xl:flex-row px-[40px] xl:px-[120px] 2xl:px-[18rem]">
        <div className="flex flex-col pt-[3rem] md:pt-[10rem] items-center md:items-start">
          <div className="title text-[45px] xl:text-[60px] text-lightmint w-[293px] sm:w-auto xl:w-[380px]">
            Join the Koii-munity
          </div>
          <div className="subtitle text-[16px] pt-[30px] text-white w-[290px] xl:w-[380px]">
            <p>
              Each platform is a little bit different. Find the best one for
              what you need, or join them all!
            </p>
            <p className="pt-[0.5rem]">
              We’re excited to have you no matter what.
            </p>
          </div>
        </div>
        <div className="cardarea py-[6rem] flex flex-wrap md:justify-end w-[333px] md:w-[715px] xl:w-auto self-center xl:self-auto">
          <MediaCard
            className="mt-[-4rem]"
            title="Telegram"
            subtitle="Telegram has all the lastest news, announcements, and chatter."
            colour="bg-[#FFA6A6]/[.90]"
            imgSrc="/images/about/telegram_white.svg"
            width="w-[156px] md:w-[260px]"
            height="h-[194px]  md:h-[260px]"
            buttonLabel="Join"
            url="https://t.me/koiinetwork"
            alt="Telegram"
          />
          <MediaCard
            title="GitHub"
            subtitle="Dig into the open-source code on our GitHub. See how you can leverage all of Koii’s tools and help us build a better internet."
            colour="bg-[#FFC78F]/[.90]"
            imgSrc="/images/about/github_white.svg"
            width="w-[160px] md:w-[420px]"
            height="h-[242px] md:h-[260px]"
            buttonLabel="Tools"
            url="https://github.com/koii-network/"
            alt="GitHub"
          />
          <MediaCard
            className="mt-[-7rem]"
            title="Discord"
            subtitle="Join our discord to get the inside scoop, ask questions, and be a part of our developer community."
            colour="bg-[#9BE7C4]/[.90]"
            imgSrc="/images/about/discord_white.svg"
            width="w-[156px] md:w-[306px]"
            height="h-[270px] md:h-[296px]"
            buttonLabel="Join"
            url="https://discord.gg/koii"
            alt="Discord"
          />
          <MediaCard
            title="Twitter"
            subtitle="Follow us on Twitter for updates, airdrops, and weekly chats with the founders, interesting projects, and other cool guests."
            colour="bg-[#BEF0ED]/[.90]"
            imgSrc="/images/about/twitter_white.svg"
            width="w-[160px]  md:w-[322px]"
            height="h-[269px]  md:h-[322px]"
            buttonLabel="Follow"
            url="https://twitter.com"
            alt="Twitter"
          />
        </div>
      </div>
    </div>
  );
};
