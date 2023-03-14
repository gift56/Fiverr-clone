import React from "react";
import { Link } from "react-router-dom";

const Projects = ({ item }) => {
  return (
    <Link
      to={`/`}
      className="relative inline-block cursor-pointer w-[160px] sm:w-[200px] md:w-[240px] lg:w-[250px] mx-4"
    >
      Projects
    </Link>
  );
};

export default Projects;
