import Image from "next/image";
import Link from "next/link";
import { NavbarItem } from "./menu-item";
import { Button } from "./ui/Button";

export const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between">
      <div>
        <Image
          src="/koii-icon.png"
          width={38.63}
          height={28.65}
          alt="Koii logo"
        />
        <span className="text-[26px]">Koii</span>
      </div>

      <menu className="flex flex-row">
        <NavbarItem label={"About"} url={"/"} />
        <NavbarItem label={"Earn"} url={"/"} />
        <NavbarItem label={"Partnerships"} url={"/"} />
        <NavbarItem label={"Blog"} url={"/"} />
        <NavbarItem label={"Koii wiki"} url={"/"} />
      </menu>

      <Button label={"Get the Newsletter"} />
    </nav>
  );
};
