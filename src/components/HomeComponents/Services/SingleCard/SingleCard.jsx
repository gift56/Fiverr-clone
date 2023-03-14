import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ item }) => {
  return (
    <Link
      to={`/gigs?cat=design`}
      className="relative inline-block cursor-pointer w-[160px] sm:w-[200px] md:w-[240px] lg:w-[250px] mx-4"
    >
      <img src={item.img} alt={item.title} className="w-full h-auto block" />
      <div className="absolute top-9 text-white left-4 text-base font-">
        <h2>{item.title}</h2>
        <p>{item?.description}</p>
      </div>
    </Link>
  );
};

export default SingleCard;
