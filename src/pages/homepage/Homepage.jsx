import React from "react";
import Clients from "../../components/HomeComponents/Clients/Clients";
import Hero from "../../components/HomeComponents/Hero/Hero";
import Services from "../../components/HomeComponents/Services/Services";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Clients />
      <Services />
    </main>
  );
};

export default Homepage;
