import {
  companyLinks,
  getInTouchLinks,
  getInvolvedLinks,
} from "config/links-config";
import { LinksSection } from "./links-section";
import { SocialMediaLinks } from "./social-media-links";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center align-self items-center	font-semibold text-fontMain text-[30px] pb-6">
        <Image
          src="/KoiiNetwork-logo_128.png"
          width={64}
          height={64}
          alt="Koii logo"
        />

        <h2>Don&apos;t Miss Out.</h2>
      </div>
      <div>
        <LinksSection title="COMPANY" links={companyLinks} />
        <LinksSection title="GET INVOLVED" links={getInvolvedLinks} />
        <LinksSection title="GET IN TOUCH" links={getInTouchLinks} />
      </div>
      <SocialMediaLinks />
    </footer>
  );
};
