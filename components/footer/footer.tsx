import {
  companyLinks,
  getInTouchLinks,
  getInvolvedLinks,
} from "config/links-config";
import { LinksSection } from "./links-section";
import { SocialMediaLinks } from "./social-media-links";
import Image from "next/image";
import { Subscribe } from "@/components/subscribe/subscribe";
import { Policy } from "./policy";

export const Footer = () => {
  return (
    <footer className=" bg-gradient-to-b from-titanium-white to-turquoise-light app-footer pb-[100px] md:pb-[54px]">
      <div className="container mx-auto md:pt-12">
        <div className="max-w-[1060px] mx-auto">
          <div className="flex justify-center md:justify-start md:flex-start align-self items-center	font-semibold text-dark-blue text-[30px] pb-6">
            <Image
              src="/KoiiNetwork-logo_128.png"
              width={64}
              height={64}
              alt="Koii logo"
            />

            <h2>Don&apos;t Miss Out.</h2>
          </div>
          <div className="flex flex-col items-center md:justify-between lg:items-start lg:flex-row">
            <div className="md:gap-14 md:flex md:flex-row">
              <LinksSection title="COMPANY" links={companyLinks} />
              <LinksSection title="GET INVOLVED" links={getInvolvedLinks} />
              <LinksSection title="GET IN TOUCH" links={getInTouchLinks} />
            </div>

            <div className="md:hidden">
              <SocialMediaLinks />
            </div>

            <Subscribe />
          </div>

          <div className="mt-4 mb-3 border border-solid border-dark-blue md:mb-7" />

          <div className="flex flex-row justify-center md:last:justify-between">
            <Policy />

            <div className="hidden md:block">
              <SocialMediaLinks />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
