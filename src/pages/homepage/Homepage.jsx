import React from "react";
import Clients from "../../components/HomeComponents/Clients/Clients";
import Hero from "../../components/HomeComponents/Hero/Hero";
import Slides from "../../components/Slides/Slides";
import SingleCard from "../../components/HomeComponents/Services/SingleCard/SingleCard";
import Features from "../../components/HomeComponents/Features/Features";
import { cards } from "../../data/data";
import Marketplace from "../../components/HomeComponents/Marketplace/Marketplace";
import Business from "../../components/HomeComponents/Business/Business";
import Testimony from "../../components/HomeComponents/Testimony/Testimony";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Clients />
      <Slides rowId="1" text="Popular professional services">
        {cards.map((item) => (
          <SingleCard key={item.id} item={item} />
        ))}
      </Slides>
      <Features />
      <Marketplace />
      <Business />
      <Slides rowId="2">
        <Testimony />
      </Slides>
    </main>
  );
};

export default Homepage;
