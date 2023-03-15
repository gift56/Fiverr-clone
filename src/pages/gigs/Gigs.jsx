import React, { useState } from "react";
import { BiHomeAlt, BiChevronDown } from "react-icons/bi";

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (types) => {
    setSort(types);
    setOpen(false);
  };
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
                <input
                  type="text"
                  placeholder="min"
                  className="border w-[150px] outline-none px-2 h-[40px] rounded-md text-gray-500"
                />
                <input
                  type="text"
                  placeholder="max"
                  className="border w-[150px] outline-none px-2 h-[40px] rounded-md text-gray-500"
                />
                <button className="w-fit bg-primary text-white text-base font-medium py-2 px-7 outline-none rounded-md hover:bg-primary/95">
                  Apply
                </button>
              </form>
            </div>
            <div className="flex items-center justify-end gap-2">
              <p className="text-base font-normal text-gray-500">SortBy:</p>
              <div className="flex items-center justify-start gap-2 cursor-pointer relative">
                <div
                  className="flex items-center justify-start gap-2 cursor-pointer relative"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <p className="text-sm">
                    {sort == "sales" ? "Best Selling" : "Newest"}
                  </p>
                  <span>
                    <BiChevronDown size={20} />
                  </span>
                </div>
                <div
                  className={`${
                    open ? "flex" : "hidden"
                  } flex-col items-start justify-start bg-white shadow-box rounded-md absolute w-[140px] top-8 right-2`}
                >
                  {sort === "sales" ? (
                    <div
                      onClick={() => reSort("createdAt")}
                      className="px-4 py-2 w-full border-b text-gray-500 text-sm cursor-pointer"
                    >
                      Newest
                    </div>
                  ) : (
                    <div
                      onClick={() => reSort("sales")}
                      className="px-4 py-2 w-full border-b text-gray-500 text-sm cursor-pointer"
                    >
                      Best Selling
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-4 items-start justify-start gap-5"></div>
        </div>
      </div>
    </main>
  );
};

export default Gigs;
