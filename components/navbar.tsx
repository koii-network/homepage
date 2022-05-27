import Image from "next/image";
import { NavbarItem } from "./menu-item";
import { Button } from "./ui/Button";

export const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between bg-gradient-to-r from-lightmint to-white py-4 pr-8 pl-4">
      <div className="flex flex-row items-center gap-4">
        <div>
          <Image
            src="/koii-icon.png"
            width={38.63}
            height={28.65}
            alt="Koii logo"
          />
        </div>
        <span className="text-[26px]">Koii</span>
      </div>

      <menu className="flex flex-row gap-12 align-middle">
        <NavbarItem label={"About"} url={"/"} />
        <NavbarItem label={"Earn"} url={"/"} />
        <NavbarItem label={"Partnerships"} url={"/"} />
        <NavbarItem label={"Blog"} url={"/"} />
        <NavbarItem label={"Koii wiki"} url={"/"} />
      </menu>

      <Button
        className="bg-faux-azure-mist border-mint border-solid border-2 p-[8px] w-[186px] h-[40px] rounded-3xl leading-3"
        label={"Get the Newsletter"}
      />
    </nav>
  );
};
