import { Fade as Hamburger } from 'hamburger-react'
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropDownOpen, setAboutDropDownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isActive = (path) => {
    if (location.pathname === path) {
      return true;
    }
    const navItem = navLinks.find(link => link.to === path);
    if (navItem && navItem.dropdown) {
      return navItem.dropdown.some(item => location.pathname === item.to);
    }
    return false;
  };
  const navLinks = [
    { to: "/", label: "Home" },
    {
      to: "/about",
      label: "About Us",
      dropdown: [
        {
          to: "/about",
          label: "About the Conference ",
        },
        {
          to: "/scope",
          label: "Scope of the Conference",
        },
        {
          to: "/organizing-committee",
          label: "Organizing Committee & Editorial Board",
        },
        // {
        //   to: "/editorial-board",
        //   label: "Editorial Board",
        // },
      ],
    },
    {
      to: " ",
      label: "Author Desk",
      dropdown: [
        {
          to: "/conference-tracks",
          label: "Conference tracks",
        },
        {
          to: "/key-dates",
          label: "Key Dates",
        },
        // {
        //   to: "/key-dates",
        //   label: "Registration Details",
        // },
        {
          to: "/paper-submission",
          label: "New Paper Submission",
        },
      ],
    },
    { to: "/contact", label: "Contact" },
  ];
  const toggleDropdown = (label) => {
    setAboutDropDownOpen(aboutDropDownOpen === label ? null : label);
  };
  useEffect;

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };
  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <>
      <section className="bg-primary">
        <div className="max-w-[80rem] mx-auto md:px-5 px-3 md:py-0 py-2 bg-[#56AE58] border-b-black  border-b">
          <div className="flex items-center justify-between lg:gap-0  gap-5  ">
            <Link to='/'>
              <div className="md:hidden block   ">
                <img className='w-32 h-14 object-contain' src="/assets/Images/ICISCM.png" alt="" />
                {/* <img className='w-40' src="/assets/Images/ICBDCC.png" alt="" /> */}
              </div>
            </Link>
            <div className={`md:hidden block  ${menuOpen ? "z-50" : ""}`}>
              <Hamburger toggled={menuOpen} color="#fff" toggle={setMenuOpen} />
            </div>
          </div>
        </div>
      </section>
      {/* <div className={` ${menuOpen ? "" : ""}`}>
        {menuOpen && (
          <div className=" flex flex-col items-center space-y-4 w-full text-center bg-white py-2 shadow-lg">
            {navLinks.map(
              (link) =>
                !link.desktopOnly && (
                  <div key={link.to} to={link.to} className="relative   ">
                    <Link onClick={() =>  link.dropdown && toggleDropdown(link.label) }
                      className="text-black " >
                      {link.label}
                    </Link>
                    {link.dropdown && aboutDropDownOpen === link.label && (
                      <div className="     mt-3   bg-white   text-black border-gray-200 z-10 ">
                        {link.dropdown.map((dropdownlink) => (
                          <Link
                            key={dropdownlink.to}
                            to={dropdownlink.to}
                            className="block px-4 py-2 text-black hover:bg-gray-100"
                          >
                            {dropdownlink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
            )}
          </div>
        )}
      </div> */}
      <section
        // className={`md:bg-white  md:border-b-4  border-b-[#14AE5C]  ${menuOpen ? " block" : " md:block hidden"}`}
        className={`md:border-b-1  border-b-[#14AE5C] fixed top-0 right-0 h-full w-64 z-40 bg-[#56AE58] ${menuOpen ? "translate-x-0 duration-300" : "translate-x-full duration-300"} md:block md:relative md:w-auto md:translate-x-0`} >
        <header className="max-w-[100rem] mx-auto md:px-5 px-2 h-full py-1 ">
          <div className="flex md:justify-between justify-center items-center ">
            <Link to='/'>
              <img className='w-32 md:block hidden h-16 object-contain  ' src="/assets/Images/ICISCM.png" alt="" />
              {/* <div className=" font-bold md:block hidden text-white">ICISCM</div> */}
            </Link>
            <nav ref={dropdownRef}>
              <div className={`space-x-1 md:block max-w-[65rem] mx-auto  md:pt-0  pt-20  ${menuOpen ? "flex flex-col space-y-4" : ""}`}>
                {navLinks.map((link) => (
                  <div key={link.to} className=" inline-block group relative"
                    // onMouseEnter={() => handleMouseEnter(link.label)}
                    // onMouseLeave={handleMouseLeave}
                    onMouseEnter={() => window.innerWidth >= 768 && handleMouseEnter(link.label)}
                    onMouseLeave={() => window.innerWidth >= 768 && handleMouseLeave()}>
                    <Link to={link.to} className={`py-4 flex lg:w-[144px] md:w-[130px] transition-all duration-300 ease-in-out lg:text-base md:text-sm justify-center items-center gap-2 text-white ${isActive(link.to) || hoveredCategory === link.label ? 'md:border-t-0 border-t-[#14AE5C] duration-300 text-[#1B1F3B]' : ''} `}
                      onClick={(e) => { if (link.dropdown) { e.preventDefault(); setHoveredCategory((prev) => (prev === link.label ? null : link.label)); } else { setMenuOpen(false); } }}   >
                      {link.label}
                      {link.dropdown && (<i className={`fi fi-sr-angle-circle-down flex items-center  transition-all duration-300 ease-in-out  rounded-full text-white ${isActive(link.to) || hoveredCategory === link.label ? 'bg-[#14AE5C] text-white rotate-180 duration-100' : ' '} `}></i>)}
                    </Link>
                    {hoveredCategory === link.label && link.dropdown && (
                      <div className="md:absolute left-0 top-full md:w-[260px] rounded-lg md:bg-[#56AE58] bg-white  transition-all duration-300 ease-in-out opacity-100 scale-y-100 origin-top  grid md:grid-cols-1 md:p-3 z-10">
                        {link.dropdown.map((dropdownlink) => (
                          <Link key={dropdownlink.to} to={dropdownlink.to} className="block md:px-4 px-4 py-2 md:text-white md:text-start text-center  text-[#1B1F3B]" onClick={() => { setHoveredCategory(null); setMenuOpen(false); }} >
                            {dropdownlink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
