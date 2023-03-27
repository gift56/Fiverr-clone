import React, { useEffect, useMemo, useRef } from "react";

const MobileSidebar = ({ show, setShow }) => {
  const showRef = useRef(null);

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
      className={`flex flex-col justify-start items-start w-[350px] bg-white absolute top-0 z-20 h-screen ${
        show ? "-left-14" : "-left-[100vw]"
      }`}
    >
      MobileSidebar
    </div>
  );
};

export default MobileSidebar;
