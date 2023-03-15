import React from "react";
import GigsDetails from "../../components/GigsContents/SingleGigContent/GigsDetails";
import GigsOrder from "../../components/GigsContents/SingleGigContent/GigsOrder";

const Gig = () => {
  return (
    <main className="py-40">
      <div className="contain">
        <div className="w-full flex items-start justify-between gap-6">
          <div className="w-[70%]">
            <GigsDetails />
          </div>
          <div className="w-[30%]">
            <GigsOrder />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gig;
