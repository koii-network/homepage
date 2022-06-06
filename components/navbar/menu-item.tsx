import Link from "next/link";

type NavbarItemProps = {
  url: string;
  label: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export const NavbarItem = ({ url, label, target }: NavbarItemProps) => (
  <li>
    <Link href={url}>
      <a
        className="block leading-6 text-dark-blue md:text-sm hover:font-semibold"
        target={target}
        rel="noopener noreferrer"
      >
        {label}
      </a>
    </Link>
  </li>
);
