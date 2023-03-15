import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import Slides from "../../Slides/Slides";

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
      <h1 className="text-3xl font-bold text-darkColor/90 max-w-[790px]">
        I will create a minimalist creative business logo design
      </h1>
      <div className="flex items-center justify-start gap-3">
        <div className="flex items-center justify-start gap-3">
          <img src="" alt="" className="w-8 h-8 border rounded-full" />
          <span>John doe</span>
        </div>
        <p className="flex items-center justify-start gap-1 text-yellow-400 font-semibold px-4">
          {[0, 1, 2, 3, 4].map((item, i) => (
            <span>
              <BsStarFill />
            </span>
          ))}
          5.0
        </p>
      </div>
      <div className="w-full bg-green-500 p-4">
        <Slides rowId="4" distance={750}>
          {[0, 1, 2].map((item, i) => (
            <div className="relative inline-block cursor-pointer w-full mx-2 shadow-box">
              <div className="w-full bg-red-300 p-4"></div>
            </div>
          ))}
        </Slides>
      </div>
    </div>
  );
};

export default GigsDetails;
