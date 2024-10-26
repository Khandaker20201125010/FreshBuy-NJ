"use client"; // Ensure this is at the top of the file

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { SlMenu } from "react-icons/sl";

const NavBar = () => {
  const pathname = usePathname(); // Get the current path
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => {
    setClick(false);
  };
  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`font-bold text-lg ${
            pathname === "/" ? "text-green-500" : "text-black"
          } hover:text-green-600`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/login"
          className={`font-bold text-lg ${
            pathname === "/login" ? "text-green-600" : "text-black"
          } hover:text-green-600`}
        >
          Login
        </Link>
      </li>
    </>
  );
  return (
    <div className="bg-lime-200">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="lg:hidden ">
            <div className="flex mx-10 gap-5 lg:gap-10 justify-center items-center ">
              {/* Burger Icon */}
              <div onClick={handleClick}>
                {click ? (
                  <AiOutlineClose
                    size={20}
                    className="text-xl text-purple-500 lg:text-2xl cursor-pointer"
                  />
                ) : (
                  <SlMenu
                    size={20}
                    className="text-xl lg:text-2xl text-purple-500 font-bold cursor-pointer"
                  />
                )}
              </div>
            </div>

            {/* Menu Items */}
            <div
              className={`fixed  top-0 left-0 w-[350px] h-full bg-gray-300 b transition-transform duration-500 ease-in-out z-50 ${
                click ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Fixed Header in Burger Menu */}
              <div className="sticky top-0  px-4 py-3 md:py-4 border-b border-gray-700">
                <div className="text-2xl font-bold flex justify-between items-center">
                  <a
                    onClick={closeMenu}
                    className="hover:text-orange-500 cursor-pointer border-2 border-purple-400"
                  >
                    <LiaTimesSolid className="text-xl lg:text-2xl cursor-pointer" />
                  </a>
                </div>
              </div>

              {/* Scrollable Content with Hidden Scrollbar */}
              <ul
                className="overflow-y-scroll p-4 space-y-6 text-center text-3xl "
                style={{
                  maxHeight: "calc(100vh - 64px)",
                  scrollbarWidth: "none" /* For Firefox */,
                  msOverflowStyle: "none" /* For Internet Explorer and Edge */,
                }}
              >
                {/* Hide Scrollbar for WebKit Browsers */}
                <style jsx>{`
                  ul::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>

                {links}
              </ul>
            </div>

            {/* Background Shadow (Overlay) */}
            {click && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500"
                onClick={closeMenu} // Close menu when clicking on the overlay
              ></div>
            )}
          </div>
          <button pathname="/">
            {" "}
            <a className=" flex font-bold text-lime-500 text-3xl logo">
              Fresh<span className="text-black">Buy</span>
            </a>
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-5 menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end ">
          <div className="mr-5">
            <button className="hover:text-green-500 rounded-full">
              {" "}
              <FaShoppingBag size={25} />
            </button>
          </div>
          <a className="btn btn-outline px-8 btn-sm glass bg-green-600 hover:bg-green-500  border-green-600 text-black">
            Button
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
