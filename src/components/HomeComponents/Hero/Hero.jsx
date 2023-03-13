import React from "react";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="w-full bg-navbg h-screen text-white animate-bganimate bg-no-repeat bg-cover bg-top-4 pt-20">
      <div className="contain flex flex-col items-start justify-center h-full">
        <div className="flex flex-col items-start justify-start gap-4">
          <h2 className="text-5xl font-semibold leading-[120%]">
            Find the perfect <i className="font-light">freelance</i> <br />{" "}
            services for your business
          </h2>
          <div className="flex items-center w-[650px] bg-white h-[50px] rounded-md focus:border focus:border-primary">
            <div className="flex items-center justify-start gap-2 w-full h-full">
              <span className="text-active pl-3">
                <FiSearch size={18} />
              </span>
              <input
                type="text"
                placeholder='Try "building mobile app"'
                className="w-full h-full bg-transparent outline-none text-active"
              />
            </div>
            <button
              type="submit"
              className="bg-primary h-full w-[150px] rounded-tr-md rounded-br-md outline-none"
            >
              Search
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span>Popular :</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
