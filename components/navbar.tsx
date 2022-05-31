import { useState } from "react";

import Image from "next/image";
import { MenuButton } from "./menu-button";
import { NavbarMenu } from "./navbar-menu";
import { NewsletterButton } from "./newsletter-button";

export const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const toggleOpenMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <header>
      <div className="relative flex justify-between py-4 pl-4 pr-8 bg-gradient-to-r from-lightmint to-white drop-shadow-lg z-99">
        <div className="flex items-center gap-4">
          <div>
            <Image
              src="/koii-icon.png"
              width={38.63}
              height={28.65}
              alt="Koii logo"
            />
          </div>
          <span className="text-[24px]">Koii</span>
        </div>

        <MenuButton onClick={toggleOpenMenu} />

        <div className="hidden md:block">
          <NavbarMenu />
        </div>

        <div className="hidden md:block">
          <NewsletterButton />
        </div>
      </div>

      {/**
       * @todo: Fix animation
       */}
      <div
        className={` ${
          !openMobileMenu && "hidden"
        } md:hidden bg-gradient-to-l from-lightmint to-white drop-shadow-md pt-4 pb-6 pr-8`}
      >
        <NavbarMenu />

        <div className="flex justify-end md:hidden">
          <NewsletterButton />
        </div>
      </div>
    </header>
  );
};
