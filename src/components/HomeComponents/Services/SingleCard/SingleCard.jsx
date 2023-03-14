import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ item }) => {
  return (
    <Link
      to={`/gigs?cat=design`}
      className="relative inline-block cursor-pointer w-[160px] sm:w-[200px] md:w-[240px] lg:w-[250px] mx-4"
    >
      <img src={item.img} alt={item.title} className="w-full h-auto block" />
      <div className="absolute top-4 text-white left-4">
        <p className="text-sm font-normal">{item?.description}</p>
        <h2 className="text-2xl font-bold tracking-wide">{item.title}</h2>
      </div>
    </Link>
  );
};

export default SingleCard;
