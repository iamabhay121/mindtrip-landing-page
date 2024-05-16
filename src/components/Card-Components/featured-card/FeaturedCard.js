import React from "react";
import featured1 from "../../../assets/featured/logo-venture-beat.svg";
import featured2 from "../../../assets/featured/TechCrunch.jpeg";
import featured3 from "../../../assets/featured/Ski.jpeg";
import featured4 from "../../../assets/featured/logo-phocus-wire.svg";
import featured5 from "../../../assets/featured/Outlook.jpeg";
import featured6 from "../../../assets/featured/Aieverything.jpeg";
import { dataHelper } from "../../../data-helper";

const FeaturedCard = () => {
  const featureImg = [
    featured1,
    featured2,
    featured3,
    featured4,
    featured5,
    featured6,
  ];
  return (
    <div className="flex grid-cols-2 flex-wrap items-start justify-center gap-16 text-balance text-center text-md font-semibold text-muted sm:grid lg:grid lg:grid-cols-3 lg:gap-x-4 lg:gap-y-24 xl:gap-x-0">
      {featureImg.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-9 transition-colors hover:text-black"
        >
          <div className="flex h-[4.375rem] flex-col justify-center">
            <img src={item} alt="featured" width="99" height="50" />
          </div>
          <p>{dataHelper().featured_card_data[index].description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCard;
