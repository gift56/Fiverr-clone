import React from "react";
import Clients from "../../components/HomeComponents/Clients/Clients";
import Hero from "../../components/HomeComponents/Hero/Hero";
import Slides from "../../components/Slides/Slides";
import SingleCard from "../../components/HomeComponents/Services/SingleCard/SingleCard";
import Features from "../../components/HomeComponents/Features/Features";
import { cards, projectsCards, testimonyData } from "../../data/data";
import Marketplace from "../../components/HomeComponents/Marketplace/Marketplace";
import Business from "../../components/HomeComponents/Business/Business";
import Testimony from "../../components/HomeComponents/Testimony/Testimony";
import Projects from "../../components/HomeComponents/Projects/Projects";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Clients />
      <Slides rowId="1" distance={500} text="Popular professional services">
        {cards.map((item) => (
          <SingleCard key={item.id} item={item} />
        ))}
      </Slides>
      <Features />
      <Marketplace />
      <Business />
      <Slides rowId="2" distance={1200}>
        {testimonyData.map((item, i) => (
          <Testimony item={item} key={i} />
        ))}
      </Slides>
      <Slides
        rowId="3"
        distance={500}
        text="Get inspired with projects made by our freelancers"
      >
        {projectsCards.map((item, i) => (
          <Projects item={item} key={i} />
        ))}
      </Slides>
    </main>
  );
};

export default Homepage;
