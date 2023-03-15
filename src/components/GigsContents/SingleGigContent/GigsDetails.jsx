import React from "react";
import { BiChevronRight } from "react-icons/bi";

const GigsDetails = () => {
  return (
    <div className="w-full flex items-start justify-start gap-3 flex-col">
      <div className="flex items-center justify-start gap-2 text-gray-500 text-sm font-medium">
        <span className="text-active">FIVERR </span>
        <span>
          <BiChevronRight />
        </span>
        <span className="text-active">Web Development</span>
      </div>
      <h1 className="text-3xl font-bold text-darkColor/90 max-w-[790px]">I will create a minimalist creative business logo design</h1>
      <div className="flex items-center justify-start gap-3">
        <img src="" alt="" className="w-8 h-8 border rounded-full"/>
        <span>John doe</span>
      </div>
    </div>
  );
};

export default GigsDetails;
