"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "../app/HamburgerMenu.css";
import { HamburgerMenu } from "./HamburgerMenu";

export default function Header() {
  const pathname = usePathname();

  const smoothScrollToElement = (selector: string) => {
    const element = document.querySelector(selector);
    if (element instanceof HTMLElement) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    {
      href: "#home",
      title: "HOME",
      isExternal: false,
    },
    {
      href: "#about",
      title: "ABOUT",
      isExternal: false,
    },
    {
      href: "#joinus",
      title: "JOIN US",
      isExternal: false,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Hide mobile menu when a link is clicked
    const links = document.querySelectorAll(".mobile-menu a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        setIsOpen(false);
      });
    });
  }, []);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        mobileMenuRef.current &&
        !event.target.matches(".hamburger-menu") &&
        !event.target.matches(".mobile-menu a") &&
        !event.target.matches(".mobile-menu") &&
        !event.target.matches(".hamburger-menu-open")
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="flex justify-between items-center px-8 py-4 bg-red-900/20 text-white w-full backdrop-blur-md fixed z-20">
        <div className="transition-all ease-in-out duration-200 hover:scale-110 lg:hidden">
          <Link href="/">
            <Image src="/.png" width={72} height={72} alt="Logo" />
          </Link>
        </div>
        <div className="transition-all ease-in-out duration-200 hover:scale-110 hidden lg:block">
          <Link href="/">
            <Image src="/-text.png" width={192} height={72} alt="Logo" />
          </Link>
        </div>
        <nav className="flex space-x-4 lg:space-x-8">
          <a
            href="#home"
            className="transition-all ease-in-out duration-200 hover:scale-110 hidden lg:block mt-6"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollToElement("#home");
            }}
          >
            HOME
          </a>
          <a
            href="#about"
            className="transition-all ease-in-out duration-200 hover:scale-110 hidden lg:block mt-6"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollToElement("#about");
            }}
          >
            ABOUT
          </a>
          <a
            href="#roadmap"
            className="transition-all ease-in-out duration-200 hover:scale-110 hidden lg:block mt-6"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollToElement("#joinus");
            }}
          >
            JOIN US
          </a>
          <a
            href="/"
            target="_blank"
          >
            <div className="flex ml-[32px] -mt-1">
              <img src="/buy.png" width="120px" className="mr-2 transition-all ease-in-out duration-200 hover:scale-110" />
            </div>
          </a>
          <div ref={mobileMenuRef}>
            <HamburgerMenu
              navItems={navItems}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>
        </nav>
      </header>
    </>
  );
}
