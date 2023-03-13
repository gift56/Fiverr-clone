import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { BsCurrencyDollar } from "react-icons/bs";

const Navbar = () => {
  return (
    <header>
      <div className="contain">
        <div>
          <div className="logo">
            <span>Fiverr</span>
            <span>.</span>
          </div>
          <div className="links">
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>
              <span>
                <TfiWorld />
              </span>
              English
            </span>
            <span>
              <span>
                <BsCurrencyDollar />
              </span>
              USD
            </span>
            <span>Become a Seller</span>
            <span>Sign In</span>
            <button>Join</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
