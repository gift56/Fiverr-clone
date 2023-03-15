import React from "react";
import { BiHomeAlt, BiChevronDown } from "react-icons/bi";

const Gigs = () => {
  return (
    <main className="py-40">
      <div className="contain">
        <div className="flex items-start justify-start flex-col gap-4">
          <div className="flex items-center justify-start gap-4 text-darkColor font-medium">
            <span>
              <BiHomeAlt size={12} />
            </span>
            <span>/</span>
            <span className="text-sm">Programming & Tech</span>
            <span>/</span>
            <span className="text-sm">Website Development</span>
          </div>
          <h2 className="text-3xl font-bold">Web Development</h2>
          <p className="text-base font-medium">
            Find a freelance Web development expert to build your Web website
          </p>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <p className="text-base font-normal text-gray-500">Budget:</p>
              <form className="flex items-center justify-start gap-2">
                <input type="text" placeholder="min" className="border w-[150px] outline-none px-2 h-[40px] rounded-md" />
                <input type="text" placeholder="max" className="border w-[150px] outline-none px-2 h-[40px] rounded-md" />
                <button>Apply</button>
              </form>
            </div>
            <div className="flex items-center justify-end gap-2">
              <p className="text-base font-normal text-gray-500">SortBy:</p>
              <div className="flex items-center justify-start gap-2 cursor-pointer relative">
                <p className="text-sm">Best Selling</p>
                <span>
                  <BiChevronDown size={20} />
                </span>
                <div className="flex flex-col items-start justify-start gap-3">
                  <div>Newest</div>
                  <div>Best Selling</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gigs;
