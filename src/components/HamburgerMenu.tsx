import { useState } from "react";
import "../app/HamburgerMenu.css";

interface HamburgerMenuProps {
  navItems: Array<{ href: string; title: string; isExternal: boolean }>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HamburgerMenu = ({
  navItems,
  isOpen,
  setIsOpen,
}: HamburgerMenuProps) => {
  const HamburgerIcon = () => (
    <div className="p-1/2 ml-1 mt-3.5 text-white">
      <svg
        className="w-11 h-11 text-white"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </div>
  );

  const smoothScrollToElement = (selector: string) => {
    const element = document.querySelector(selector);
    if (element instanceof HTMLElement) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleNavItemClick = (selector: string, isExternal: boolean) => {
    if (isExternal) {
      window.open(selector, "_blank");
    } else {
      smoothScrollToElement(selector);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`hamburger-menu text-white ${isOpen ? "open hamburger-menu-open" : ""}`}
      >
        <HamburgerIcon />
      </button>
      {/* Mobile nav menu */}
      <nav className={`mobile-menu bg-red-900/20 text-white ${isOpen ? "open" : ""}`}>
        <ul>
          {navItems.map(({ href, title, isExternal }, index) => (
            <li key={index}>
              <a
                key={index}
                href={href}
                className="mobile-menu-item"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavItemClick(href, isExternal);
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
