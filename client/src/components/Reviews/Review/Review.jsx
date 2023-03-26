import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import Avatar from "../../../assets/icons/avatar.jpg";
import { Axios } from "../../../config";
import requests from "../../../libs/request";

const Review = ({ item }) => {
  const { data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      Axios.get(`${requests.users}/${item.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="w-full flex flex-col gap-4 items-start justify-start border-t last:border-b last:pb-7 pt-7 ">
      <div className="flex items-start justify-start gap-4">
        <div className="w-10 h-10 border bg-gray-300 rounded-full flex items-center justify-center text-base text-gray-500 uppercase font-semibold">
          <img
            src={data?.img || Avatar}
            alt={data?.username}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex items-start justify-start flex-col gap-4">
          <div className="flex items-start justify-start gap-1 flex-col">
            <h2 className="text-darkColor font-bold lowercase">
              {data?.username}
            </h2>
            <div className="flex items-center justify-start gap-2">
              <span className="text-sm font-medium text-gray-500">
                {data?.country}
              </span>
            </div>
          </div>
          <p className="flex items-center justify-start gap-1 text-yellow-400 font-semibold">
            {Array(item.star)
              .fill()
              .map((item, i) => (
                <span key={i}>
                  <BsStarFill />
                </span>
              ))}
            {item.star}
          </p>
          <p className="font-medium max-w-[660px] text-darkColor">
            {item.desc}
          </p>
          <div className="flex items-center justify-start gap-2">
            <p className="font-semibold text-sm text-gray-900">Helpful?</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-start gap-2 cursor-pointer text-sm font-semibold">
                <span className="text-gray-500">
                  <BiLike />
                </span>
                <span>Yes</span>
              </div>
              <div className="flex items-center justify-start gap-2 cursor-pointer text-sm font-semibold">
                <span className="text-gray-500">
                  <BiDislike />
                </span>
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
