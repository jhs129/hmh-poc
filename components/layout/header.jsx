import { useState } from "react";
import { getDefaultContent } from "./header.content";
import Link from "next/link";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  let navigation;
  if (!props.navigation) {
    navigation = getDefaultContent();
  } else {
    navigation = props.navigation;
  }

  let logoImage = "/images/newlogo.svg";
  if (props?.settings?.logoimage) {
    logoImage = props.settings.logoimage;
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    const menu = document.getElementById("mobile-nav");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
  };

  return (
    <header className="container mx-auto p-8 md:pt-4">
      <div className="flex gap-4 max-md:flex-wrap">
        <div className="flex flex-row space-y-6 space-x-40">
          {/* Logo Image */}
          <img
            loading="lazy"
            src="/images/logo.svg"
            className="pl-4 w-60 items-center"
            alt="Image"
          />
          {/*  Hamburger Button */}
          <button
            id="menu-btn"
            className={`block md:mr-16 md:hidden hamburger focus:outline-none ${
              isOpen ? "open" : ""
            }`}
            type="button"
            onClick={() => {
              toggleOpen();
              toggleMenu();
            }}
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>
        {/* Desktop Nav */}
        <div className="flex flex-col self-start md:max-w-full md:items-end">
          {/* Search Form */}
          <div className="px-4 mx-auto md:m-0">
            <form className="border flex w-[400px] max-w-full items-stretch gap-0 p-px border-solid border-orange-600 text-white">
              <input
                type="text"
                className="bg-white flex w-[338px] shrink-0 h-[35px] flex-col"
                aria-label="Search"
              />
              <input
                type="button"
                className="bg-orange-600 w-full text-center"
                value="Go"
              />
            </form>
          </div>
          {/* Navigatoin */}
          <nav>
            {/* Desktop Navigation */}
            <div
              id="desktop-nav"
              className="hidden md:flex self-stretch items-end justify-between gap-5 mt-3 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center "
            >
              {navigation.navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.link.href}
                  className="text-blue-800 text-right text-base leading-6 self-start"
                >
                  {item.link.text}
                </Link>
              ))}
            </div>
            {/* Mobile Navigation */}
            <div
              id="mobile-nav"
              className="flex flex-col mx-auto items-start p-4 text-center md:hidden"
            >
              {navigation.navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.link.href}
                  className="p-2 text-blue-800 leading-6 border-b border-b-black border-t border-t-black border-l border-l-gray-200 border-r border-r-gray-200 w-full text-left"
                >
                  {item.link.text}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
