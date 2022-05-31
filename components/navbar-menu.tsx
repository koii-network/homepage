import { NavbarItem } from "./menu-item";
import { Button } from "./ui/Button";

export const NavbarMenu = () => {
  return (
    <menu className={`w-full md:block md:w-auto z-1`}>
      <ul className="flex flex-col items-end pt-4 pb-6 pr-8 md:flex-row md:items-center md:mt-0 md:pb-0 md:pt-0 md:pr-0">
        <nav className="flex flex-col md:flex-row items-end md:items-center md:space-x-8 gap-4 mb-4 md:mb-0 md:mr-[190px]">
          <NavbarItem label={"About"} url={"/"} />
          <NavbarItem label={"Earn"} url={"/"} />
          <NavbarItem label={"Partnerships"} url={"/"} />
          <NavbarItem label={"Blog"} url={"/"} />
          <NavbarItem label={"Koii wiki"} url={"/"} />
        </nav>

        <Button
          className="bg-faux-azure-mist border-mint border-solid border-2 p-[8px] w-[186px] h-[40px] rounded-3xl leading-3"
          label={"Get the Newsletter"}
        />
      </ul>
    </menu>
  );
};
