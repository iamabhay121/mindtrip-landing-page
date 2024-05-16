import React from "react";
import { IoSparklesSharp } from "react-icons/io5";
import { dataHelper } from "../../data-helper";
import HorizontalCard from "../Card-Components/Horizontal-Card/HorizontalCard";

const PersonalizeSection = () => {
  const cardData = dataHelper().personalize_card_data;

  return (
    <div className="mb-[5rem]">
      <div className=" flex mt-[8rem] ">
        <div className=" flex flex-col mx-auto">
          <IoSparklesSharp size={60} className="m-auto" />
          <h2 className="mt-5 text-4xl font-bold sm:text-6xl">
            {dataHelper().ai_powered_travel}
            <br></br>
            {dataHelper().personalized_to_you}
          </h2>
        </div>
      </div>
      <HorizontalCard data={cardData} />
    </div>
  );
};

export default PersonalizeSection;
