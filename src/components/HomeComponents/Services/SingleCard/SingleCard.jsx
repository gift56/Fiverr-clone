import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ item }) => {
  return (
    <Link
      to={`/gigs?cat=design`}
      className="relative p-2 inline-block cursor-pointer w-[160px] sm:w-[200px] md:w-[240px] lg:w-[250px] mx-4"
    >
      <img src={item.img} alt={item.title} className="w-full h-auto block" />
    </Link>
  );
};

export default SingleCard;
