import Link from "next/link";

type NavbarItemProps = {
  url: string;
  label: string;
};

export const NavbarItem = ({ url, label }: NavbarItemProps) => (
  <li className="flex flex-row items-center">
    <Link className="" href={url}>
      <a className="block leading-6 text-[14px]">{label}</a>
    </Link>
  </li>
);
