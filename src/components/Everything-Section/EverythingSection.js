import React from "react";
import { dataHelper } from "../../data-helper";
import HorizontalCard from "../Card-Components/Horizontal-Card/HorizontalCard";
import VerticalCard from "../Card-Components/Vertical-Card/VerticalCard";

const EverythingSection = () => {
  const everythingCardData = dataHelper().everything_card_data;
  console.log();

  return (
    <div className="bg-gray-100">
      <div className="mx-auto w-full pt-20">
        <h2
          className="mx-auto text-center text-4xl 
          font-bold sm:text-6xl"
        >
          {dataHelper().everything_you_need}
          <br />
          {dataHelper().for_your_next_adventure}
        </h2>
        <div className="flex flex-row flex-wrap mx-auto">
          {everythingCardData.map((item, index) => {
            if (index === 0 || index === 3) {
              return <HorizontalCard key={index} data={[item]} />;
            } else if (index === 1 || index === 2) {
              return <VerticalCard key={index} data={[item]} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default EverythingSection;
