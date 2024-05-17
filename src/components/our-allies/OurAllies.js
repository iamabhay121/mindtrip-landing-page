import React from "react";
import ally1 from "../../assets/our-allies/logo-priceline.svg";
import ally2 from "../../assets/our-allies/logo-tripadvisor.svg";
import ally3 from "../../assets/our-allies/logo-google.svg";
import ally4 from "../../assets/our-allies/logo-viator.svg";

const OurAllies = () => {
  const allyImg = [ally1, ally2, ally3, ally4];
  return (
    <div className="mx-auto w-full py-24 text-center">
      <h2 className="mb-[1.5em] text-5xl font-bold tracking-tight sm:text-6xl">
        Our adventure allies
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-16 xl:gap-24">
        {allyImg.map((image) => (
          <img src={image} alt="ally" width="161" height="38" />
        ))}
      </div>
    </div>
  );
};

export default OurAllies;
