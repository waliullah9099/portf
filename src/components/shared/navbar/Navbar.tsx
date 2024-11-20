"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import NavItems from "./NavItem";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full fixed bg-[#04293C]  top-0 left-0 right-0 z-10 shadow-inner border-slate-600 border-b">
      <div className="justify-between px-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 relative">
        {/* extra div to set blur background  */}
        <div className="bg-cyan-100 absolute top-0 left-0 w-36 h-full py-3 blur-3xl"></div>
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* LOGO */}
            <Link to="/">
              <h2 className="text-2xl text-white tex font-semibold md:font-bold ">
                MD WALIULLAH
              </h2>
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 mr-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="text-white w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-white w-6 h-6 focus:border-none active:border-nones"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center py-3 mt-8 md:pt-0 md:-mt-3 md:block md:pb-0  ${
              navbar ? "p-12  md:p-0 block" : "hidden"
            }`}
          >
            <NavItems navbar={navbar} setNavbar={setNavbar} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
