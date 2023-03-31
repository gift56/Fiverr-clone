import React, { useEffect } from "react";
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
import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../config";
import requests from "../../libs/request";
import loader from "../../assets/icons/loader.svg";

const Homepage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["gigs"],
    queryFn: () => Axios.get(requests.gigs).then((res) => res.data),
  });

  return (
    <main>
      <Hero />
      <Clients />
      {isLoading ? (
        <div className="flex items-center justify-center w-full">
          <img src={loader} alt="/" className="w-[40px]" />
        </div>
      ) : error ? (
        <p className="text-xl md:text-2xl text-red-400 font-normal">
          Error : Something went wrong
        </p>
      ) : (
        <>
          {data?.length === 0 ? (
            <div className="flex items-center justify-center mt-5 flex-col w-full">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-4344461-3613889.png"
                alt="/"
                className="w-[350px]"
              />
              <h2 className="text-2xl md:text-4xl text-active font-medium text-center">
                Oops!🤷‍♂️ No Result
              </h2>
            </div>
          ) : (
            <Slides
              rowId="1"
              distance={500}
              text="Popular professional services"
            >
              {data.map((item) => (
                <SingleCard key={item._id} item={item} />
              ))}
            </Slides>
          )}
        </>
      )}
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
