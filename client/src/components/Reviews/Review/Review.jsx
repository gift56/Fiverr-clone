import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";

const Review = () => {
  return (
    <div className="w-full flex flex-col gap-4 items-start justify-start border-t last:border-b last:pb-7 pt-7 ">
      <div className="flex items-start justify-start gap-4">
        <div className="w-10 h-10 border bg-gray-300 rounded-full flex items-center justify-center text-base text-gray-500 uppercase font-semibold">
          E
        </div>
        <div className="flex items-start justify-start flex-col gap-4">
          <div className="flex items-start justify-start gap-1 flex-col">
            <h2 className="text-darkColor font-bold lowercase">EfeGift222</h2>
            <div className="flex items-center justify-start gap-2">
              <img
                src="http://www.nigerianembassy.co.il/wp-content/uploads/2019/04/flag.jpg"
                alt="flag"
                className="w-6 h-4 object-cover rounded"
              />
              <span className="text-sm font-medium text-gray-500">Nigeria</span>
            </div>
          </div>
          <p className="flex items-center justify-start gap-1 text-yellow-400 font-semibold">
            {[0, 1, 2, 3, 4].map((item, i) => (
              <span key={i}>
                <BsStarFill />
              </span>
            ))}
            5
          </p>
          <p className="font-medium max-w-[660px] text-darkColor">
            Great job on this very well done on this. very fast and timely with
            the edits. keep up the great work and will continue to use you in
            the future.
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
