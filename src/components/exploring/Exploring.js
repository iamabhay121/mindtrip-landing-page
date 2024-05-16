import React from "react";
import { dataHelper } from "../../data-helper";
import ExploreCard from "../Card-Components/explore-card/ExploreCard";

const Exploring = () => {
  const exploreCardData = dataHelper().explore_card_data;
  return (
    <div className="mx-auto w-full py-24">
      <h2 className=" text-center text-5xl font-bold  sm:text-6xl">
        {dataHelper().start_exploring}
      </h2>
      <p className="mb-16 mt-5 text-center text-lg">
        {dataHelper().explore_description}
      </p>
      <ExploreCard data={exploreCardData} />
    </div>
  );
};

export default Exploring;
