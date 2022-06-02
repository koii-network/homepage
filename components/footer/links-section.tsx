import { FooterLink } from "./footer-link";

type LinksSectionProps = {
  title: string;
  links?: Array<{ label: string; url: string }>;
};

export const LinksSection = ({ title, links = [] }: LinksSectionProps) => {
  return (
    <div className="pb-6">
      <h3 className="mb-2 text-base font-semibold text-center underline uppercase md:text-left text-dark-blue">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map(({ label, url }) => {
          return <FooterLink title={label} url={url} key={label} />;
        })}
      </ul>
    </div>
  );
};
