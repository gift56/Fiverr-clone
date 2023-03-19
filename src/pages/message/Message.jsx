import React from "react";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <main className="py-40">
      <div className="contain">
        <span>
          <Link to="/messages"></Link>
        </span>
      </div>
    </main>
  );
};

export default Message;
