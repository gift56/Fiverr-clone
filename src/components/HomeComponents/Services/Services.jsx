import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { cards } from "../../../data/data";

const Services = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    let maxScrollLeft = slider.scrollWidth - slider.clientWidth; // maximum scroll position
    if (slider.scrollLeft > 0) {
      // check if not at the beginning
      slider.scrollLeft = slider.scrollLeft - 500;
    } else {
      // if at beginning, wrap to end
      slider.scrollLeft = maxScrollLeft;
    }
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    let maxScrollLeft = slider.scrollWidth - slider.clientWidth; // maximum scroll position
    if (slider.scrollLeft < maxScrollLeft) {
      // check if not at the end
      slider.scrollLeft = slider.scrollLeft + 500;
    } else {
      // if at end, wrap to beginning
      slider.scrollLeft = 0;
    }
  };
  return (
    <section className="py-10">
      <div className="contain">
        <div className="flex flex-col items-start justify-start gap-4 w-full">
          <h2 className="text-3xl font-semibold text-darkColor">Popular professional services</h2>
        </div>
      </div>
    </section>
  );
};

export default Services;
