import React, { useEffect, useMemo, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const MobileSidebar = ({ show, setShow, setLoginModal }) => {
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
      ref={showRef}
      className={`flex flex-col justify-start items-start w-[350px] bg-white absolute top-0 z-20 h-screen p-8 ${
        show ? "-left-14" : "-left-[100vw]"
      }`}
    >
      <div className="sticky top-0 z-2 bg-white w-full flex flex-col gap-3 items-start justify-start">
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
          className="cursor-pointer text-darkColor text-base font-semibold"
        >
          Sign in
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;