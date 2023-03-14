import React from "react";
import userImg from "../../../assets/images/foundedImg.png";
import { BsPlayFill } from "react-icons/bs";

const Testimony = ({ item }) => {
  return (
    <div className="relative inline-block cursor-pointer w-full mx-4 p-4 pt-0">
      <div className="w-full flex items-start gap-4 justify-start">
        <div className="w-[40%] relative">
          <img src={userImg} alt={item.title} className="w-full rounded-md" />
          <span className="absolute top-0 w-full h-full flex items-center justify-center text-white">
            <span className="bg-black/50 rounded-full flex items-center w-[60px] h-[60px] justify-center cursor-pointer">
              <BsPlayFill size={59} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
