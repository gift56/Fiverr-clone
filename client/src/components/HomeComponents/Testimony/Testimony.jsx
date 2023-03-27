import React from "react";
import userImg from "../../../assets/images/foundedImg.png";
import { BsPlayFill } from "react-icons/bs";

const Testimony = ({ item }) => {
  return (
    <div className="relative inline-block cursor-pointer w-full lg:mx-4 p-4 pt-0">
      <div className="w-full flex items-start lg:items-center flex-col lg:flex-row gap-7 justify-start">
        <div className="w-full lg:w-[40%] relative">
          <img src={userImg} alt={item.title} className="w-full rounded-md" />
          <span className="absolute top-0 w-full h-full flex items-center justify-center text-white">
            <span className="bg-black/50 rounded-full flex items-center w-[60px] h-[60px] justify-center cursor-pointer">
              <BsPlayFill size={59} />
            </span>
          </span>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 w-full lg:w-[60%]">
          <h2 className="sm:text-xl text-base tracking-wide font-semibold text-gray-500">{item.title} | </h2>
          <p className="lg:text-3xl text-xl w-full lg:max-w-[670px] whitespace-normal text-navbg">
            <i>{item.details}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
