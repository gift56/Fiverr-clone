import React from "react";
import { BiHomeAlt } from "react-icons/bi";

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
              <p className="text-base font-normal">Budget:</p>
              <input type="text" placeholder="min" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gigs;
