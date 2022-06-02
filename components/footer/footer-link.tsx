import Link from "next/link";

type FooterLinkProps = {
  title: string;
  url: string;
};

export const FooterLink = ({ title, url }: FooterLinkProps) => (
  <li className="text-sm text-center md:text-left text-dark-blue hover:underline">
    <Link href={url}>
      <a>{title}</a>
    </Link>
  </li>
);
