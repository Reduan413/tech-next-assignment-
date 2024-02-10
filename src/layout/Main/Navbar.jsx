import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import DarkMode from "../../components/DarkMode";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  const navItems = [
    { link: "Home", path: "/" },
    { link: "Menu", path: "/#menu" },
    { link: "About Us", path: "/#about" },
    { link: "Products", path: "/#products" },
    { link: "Review", path: "/#review" },
  ];
  return (
    <div
      className={`${
        isSticky ? "fixed" : ""
      } w-[100%] shadow-md top-0 bg-white dark:bg-gray-900 dark:text-white duration-200 z-10`}
    >
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl sm:text-3xl font-bold"
            >
             <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">RA-Tech</h1> 
            </Link>
          </div>
          <div className="flex justify-between items-center gap-4">
            <ul className="hidden sm:flex gap-4">
              {navItems?.map((singleNav, index) => (
                <Link
                  to={singleNav?.path}
                  className="inline-block py-4 px-4 hover:text-primary cursor-pointer"
                  key={index}
                >
                  {singleNav?.link}
                </Link>
              ))}
            </ul>
            <div>
              <DarkMode />
            </div>
            <div className="md:hidden flex items-center">
              {menu ? (
                <AiOutlineClose size={25} onClick={handleChange} />
              ) : (
                <AiOutlineMenuUnfold size={25} onClick={handleChange} />
              )}
            </div>
          </div>
          <div
            className={`${
              menu ? "translate-x-0" : "-translate-x-full"
            } lg:hidden flex flex-col absolute bg-white dark:bg-gray-900 dark:text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-8 gap-8 w-full h-fit translate-transform duration-300 z-10`}
          >
            {navItems?.map((singleNav, index) => (
              <li
                className="inline-block py-0 px-2 hover:text-primary"
                key={index}
              >
                <Link to="#">{singleNav?.link}</Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
