import { NavbarItem } from "./navbar/menu-item";
import { FormLinks } from "config/links-config";

export const NavbarMenu = () => {
  return (
    <menu className="z-0 w-full h-full md:block md:w-auto">
      <nav className="flex flex-col items-end h-full gap-4 mb-4 md:flex-row md:items-center md:space-x-8 md:mb-0 ">
        {/* <NavbarItem label={"About"} url={"/"} />
        <NavbarItem label={"Earn"} url={"/"} /> */}
        <NavbarItem label={"Partnerships"} url={FormLinks.PARTNERSHIP} />
        <NavbarItem label={"Blog"} url={"https://blog.koii.network"} />
        <NavbarItem label={"Koii wiki"} url={"https://docs.koii.network"} />
      </nav>
    </menu>
  );
};
