import React from "react";
import { dataHelper } from "../../data-helper";
import HorizontalCard from "../Card-Components/Horizontal-Card/HorizontalCard";
import VerticalCard from "../Card-Components/Vertical-Card/VerticalCard";

const EverythingSection = () => {
  const everythingCardData = dataHelper().everything_card_data;
  console.log(everythingCardData);
  return (
    <div>
      <div className="bg-gray-100">
        <div className="mx-auto w-full max-w-[calc(90rem+(var(--container-pad)*2))] px-container pb-12 pt-24">
          <h2
            className="mx-auto text-center text-4xl 
          font-bold sm:text-6xl"
          >
            {dataHelper().everything_you_need}
            <br />
            {dataHelper().for_your_next_adventure}
          </h2>
          <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2">{}</div>
        </div>
        {<HorizontalCard data={everythingCardData} />}
        <VerticalCard />
      </div>
    </div>
  );
};

export default EverythingSection;
