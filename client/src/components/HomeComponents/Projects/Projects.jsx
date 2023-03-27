import React from "react";
import { Link } from "react-router-dom";

const Projects = ({ item }) => {
  return (
    <Link
      to={`/`}
      className="relative inline-block cursor-pointer w-[240px] lg:w-[280px] mx-4 shadow-box"
    >
      <div className="w-full flex items-start flex-col justify-start">
        <img
          src={item.img}
          alt={item.description}
          className="w-full h-[300px] rounded-tr-md rounded-tl-md object-cover hover:opacity-80 transition-all duration-300 rounded-md"
        />
        <div className="w-full flex items-center justify-start gap-2 px-4 rounded-br-md rounded-bl-md bg-white py-4 border">
          <div className="w-10 h-10">
            <img
              src={item.userImg}
              alt={item.description}
              className="w-full object-cover rounded-full"
            />
          </div>
          <div>
            <h2 className="text-darkColor font-semibold text-sm">{item.title}</h2>
            <p className="text-gray-400 text-sm font-normal">{item.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Projects;
