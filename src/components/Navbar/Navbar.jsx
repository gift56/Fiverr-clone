import React, { useState, useEffect } from "react";
import { TfiWorld } from "react-icons/tfi";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const backgroundChange = () => {
      window.scrollY > 0 ? setActive(true) : setActive(false);
    };
    window.addEventListener("scroll", backgroundChange);
    return () => {
      window.removeEventListener("scroll", backgroundChange);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Efe Gift",
    isSeller: true,
  };

  return (
    <header
      className={`flex items-center justify-center w-full flex-col text-white sticky top-0 transition-all ease-in-out z-10 ${
        active ? "bg-white !text-black" : "bg-navbg"
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
            {!currentUser.isSeller && (
              <NavLink to="seller" className="cursor-pointer">
                Become a Seller
              </NavLink>
            )}
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
          active ? "flex" : "hidden"
        }`}
      >
        <hr className="border-black" />
        <div className="contain">
          <div
            className={`w-full flex items-center justify-between py-3 overflow-x-auto gap-5 font-medium text-gray-200 scrollbar-hide text-sm ${
              active ? "text-gray-500" : ""
            }`}
          >
            <span className="hover:border-b-2 cursor-pointer transition-[border] h-8 scrollbar-hide border-primary">
              Graphics & Design
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 scrollbar-hide border-primary">
              Digital Marketing
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 scrollbar-hide border-primary">
              Writing & Translation
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 scrollbar-hide border-primary">
              Video & Animation
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 scrollbar-hide border-primary">
              Music & Audio
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 scrollbar-hide border-primary">
              Programming & Tech
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 scrollbar-hide border-primary">
              Business
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 scrollbar-hide border-primary">
              Lifestyle
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 scrollbar-hide border-primary">
              AI Services
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
