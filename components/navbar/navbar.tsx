import { useState } from "react";
import Link from "next/link";
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
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative z-50 flex justify-between py-2 pl-4 pr-8 bg-gradient-to-r from-turquoise-light to-white drop-shadow-lg md:drop-shadow-none">
      <Link href="/">
          <a>
            <div className="flex items-center gap-4">
              <Image
                src="/KoiiNetwork-logo_128.png"
                width={48}
                height={48}
                alt="Koii logo"
              />

              <span className="text-[24px] text-dark-blue">Koii</span>
            </div>
          </a>
        </Link>

        <MenuButton onClick={toggleOpenMenu} />

        <div className="hidden md:block">
          <NavbarMenu />
        </div>

        <div className="self-center hidden md:block">
          <NewsletterButton />
        </div>
      </div>

      {/**
       * @todo: Fix animation
       */}
      <div
        className={` ${
          !openMobileMenu && "hidden"
        } md:hidden bg-gradient-to-l from-turquoise-light to-white drop-shadow-md pt-4 pb-6 pr-8`}
      >
        <NavbarMenu />

        <div className="flex justify-end md:hidden">
          <NewsletterButton />
        </div>
      </div>
    </header>
  );
};
