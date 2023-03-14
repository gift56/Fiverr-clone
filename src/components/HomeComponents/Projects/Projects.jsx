import React from "react";
import { Link } from "react-router-dom";

const Projects = ({ item }) => {
  return (
    <Link
      to={`/`}
      className="relative inline-block cursor-pointer w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] mx-4 shadow-box"
    >
      <div className="w-full flex items-start flex-col justify-start">
        <img src={item.img} alt={item.description} className="w-full h-[300px] rounded-tr-md rounded-tl-md object-cover" />
        <div className="w-full flex items-start px-4">

        </div>
      </div>
    </Link>
  );
};

export default Projects;
