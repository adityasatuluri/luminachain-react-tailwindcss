import React, { useState } from 'react'; // Import useState from 'react'
import { close, luminalogo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false); // Use camelCase for state variable name

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={luminalogo} alt="luminalogo" className="w-[147px] h-[32px] ml-5" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-10' : 'mr-10' // Consider using 'ml-10' for margin on the left side
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex items-center"
      >
        <img src={toggle ? close : menu} alt="menu icon" 
            className="mr-5 w-[28px] h-[28px] object-contain"
            onClick={()=> setToggle((prev) => !prev)}/>
        <div className={`${
                          toggle ? 'flex' : 'hidden'
                          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? 'mb-0' : 'mb-4' // Consider using 'ml-10' for margin on the left side
              } text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
