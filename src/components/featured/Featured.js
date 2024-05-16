import React from "react";
import FeaturedCard from "../Card-Components/featured-card/FeaturedCard";
import { dataHelper } from "../../data-helper";

const Featured = () => {
  return (
    <div className="mx-auto w-full  py-24 text-center">
      <h2 className="mb-[1.5em] text-5xl font-bold tracking-tight sm:text-6xl">
        {dataHelper().featured_title}
      </h2>
      <FeaturedCard />
    </div>
  );
};

export default Featured;
