import React from "react";
import Clients from "../../components/HomeComponents/Clients/Clients";
import Hero from "../../components/HomeComponents/Hero/Hero";
import Services from "../../components/HomeComponents/Services/Services";
import Slides from "../../components/Slides/Slides";
import { cards } from "../../data/data";
import SingleCard from "../../components/HomeComponents/Services/SingleCard/SingleCard";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Clients />
      <Slides rowId="1" text="Popular professional services"></Slides>
    </main>
  );
};

export default Homepage;
