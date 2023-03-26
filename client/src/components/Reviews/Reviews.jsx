import React from "react";
import Review from "./Review/Review";

const Reviews = ({ gigId }) => {
  return (
    <div className="w-full flex items-start justify-start flex-col gap-4">
      {[0, 1, 2, 3, 4].map((item, i) => (
        <Review key={i} />
      ))}
    </div>
  );
};

export default Reviews;
