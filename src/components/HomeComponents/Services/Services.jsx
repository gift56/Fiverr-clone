import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { cards } from "../../../data/data";
import SingleCard from "./SingleCard/SingleCard";

const Services = () => {
  return (
    <section className="py-10">
      <div className="contain">
        <div className="flex flex-col items-start justify-start gap-4 w-full">
          <h2 className="text-3xl font-bold text-darkColor">
            Popular professional services
          </h2>
          <div className="relative flex items-center group w-full">
            <MdChevronLeft
              onClick={slideLeft}
              size={40}
              className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            />
            <div
              id="slider"
              className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
            >
              {cards.map((item) => (
                <SingleCard key={item.id} item={item} />
              ))}
            </div>
            <MdChevronRight
              onClick={slideRight}
              size={40}
              className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden  group-hover:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
