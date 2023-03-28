import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import Slides from "../../Slides/Slides";
import Avatar from "../../../assets/icons/avatar.jpg";
import Reviews from "../../Reviews/Reviews";
import requests from "../../../libs/request";
import { Axios } from "../../../config";
import { useQuery } from "@tanstack/react-query";

const GigsDetails = ({ data, id, userId }) => {
  const { data: userData } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      Axios.get(`${requests.users}/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  return (
    <div className="w-full flex items-start justify-start gap-3 flex-col">
      <div className="flex items-center justify-start gap-2 text-gray-500 text-sm font-medium">
        <span className="text-active">FIVERR </span>
        <span>
          <BiChevronRight />
        </span>
        <span className="text-active capitalize">{data?.cat}</span>
      </div>
      <h1 className="text-3xl font-bold text-darkColor/90 max-w-[790px]">
        {data?.title}
      </h1>
      <div className="flex items-center justify-start gap-3 w-full">
        <div className="flex items-center justify-start gap-3">
          <img
            src={userData?.img || Avatar}
            alt={data?.username}
            className="w-8 h-8 border rounded-full"
          />
          <span>{userData?.username}</span>
        </div>
        {!isNaN(data?.totalStars / data?.starNumber) && (
          <div className="flex items-center justify-start gap-1 text-yellow-400 text-lg font-semibold">
            {Array(Math.round(data?.totalStars / data?.starNumber))
              .fill()
              .map((item, i) => (
                <span key={i}>
                  <BsStarFill />
                </span>
              ))}
            <span>{Math.round(data?.totalStars / data?.starNumber)}</span>
          </div>
        )}
      </div>
      <div className="w-[90%]">
        <Slides rowId="4" distance={700}>
          {data?.images?.map((item, i) => (
            <div
              key={i}
              className="relative inline-block cursor-pointer w-full mx-4 shadow-box bg-gray-200"
            >
              <div className="w-full h-full">
                <img
                  src={item}
                  alt={item}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </Slides>
      </div>
      <h2 className="text-xl font-semibold text-gray-500">About This Gig</h2>
      <p className="text-base text-gray-700 max-w-[700px] font-normal">
        {data?.desc}
      </p>
      <div className="flex flex-col gap-3 mt-5 w-full">
        <h2 className="text-xl font-semibold text-gray-500">
          About The Seller
        </h2>
        <div className="flex items-start justify-start gap-3 w-full">
          <img
            src={userData?.img || Avatar}
            alt=""
            className="w-20 h-20 border rounded-full"
          />
          <div className="flex flex-col items-start justify-start gap-2">
            <h4 className="text-base font-bold text-darkColor">
              {userData?.username}
            </h4>
            <div className="flex items-center justify-start gap-1 text-yellow-400 text-lg font-semibold">
              {Array(Math.round(data?.totalStars / data?.starNumber))
                .fill()
                .map((item, i) => (
                  <span key={i}>
                    <BsStarFill />
                  </span>
                ))}
              <span>{Math.round(data?.totalStars / data?.starNumber)}</span>
            </div>
            <button className="outline-none text-sm font-medium hover:bg-gray-400 hover:text-white transition-all duration-300 border border-gray-400 w-fit py-2 px-4 rounded">
              Contact Me
            </button>
          </div>
        </div>
        <div className="border w-full lg:w-[83%] p-5 rounded flex flex-col items-start justify-start gap-5">
          <div className="w-full flex items-start justify-between gap-4">
            <div className="w-[50%] flex flex-col items-start justify-start gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-sm font-normal">From</span>
                <h2 className="text-darkColor font-medium">
                  {userData?.country}
                </h2>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-sm font-normal">
                  Avg. response time
                </span>
                <h2 className="text-darkColor font-medium">1 Hour</h2>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-sm font-normal">
                  Languages
                </span>
                <h2 className="text-darkColor font-medium">English</h2>
              </div>
            </div>
            <div className="w-[50%] flex flex-col items-start justify-start gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-sm font-normal">
                  Member since
                </span>
                <h2 className="text-darkColor font-medium">Mar 2023</h2>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-sm font-normal">
                  Last delivery
                </span>
                <h2 className="text-darkColor font-medium">1 day</h2>
              </div>
            </div>
          </div>
          <p className="text-darkColor text-sm font-medium border-t w-full pt-4 pr-4">
            {userData?.desc}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5 w-full">
        <h2 className="text-xl font-semibold text-gray-500">Reviews</h2>
        <Reviews gigId={id} />
      </div>
    </div>
  );
};

export default GigsDetails;
