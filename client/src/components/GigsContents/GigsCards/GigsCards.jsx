import React from "react";
import { Link } from "react-router-dom";
import { BsStarFill, BsFillHeartFill } from "react-icons/bs";
import useAuthStore from "../../../stores";
import Avatar from "../../../assets/icons/avatar.jpg";

const GigsCards = ({ item }) => {
  const { authUser } = useAuthStore();
  const truckcateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <Link
      to={`/gigs/${item._id}`}
      className="w-full shadow-box flex items-start flex-col justify-start border group"
    >
      <img
        src={item?.cover}
        alt={item?.username}
        className="w-full object-cover"
      />
      <div className="w-full bg-white pt-5 flex items-start flex-col gap-3 justify-start">
        <div className="flex items-center justify-start gap-3 px-4">
          <div className="w-8 h-8">
            <img
              src={authUser?.img || Avatar}
              alt={item.username}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-sm font-medium">{authUser?.username}</h2>
            <p className="text-sm font-normal text-gray-400">
              {authUser?.isSeller === true ? "Seller" : "Buyer"}
            </p>
          </div>
        </div>
        <p className="text-darkColor text-base group-hover:text-primary transition-all duration-300 px-4">
          {truckcateString(item.desc, 60)}
        </p>
        <p className="flex items-center justify-start gap-1 text-yellow-400 font-semibold px-4">
          {Array(Math.round(item?.totalStars / item?.starNumber))
            .fill()
            .map((item, i) => (
              <span key={i}>
                <BsStarFill />
              </span>
            ))}
          {!isNaN(item.totalStars / item.starNumber) &&
            Math.round(item.totalStars / item.starNumber)}
        </p>
        <div className="border-t w-full p-5 flex items-center justify-between">
          <span className="text-gray-400 cursor-pointer">
            <BsFillHeartFill size={20} />
          </span>
          <span className="text-sm font-normal text-gray-500">
            started AT{" "}
            <span className="text-xl font-semibold text-darkColor">
              ${item.price}
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default GigsCards;
