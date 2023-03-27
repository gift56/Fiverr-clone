import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Slides = ({ children, rowId, text, distance }) => {
  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowId);
    let maxScrollLeft = slider.scrollWidth - slider.clientWidth; // maximum scroll position
    if (slider.scrollLeft > 0) {
      // check if not at the beginning
      slider.scrollLeft = slider.scrollLeft - distance;
    } else {
      // if at beginning, wrap to end
      slider.scrollLeft = maxScrollLeft;
    }
  };
  const slideRight = () => {
    let slider = document.getElementById("slider" + rowId);
    let maxScrollLeft = slider.scrollWidth - slider.clientWidth; // maximum scroll position
    if (slider.scrollLeft < maxScrollLeft) {
      // check if not at the end
      slider.scrollLeft = slider.scrollLeft + distance;
    } else {
      // if at end, wrap to beginning
      slider.scrollLeft = 0;
    }
  };
  return (
    <section className="py-10">
      <div className="contain">
        <div className="flex flex-col items-start justify-start gap-4 w-full">
          <h2 className="text-xl md:text-3xl font-bold text-darkColor">{text}</h2>
          <div className="relative flex items-center group w-full">
            <MdChevronLeft
              onClick={slideLeft}
              size={40}
              className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            />
            <div
              id={"slider" + rowId}
              className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
            >
              {children}
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

export default Slides;
