import { useState } from "react";
import { getDefaultContent } from "./header.content";
import Link from "next/link";
import Image from "next/image";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  let navigation;
  if (!props.navigation) {
    navigation = getDefaultContent();
  } else {
    navigation = props.navigation;
  }

  let logoImage = "/images/logo.svg";
  if (props?.logo) {
    logoImage = props.logo;
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
    <header className="site-container pt-8 md:py-4">
      <div className="flex gap-4 max-md:flex-wrap">
        <div id="logo" className="flex flex-row w-full md:w-80 justify-between">
          {/* Logo Image */}
          <div className="flex">
            <Image src={logoImage} alt="Logo" width={200} height={200} />
          </div>

          {/*  Hamburger Button */}
          <div className="flex items-center justify-end">
            <button
              id="menu-btn"
              className={`block md:hidden hamburger focus:outline-none ${
                isOpen ? "open" : ""
              }`}
              type="button"
              onClick={() => {
                toggleOpen();
                toggleMenu();
              }}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </div>

        {/* Desktop Nav */}
        <div id="nav" className="flex flex-col w-full self-start md:max-w-full md:items-end">
          {/* Search Form */}

          <div className="mx-auto w-full justify-end md:w-80 md:m-0">
            <form className="flex flex-row border w-full justify-items-stretch border-solid border-orange-600 text-white">
              
                <input
                  type="text"
                  className="bg-white w-5/6 flex flex-col placeholder-orange-600 p-2"
                  aria-label="Search"
                  placeholder="Search Our Network"
                />
              
                <input
                  type="button"
                  className="bg-orange-600 w-1/6 justify-center"
                  value="Go"
                />
            </form>
          </div>

          {/* Navigation */}
          <nav>
            {/* Desktop Navigation */}

            <div
              id="desktop-nav"
              className="hidden md:flex self-stretch items-end justify-between gap-5 mt-3 max-md:max-w-full max-md:flex-wrap max-md:justify-center "
            >
              {navigation.group[0].level1.map((item, index) => (
                <Link
                  key={index}
                  href={item.src}
                  className="text-blue-800 text-right text-base leading-6 self-start"
                >
                  {item.text}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation */}

            <div
              id="mobile-nav"
              className="hidden flex-col mx-auto items-start p-4 text-center md:hidden"
            >
              {navigation.group[0].level1.map((item, index) => (
                <Link
                  key={index}
                  href={item.src}
                  className="p-2 text-blue-800 leading-6 border-b border-b-black border-t border-t-black border-l border-l-gray-200 border-r border-r-gray-200 w-full text-left"
                >
                  {item.text}
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
