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
  
  return <div className="pt-5">MobileFooter</div>;
};

export default MobileFooter;
