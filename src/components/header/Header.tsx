import { useState } from "react";
import { Link } from "react-router-dom";

import { NavItem } from "./NavItem";
import { BurgerMenu } from "./BurgerMenu";
import { NAV_LINKS } from "../../data/data";
import type { TLinks } from "../../types/types";


interface MyComponentProps {
  page: keyof TLinks;
}

export const Header = ({ page }: MyComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const LINKS = NAV_LINKS[page];
  const LogoTag = page === 'main' ? 'h1' : 'span';

  return (
    <header className={`sticky top-4 z-50 mx-[3%]`}>
      <div className={`px-[8%] h-20 bg-white/60 backdrop-blur-lg shadow-lg rounded-4xl`}>
        <div className="flex justify-between items-center h-full">

          <Link to="/">
            <LogoTag className="uppercase title-hero">
              Квартиры
            </LogoTag>
          </Link>

          <nav className="hidden xl:block" aria-label="Основное меню">
            <ul className="flex gap-8">
              {LINKS.map((item) => (
                <NavItem key={item.label} label={item.label} href={item.href} />
              ))}
            </ul>
          </nav>
          <BurgerMenu isOpen={isOpen} handleOpen={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      <nav
        aria-label="Мобильное меню"
        className={`
            absolute top-full left-0 right-0 mt-3
            rounded-4xl bg-white/50 backdrop-blur-lg
            xl:hidden px-[8%] w-full overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"}
          `}
      >
        <ul className="flex flex-col gap-4 py-4">
          {LINKS.map((item) => (
            <NavItem key={item.label} label={item.label} href={item.href} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
