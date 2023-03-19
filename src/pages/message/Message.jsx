import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { mesagesData } from "../../data/data";

const Message = () => {
  return (
    <main className="py-40 pb-10">
      <div className="contain">
        <div className="w-full flex items-center justify-center flex-col gap-4">
          <p className="flex items-center gap-2 uppercase justify-start text-sm font-medium text-darkColor/60 w-[80%]">
            <Link to="/messages" className="font-semibold text-darkColor">
              MESSAGES
            </Link>{" "}
            <BiChevronRight size={20} />
            <span>John Doe</span> <BiChevronRight size={20} />
          </p>
          <div className="w-[80%] flex items-start justify-start gap-4 flex-col h-[500px]">
            <div className="h-[500px] overflow-auto border p-4 rounded-md flex flex-col gap-4 w-full">
              {mesagesData.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-5 max-w-[600px] ${
                    item.owner === true ? "self-end flex-row-reverse" : ""
                  }`}
                >
                  <img
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/c51dbf5c160dac9bd067442911e65d16-1626181910196/Miscellaneous_2x.png"
                    alt="sender_img"
                    className="w-10 h-10 object-cover rounded-full border"
                  />
                  <p
                    className={`text-sm rounded-2xl text-white ${
                      item.owner === true
                        ? "bg-blue-500 p-4 rounded-tr-[0]"
                        : "bg-gray-200 rounded-tl-[0]"
                    }`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis beatae aperiam cupiditate aliquid reprehenderit
                    voluptatem qui asperiores illo atque suscipit odio, alias
                    doloribus repellat voluptates nesciunt distinctio! Tempora
                    labore, voluptate hic repellat ad deserunt alias earum
                    recusandae nulla ullam repellendus.
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-end w-full gap-8">
              <textarea
                name="message"
                placeholder="Reply a message"
                cols="30"
                rows="10"
                className="border h-[100px] w-[80%] rounded-md resize-none p-2 text-sm font-medium focus:border-2 focus:border-primary outline-none"
              ></textarea>
              <button className="bg-primary/80 hover:bg-primary text-white w-fit py-2 px-6 text-sm rounded">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Message;
