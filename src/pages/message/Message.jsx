import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <main className="py-40">
      <div className="contain">
        <div className="w-full flex items-center justify-center flex-col">
          <p className="flex items-center gap-2 uppercase justify-start text-sm font-medium text-darkColor/60 w-[80%]">
            <Link to="/messages" className="font-semibold text-darkColor">
              MESSAGES
            </Link>{" "}
            <BiChevronRight size={20} />
            <span>John Doe</span> <BiChevronRight size={20} />
          </p>
          <div className="w-[80%]">
            <div className="message"></div>
            <div className="flex items-end w-full gap-8">
              <textarea
                name="message"
                placeholder="Reply a message"
                cols="30"
                rows="10"
                className="border h-[100px] w-[80%] rounded-md resize-none p-2 text-sm font-medium focus:border-2 focus:border-primary outline-none"
              ></textarea>
              <button className="">Send</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Message;
