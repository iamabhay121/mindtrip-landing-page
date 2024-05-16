import React from "react";
import { dataHelper } from "../../data-helper";
import OrganizeCards from "../Card-Components/Organize-Cards/OrganizeCards";

const OrganizeSection = () => {
  const organizeCardsData = dataHelper().organize_cards;
  return (
    <div>
      <h2 className="mb-[1.5em] text-balance text-center text-5xl font-bold !leading-tight tracking-tight sm:text-6xl">
        {dataHelper().organize_it_all_in_one_place}
      </h2>
      <OrganizeCards data={organizeCardsData} />
    </div>
  );
};

export default OrganizeSection;
