import Link from "next/link";

type LinksSectionProps = {
  title: string;
  links?: Array<{ label: string; url: string }>;
};

export const LinksSection = ({ title, links = [] }: LinksSectionProps) => {
  return (
    <div className="pb-6">
      <h3 className="mb-2 text-base font-semibold text-center underline uppercase text-fontMain">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map(({ label, url }) => {
          return (
            <li className="text-sm text-center text-fontMain" key={title}>
              <Link href={url}>
                <a>{label}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
