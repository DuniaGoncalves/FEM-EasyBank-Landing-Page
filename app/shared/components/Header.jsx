import { useState } from "react";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";


export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header flex flex-wrap py-4 px-4 justify-between  md:px-8 bg-white">
      <img className="h-6 w-32 my-2" src="../../images/logo.svg" alt="logo" />
      <button
        className="block md:hidden flex items-center text-gray-600 hover:text-slate-600 focus:outline-none"
        onClick={toggleNav}
      >
        {isNavOpen ? (
          <img src="../../images/icon-close.svg" alt="Close icon" />
        ) : (
          <img src="../../images/icon-hamburger.svg" alt="Hamburger icon" />
        )}
      </button>
      <NavDesktop />
      <div
        className={`rounded-md top-24 m-8 w-10/12 h-80 bg-white z-50 ${
          isNavOpen ? "flex" : "hidden"
        } md:hidden`}
      >
        <NavMobile />
      </div>
    </header>
  );
}