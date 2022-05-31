import { NavbarItem } from "./menu-item";
import { Button } from "./ui/Button";

export const NavbarMenu = () => {
  return (
    <menu className="w-full h-full md:block md:w-auto z-1">
      <nav className="flex flex-col items-end h-full gap-4 mb-4 md:flex-row md:items-center md:space-x-8 md:mb-0 ">
        <NavbarItem label={"About"} url={"/"} />
        <NavbarItem label={"Earn"} url={"/"} />
        <NavbarItem label={"Partnerships"} url={"/"} />
        <NavbarItem label={"Blog"} url={"/"} />
        <NavbarItem label={"Koii wiki"} url={"/"} />
      </nav>
    </menu>
  );
};
