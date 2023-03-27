import React from "react";
import { Link } from "react-router-dom";
import { marketsData } from "../../../data/data";

const Marketplace = () => {
  return (
    <section className="py-14 bg-white">
      <div className="contain">
        <div className="flex flex-col items-start justify-between w-full gap-9">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-darkColor">
            Explore the marketplace
          </h2>
          <div className="w-full grid grid-cols-3 md:grid-cols-5 justify-center items-center gap-7 mt-6">
            {marketsData.map((item, i) => (
              <Link
                to="/"
                key={i}
                className="w-full flex items-center justify-center flex-col gap-4 group"
              >
                <div className="w-12 h-12 relative after:content-[''] after:absolute after:-bottom-2 after:w-full after:h-[2px] after:bg-[#c5c6c9] group-hover:after:bg-primary group-hover:after:w-20 group-hover:after:translate-x-[-20%] after:transition-all after:duration-300">
                  <img src={item.icon} alt="" className="w-full" />
                </div>
                <h2 className="text-sm text-center font-normal">
                  {item.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
