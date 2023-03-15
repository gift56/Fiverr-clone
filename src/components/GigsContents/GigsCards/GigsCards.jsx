import React from "react";
import { Link } from "react-router-dom";

const GigsCards = ({ item }) => {
  return (
    <Link
      to={`/gigs/${item.id}`}
      className="w-full shadow-box flex items-start flex-col justify-start border"
    >
      <img src={item.img} alt={item.username} className="w-full object-cover" />
      <div className="w-full bg-white p-5 flex items-start flex-col gap-4 justify-start">
        <div className="flex items-center justify-start gap-3">
          <div className="w-8 h-8">
            <img
              src={item.userImg}
              alt={item.username}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-sm font-medium">{item.username}</h2>
            <p className="text-sm font-normal text-gray-400">{item.rate}</p>
          </div>
        </div>
        <p className="text-darkColor text-base">{item.description}</p>
      </div>
    </Link>
  );
};

export default GigsCards;
