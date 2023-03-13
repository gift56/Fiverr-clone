import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex items-center justify-center bg-navbg text-white">
      <div className="contain">
        <div className="w-full flex items-center justify-between py-5">
          <Link to="/" className="text-3xl font-bold">
            <span>fiverr</span>
            <span className="text-primary">.</span>
          </Link>
          <nav className="flex items-center justify-end gap-7 font-medium text-base">
            <span className="cursor-pointer">Fiverr Business</span>
            <span className="cursor-pointer">Explore</span>
            <span className="flex items-center gap-2 cursor-pointer">
              <span>
                <TfiWorld />
              </span>
              English
            </span>
            <span className="flex items-center gap-2 cursor-pointer">
              <span>
                <BsCurrencyDollar />
              </span>
              USD
            </span>
            <span className="cursor-pointer">Become a Seller</span>
            <span className="cursor-pointer">Sign in</span>
            <button
              type="button"
              className="border outline-none py-1 px-5 rounded hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium"
            >
              Join
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
