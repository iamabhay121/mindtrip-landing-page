import React from "react";
import { CiLocationOn } from "react-icons/ci";
import "./exploreCard.css";
import explore1 from "../../../assets/explore/explore-paris.jpeg";
import explore2 from "../../../assets/explore/explore-rome.jpeg";
import explore3 from "../../../assets/explore/explore-sf.jpeg";
import explore4 from "../../../assets/explore/explore-sydney.jpeg";
import explore5 from "../../../assets/explore/explore-nyc.jpeg";
import explore6 from "../../../assets/explore/explore-tokyo.jpeg";
import explore7 from "../../../assets/explore/explore-cancun.jpeg";
import explore8 from "../../../assets/explore/explore-toronto.jpeg";

const ExploreCard = ({ data }) => {
  const imagePath = {
    0: explore1,
    1: explore2,
    2: explore3,
    3: explore4,
    4: explore5,
    5: explore6,
    6: explore7,
    7: explore8,
  };
  return (
    <div className="-mx-container md:px-6">
      <ul
        className="scrollbar-hide -mt-1 flex max-w-5xl snap-x snap-mandatory 
      scroll-pl-[--container-pad] gap-[--grid-card-gap] overflow-auto text-pretty pt-1 text-sm 
      leading-tight *:shrink-0 *:basis-56 *:snap-start md:mx-auto md:flex-wrap md:justify-center"
      >
        {data.map((item, id) => (
          <li
            key={id}
            className="transition-transform hover:-translate-y-1 m-3"
          >
            <div className="relative mb-4 aspect-[7/8] overflow-hidden rounded-2xl">
              <img
                src={imagePath[id]}
                alt="explore"
                className="overflow-hidden rounded-[inherit] object-cover object-center"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: "0",
                  top: "0",
                  right: "0",
                  bottom: "0",
                  color: "transparent",
                }}
              />

              <div className="absolute left-4 top-4">
                <span className="inline-flex items-center font-medium whitespace-nowrap shrink-0 rounded-full bg-white text-black text-3xs h-4 leading-none px-[.625em]">
                  {item.days}
                </span>
              </div>
            </div>
            <h3 className="font-semibold">{item.description}</h3>
            <p className="mt-1 flex items-start gap-1 text-muted">
              <CiLocationOn className="shrink-0 size-[1em] relative top-[.0625em] text-[1.125em]" />
              {item.location}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExploreCard;
