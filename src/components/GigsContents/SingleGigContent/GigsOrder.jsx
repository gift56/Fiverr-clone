import React from "react";

const GigsOrder = () => {
  return (
    <div className="w-full bg-white border p-4 flex flex-col gap-4 items-start justify-start rounded">
      <div className="flex items-center justify-between gap-2 w-full">
        <h2 className="text-gray-800 text-sm font-bold">1 AI generated image</h2>
        <p className="text-base font-normal">$ 50.99</p>
      </div>
    </div>
  );
};

export default GigsOrder;
