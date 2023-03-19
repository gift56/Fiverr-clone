import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <main className="py-40">
      <div className="contain">
        <p className="flex items-center gap-2 uppercase justify-start text-sm font-medium text-darkColor/60">
          <Link to="/messages" className="font-semibold text-darkColor">MESSAGES</Link> <BiChevronRight size={20} />
          <span>John Doe</span> <BiChevronRight size={20} />
        </p>
        <div className="message"></div>
        <div className="write">
          <textarea name="message" placeholder="Reply a message" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </main>
  );
};

export default Message;
