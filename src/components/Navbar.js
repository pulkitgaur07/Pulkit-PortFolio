import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import logo from "../assets/portfolios/logo.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const links = [
    { id: 1, link: "about" },
    { id: 2, link: "projects" },
    { id: 3, link: "skills" },
    { id: 4, link: "coding profile" },
    { id: 5, link: "education" },
    { id: 6, link: "contact" },
  ];

  return (
    <div className="w-full h-16 px-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="h-full flex justify-between items-center max-w-screen-lg mx-auto">
        {/* Name */}
        <div className="flex items-center gap-1">
          {/* <img className="h-20 rounded-full p-1" src={logo} alt="Logo" /> */}
          <div className="flex">
          <img
            className="rotate-12 h-16 rounded-full p-1"
            src={logo}
            alt="Logo"
          />
          <h1 className="flex text-5xl font-signature text-yellow-600 dark:text-yellow-400 items-end ml-[-5%]">
            ulkit
          </h1>
        </div>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-10">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="relative cursor-pointer capitalize font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition  group text-lg"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 dark:bg-blue-400 transition-all  group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Theme Toggle + Mobile Menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-black text-white dark:bg-gray-700 dark:text-yellow-400 shadow-md hover:scale-110 transition-transform cursor-pointer"
          >
            {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>

          {/* Mobile menu button */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-2 z-10 text-yellow-600 md:hidden"
          >
            {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white dark:bg-gray-900  ">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 font-bold cursor-pointer capitalize py-4 text-2xl text-black dark:text-white"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
