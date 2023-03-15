import React from "react";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
} from "react-icons/bs";
import { TbMan, TbWorld } from "react-icons/tb";

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
    {
      title: "About",
      links: [
        {
          to: "/",
          text: "Careers",
        },
        {
          to: "/",
          text: "Press & News",
        },
        {
          to: "/",
          text: "Partnerships",
        },
        {
          to: "/",
          text: "Privacy Policy",
        },
        {
          to: "/",
          text: "Terms of Service",
        },
        {
          to: "/",
          text: "Intellectual Property Claims",
        },
        {
          to: "/",
          text: "Investor Relations",
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          to: "/",
          text: "Help & Support",
        },
        {
          to: "/",
          text: "Trust & Safety",
        },
        {
          to: "/",
          text: "Selling on Fiverr",
        },
        {
          to: "/",
          text: "Buying on Fiverr",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          to: "/",
          text: "Customer Success Stories",
        },
        {
          to: "/",
          text: "Community hub",
        },
        {
          to: "/",
          text: "Forum",
        },
        {
          to: "/",
          text: "Events",
        },
        {
          to: "/",
          text: "Blog",
        },
        {
          to: "/",
          text: "Influencers",
        },
        {
          to: "/",
          text: "Affiliates",
        },
        {
          to: "/",
          text: "Podcast",
        },
        {
          to: "/",
          text: "Invite a Friend",
        },
        {
          to: "/",
          text: "Become a Seller",
        },
        {
          to: "/",
          text: "Community Standards",
        },
      ],
    },
    {
      title: "More From Fiverr",
      links: [
        {
          to: "/",
          text: "Fiverr Business",
        },
        {
          to: "/",
          text: "Fiverr Pro",
        },
        {
          to: "/",
          text: "Fiverr Logo Maker",
        },
        {
          to: "/",
          text: "Fiverr Guides",
        },
        {
          to: "/",
          text: "Get Inspired",
        },
        {
          to: "/",
          text: "Fiverr Select",
        },
        {
          to: "/",
          text: "ClearVoice",
        },
        {
          to: "/",
          text: "Fiverr Workspace",
        },
        {
          to: "/",
          text: "Learn",
        },
        {
          to: "/",
          text: "Working Not Working",
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
