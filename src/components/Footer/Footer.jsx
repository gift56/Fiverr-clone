import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Categories",
      links: [
        {
          to: "/",
          text: "Graphics & Design",
        },
        {
          to: "/",
          text: "Digital Marketing",
        },
        {
          to: "/",
          text: "Writing & Translation",
        },
        {
          to: "/",
          text: "Video & Animation",
        },
        {
          to: "/",
          text: "Music & Audio",
        },
        {
          to: "/",
          text: "Programming & Tech",
        },
        {
          to: "/",
          text: "Data",
        },
        {
          to: "/",
          text: "Business",
        },
        {
          to: "/",
          text: "Lifestyle",
        },
        {
          to: "/",
          text: "Photography",
        },
        {
          to: "/",
          text: "Sitemap",
        },
      ],
    },
  ];
  return (
    <footer className="border-t w-full py-14">
      <div className="contain">
        <div className="w-full flex flex-col items-start justify-start">
          <div className="w-full"></div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
