import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Slides = ({ children, rowId, text }) => {
  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowId);
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
    let slider = document.getElementById("slider" + rowId);
    let maxScrollLeft = slider.scrollWidth - slider.clientWidth; // maximum scroll position
    if (slider.scrollLeft < maxScrollLeft) {
      // check if not at the end
      slider.scrollLeft = slider.scrollLeft + 500;
    } else {
      // if at end, wrap to beginning
      slider.scrollLeft = 0;
    }
  };
  return <section className="py-10">
    
  </section>;
};

export default Slides;
