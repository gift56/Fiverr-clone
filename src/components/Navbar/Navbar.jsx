import React, { useState } from "react";
import { TfiWorld } from "react-icons/tfi";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <header
      className={`flex items-center justify-center w-full flex-col text-white ${
        active ? "bg-white text-black" : "bg-navbg"
      }`}
    >
      <div className="contain">
        <div className="w-full flex items-center justify-between py-4">
          <Link to="/" className="text-3xl font-bold">
            <span>fiverr</span>
            <span className="text-primary">.</span>
          </Link>
          <nav className="flex items-center justify-end gap-7 font-medium text-base">
            <NavLink to="/" className="cursor-pointer">
              Fiverr Business
            </NavLink>
            <NavLink to="/explore" className="cursor-pointer">
              Explore
            </NavLink>
            <div className="flex items-center gap-2 cursor-pointer">
              <span>
                <TfiWorld />
              </span>
              English
            </div>
            <span className="flex items-center gap-2 cursor-pointer">
              <span>
                <BsCurrencyDollar />
              </span>
              USD
            </span>
            <NavLink to="seller" className="cursor-pointer">
              Become a Seller
            </NavLink>
            <NavLink to="/login" className="cursor-pointer">
              Sign in
            </NavLink>
            <NavLink
              to="/join"
              type="button"
              className={`border py-2 px-5 rounded hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 text-sm font-semibold ${
                active ? "text-primary border-primary" : ""
              }`}
            >
              Join
            </NavLink>
          </nav>
        </div>
      </div>
      <div
        className={`w-full transition-all duration-300 ${
          active ? "block" : "hidden"
        }`}
      >
        <hr className="border-gray-300" />
        <div className="contain">
          <div
            className={`w-full flex items-center justify-between py-3 overflow-x-auto gap-5 font-medium text-gray-200 ${
              active ? "text-gray-500" : ""
            }`}
          >
            <span className="hover:border-b-2 cursor-pointer transition-[border]  h-8 border-primary">
              Graphics & Design
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 border-primary">
              Digital Marketing
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 border-primary">
              Writing & Translation
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 border-primary">
              Video & Animation
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 border-primary">
              Music & Audio
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 border-primary">
              Programming & Tech
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 border-primary">
              Business
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 border-primary">
              Lifestyle
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 border-primary">
              AI Services
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
