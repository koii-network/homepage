import Link from "next/link";

type NavbarItemProps = {
  url: string;
  label: string;
};

export const NavbarItem = ({ url, label }: NavbarItemProps) => (
  <li className="">
    <Link className="" href={url}>
      <a className="block leading-6 md:text-sm">{label}</a>
    </Link>
  </li>
);
