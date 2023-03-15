import React from "react";
import { Link } from "react-router-dom";

const GigsCards = ({ item }) => {
  return (
    <Link
      to={`/gigs/${item.id}`}
      className="w-full shadow-box flex items-start flex-col justify-start border"
    >
      <img src={item.img} alt={item.username} className="w-full object-cover" />
      <div className="w-full bg-white p-5 flex items-start flex-col gap-4">
        
      </div>
    </Link>
  );
};

export default GigsCards;
