import React from "react";

const SingleCard = ({ item }) => {
  return (
    <div className="relative p-2 inline-block cursor-pointer w-[160px] sm:w-[200px] md:w-[240px] lg:w-[250px] mx-4">
      <img src={item.img} alt={item.title} className="w-full h-auto block" />
    </div>
  );
};

export default SingleCard;
