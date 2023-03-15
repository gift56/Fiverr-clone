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
    </div>
  );
};

export default GigsDetails;
