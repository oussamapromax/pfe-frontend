/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-lightBlue-600 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo FootReserve */}
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/" className="text-white text-2xl font-bold">
            FootReserve
          </Link>
          <button
            className="cursor-pointer text-white text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Navbar */}
        <div
          className={
            "lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none" +
            (navbarOpen ? " block" : " hidden")
          }
          id="navbar-menu"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center space-x-0 lg:space-x-4 text-lg">
            <li>
              <Link
                to="/"
                className="relative text-white px-3 py-2 transition duration-300 ease-in-out hover:text-gray-200 hover:shadow-lg hover:shadow-white/20 hover:bg-white/10 rounded-md hover:glow"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/features"
                className="relative text-white px-3 py-2 transition duration-300 ease-in-out hover:text-gray-200 hover:shadow-lg hover:shadow-white/20 hover:bg-white/10 rounded-md hover:glow"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="relative text-white px-3 py-2 transition duration-300 ease-in-out hover:text-gray-200 hover:shadow-lg hover:shadow-white/20 hover:bg-white/10 rounded-md hover:glow"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="relative text-white px-3 py-2 transition duration-300 ease-in-out hover:text-gray-200 hover:shadow-lg hover:shadow-white/20 hover:bg-white/10 rounded-md hover:glow"
              >
                About
              </Link>
            </li>

            {/* Icône panier */}
            <li className="ml-0 lg:ml-3 mt-2 lg:mt-0">
              <button className="relative">
                <ShoppingCart className="text-white w-6 h-6 ml-2" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  1
                </span>
              </button>
            </li>

            {/* Dropdown utilisateur (NON MODIFIÉ) */}
            <li className="ml-0 lg:ml-3 mt-2 lg:mt-0 ml-2">
              <IndexDropdown />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}