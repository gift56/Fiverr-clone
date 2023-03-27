import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const MobileFooter = ({ item, i }) => {
  const [clicked, setClicked] = useState(null);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <div className="w-full rounded-lg py-2 flex flex-col gap-2">
      <div
        onClick={() => toggle(i)}
        className="flex items-center justify-between cursor-pointer text-darkColor"
      >
        <h2 className="text-base font-semibold">{item.title}</h2>
        <span
          className={`${
            clicked === i ? "rotate-[180deg]" : "rotate-[0deg]"
          } transition-all duration-300`}
        >
          <FiChevronDown size={18} />
        </span>
      </div>
      
    </div>
  );
};

export default MobileFooter;
