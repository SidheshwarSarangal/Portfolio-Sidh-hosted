import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-4xl cursor-default font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        }     mx-24 py-2 mt-4 justify-center  font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-md hover:rounded-md transition-all  hover:bg-zinc-800 duration-300 p-1 md:p-2">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="text-md hover:rounded-md transition-all  hover:bg-zinc-800 duration-300 p-1 md:p-2">
            Experience
          </li> 
        </a>
        <a href="#Projects">
          <li className="text-md hover:rounded-md transition-all  hover:bg-zinc-800 duration-300 p-1 md:p-2">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md hover:rounded-md transition-all  hover:bg-zinc-800 duration-300 p-1 md:p-2">
            Contact
          </li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 hover:rounded-md transition-all  hover:bg-zinc-800 duration-300"
          onClick={()=>{
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;