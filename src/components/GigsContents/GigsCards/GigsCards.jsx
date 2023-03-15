import React from "react";
import { Link } from "react-router-dom";

const GigsCards = ({ item }) => {
  return <Link to={`/gigs/${item.id}`}>GigsCards</Link>;
};

export default GigsCards;
