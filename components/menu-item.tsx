import Link from "next/link";

type NavbarItemProps = {
  url: string;
  label: string;
};

export const NavbarItem = ({ url, label }: NavbarItemProps) => (
  <li>
    <Link href={url}>
      <a className="text-[14px]">{label}</a>
    </Link>
  </li>
);
