import React from "react";
import { Link } from "react-router-dom";
import { marketsData } from "../../../data/data";

const Marketplace = () => {
  return (
    <section className="py-14 bg-white">
      <div className="contain">
        <div className="flex items-center justify-between w-full gap-4">
          <h2 className="text-4xl font-bold text-darkColor">
            Explore the marketplace
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
