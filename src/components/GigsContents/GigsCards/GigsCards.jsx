import React from "react";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";

const GigsCards = ({ item }) => {
  const truckcateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <Link
      to={`/gigs/${item.id}`}
      className="w-full shadow-box flex items-start flex-col justify-start border group"
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
        <p className="text-darkColor text-base group-hover:text-primary transition-all duration-300">
          {" "}
          {truckcateString(item.description, 60)}
        </p>
        <p className="flex items-center justify-start gap-1 text-yellow-400 font-semibold">
          <span>
            <BsStarFill />
          </span>
          5.0
        </p>
      </div>
    </Link>
  );
};

export default GigsCards;
