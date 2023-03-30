import React, { useEffect, useMemo, useRef } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MobileSidebar = ({ show, setShow, setLoginModal }) => {
  const variants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, x: "-100%", transition: { duration: 0.3 } },
  };
  const showRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showRef.current && !showRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const body = document.querySelector("html");

  const overflowHidden = () => {
    if (show) {
      return (body.style.overflow = "hidden");
    } else {
      return {
        body: {
          one: (body.style.overflowY = "auto"),
          two: (body.style.overflowX = "hidden"),
        },
      };
    }
  };
  useMemo(() => overflowHidden(), [show]);

  return (
    <div
      className={`w-full h-full bg-black/40 fixed top-0 z-40 left-0 transition-all duration-500 ${
        show ? "flex" : "hidden"
      }`}
    >
      <motion.div
        animate={show ? "open" : "closed"}
        variants={variants}
        ref={showRef}
        className={`flex flex-col gap-4 justify-start items-start w-[250px] bg-white absolute top-0 z-20 h-screen p-6 ${
          show ? "left-0" : "-left-[100vw]"
        }`}
      >
        <div className="sticky top-0 z-2 bg-white w-full flex flex-col gap-6 items-start justify-start">
          <NavLink
            to="/join"
            className={`border py-3 px-6 rounded bg-primary border-primary text-white transition-all duration-300 text-base font-semibold`}
          >
            Join Fiverr
          </NavLink>
          <div
            onClick={() => {
              navigate("/");
              setShow(false);
              setLoginModal(true);
            }}
            className="cursor-pointer text-gray-400 text-base font-medium"
          >
            Sign in
          </div>
        </div>
        <p className="cursor-pointer text-gray-400 text-base font-medium">
          Browser Categories
        </p>
        <p className="cursor-pointer text-gray-400 text-base font-medium">
          Explore
        </p>
        <NavLink to="/" className={`text-base font-semibold text-gray-400`}>
          Fiverr Business
        </NavLink>
        <div className="mt-5 border-t w-full flex items-start justify-start flex-col gap-4 pt-3">
          <p className="cursor-pointer text-gray-400 text-base font-medium">
            Home
          </p>
          <p className="cursor-pointer text-gray-400 text-base font-medium flex items-center justify-start gap-2">
            English
            <span>
              <TfiWorld />
            </span>
          </p>
          <p className="cursor-pointer text-gray-400 text-base font-medium flex items-center justify-start gap-2">
            <span>
              <BsCurrencyDollar />
            </span>
            USD
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileSidebar;
