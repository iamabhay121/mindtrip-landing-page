import React from "react";
import heart from "../../assets/other/heart.png";
import { dataHelper } from "../../data-helper";

const Partner = () => {
  return (
    <div
      className="mx-auto w-full py-40 text-center lg:py-48"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <img src={heart} alt="heart" className="mx-auto" width="72" height="68" />
      <h2 className="mt-9 text-5xl font-bold tracking-tight sm:text-6xl">
        {dataHelper().partner_title}
      </h2>
      <p className="mb-9 mt-[1em] text-balance text-lg">
        {dataHelper().partner_description}
      </p>
    </div>
  );
};

export default Partner;
