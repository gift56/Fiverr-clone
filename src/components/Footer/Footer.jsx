import React from "react";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
} from "react-icons/bs";
import { TbMan } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { footerLinks } from "../../data/data";

const Footer = () => {
 
  return (
    <footer className="border-t w-full py-14">
      <div className="contain">
        <div className="w-full flex flex-col items-start justify-start gap-10">
          <div className="w-full grid grid-cols-5 gap-5 items-start justify-start">
            {footerLinks.map((item, i) => (
              <div
                key={i}
                className="flex items-start justify-start flex-col w-full gap-5"
              >
                <h2 className="text-base font-semibold text-darkColor">
                  {item.title}
                </h2>
                <div className="flex items-start justify-start flex-col gap-4">
                  {item.links.map((item, i) => (
                    <Link to={item.to} key={i} className="text-gray-500 hover:underline transition-all duration-300 hover:text-darkColor">{item.text}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex items-center justify-between border-t pt-5">
            <div className="flex items-center justify-start gap-4">
              <div className="flex items-end justify-end">
                <h2>fivver</h2>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
