import React, { useEffect, useState } from "react";
import Login from "./Login";

function Navbar() {
  const [navScroll, setNavScroll] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  const element = document.documentElement;

  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem("theme", 'dark');
      document.body.classList.add('dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const scrollHandle = () => {
      if (window.scrollY > 0) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };
    window.addEventListener('scroll', scrollHandle);
    return () => {
      window.removeEventListener('scroll', scrollHandle);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navItems = (
    <>
      <li className="text-lg lg:text-xl">
        <a href="/">Home</a>
      </li>
      <li className="text-lg lg:text-xl">
        <a href="/projects">Projects</a>
      </li>
      <li className="text-lg lg:text-xl">
        <a href="/contact">Contact</a>
      </li>
      <li className="text-lg lg:text-xl">
        <a href="/about">About</a>
      </li>
    </>
  );
  

  return (
    <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 bg-white dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50
      ${navScroll ? "sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out" : ""}`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="text-3xl  font-bold cursor-pointer text-red-700">Nitin Chamoli</a>
        </div>
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">{navItems}</ul>
          </div>
         
          <label className="toggle text-base-content">
            <input
              type="checkbox"
              className="theme-controller"
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>
            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
        
          </div>
        </div>
      </div>
    
  );
}

export default Navbar;