import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";

const GigsOrder = ({ data }) => {
  const extra = [
    "Up to 2 minutes running time",
    "Color grading",
    "Motion graphics",
  ];
  return (
    <div className="w-full bg-white border p-4 flex flex-col gap-4 items-start justify-start rounded">
      <div className="flex items-center justify-between gap-2 w-full">
        <h2 className="text-gray-800 text-sm font-bold">{data?.shortTitle}</h2>
        <p className="text-base font-normal">$ {data?.price}</p>
      </div>
      <p className="text-sm font-medium text-darkColor">{data?.shortDesc}</p>
      <div className="flex items-center justify-between gap-2 w-full">
        <div className="flex items-center justify-start gap-2 text-sm text-darkColor font-semibold">
          <AiOutlineClockCircle />
          <span>{data?.deliveryTime} Days Delivery</span>
        </div>
        <div className="flex items-center justify-start gap-2 text-sm text-darkColor font-semibold">
          <TfiReload />
          <span>{data?.revisionNumber} Revisions</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-start justify-start w-full">
        {data.features.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-start gap-2 text-sm text-darkColor/70 font-semibold"
          >
            <BsCheckLg className="text-primary" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <button className="w-full h-10 rounded bg-primary/95 text-white hover:bg-primary outline-none">
        Continue
      </button>
    </div>
  );
};

export default GigsOrder;
