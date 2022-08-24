import { NavbarItem } from "./menu-item";
import { HubspotFormLinks } from "config/links-config";

export const NavbarMenu = () => {
  return (
    <menu className="z-0 w-full h-full md:block md:w-auto">
      <nav className="flex flex-col items-end h-full mb-4 md:flex-row md:items-center md:space-x-8 md:mb-0 px-[1rem]">
        <NavbarItem label={"About"} url={"/about"} />
        <NavbarItem label={"Earn"} url={"/earn"} />
        <NavbarItem
          target={"_blank"}
          label={"Partnerships"}
          url={HubspotFormLinks.PARTNERSHIP}
        />
        <NavbarItem
          target={"_blank"}
          label={"Blog"}
          url={"https://blog.koii.network"}
        />
        <NavbarItem
          label={"Koii Wiki"}
          url={"https://docs.koii.network"}
          target={"_blank"}
        />
      </nav>
    </menu>
  );
};
