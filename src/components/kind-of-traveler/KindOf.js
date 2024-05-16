import React from "react";
import kindImg from "../../assets/other/kindofTraveler.png";
import { dataHelper } from "../../data-helper";

const KindOf = () => {
  return (
    <div className="mx-auto w-full max-w-[calc(90rem+(var(--container-pad)*2))] px-container py-12 sm:py-24">
      <div className="grid items-center gap-8 @container sm:gap-10 md:-ml-container md:grid-cols-2">
        <div className="overflow-hidden rounded-4xl @[94.25rem]:!rounded-4xl md:rounded-l-none md:rounded-r-4xl">
          <img
            src={kindImg}
            alt="Kind"
            width="720"
            height="641"
            className="mx-auto overflow-hidden rounded-[inherit]"
          />
        </div>
        <div className="mx-auto w-full max-w-md">
          <h3 className="max-w-[10em] text-4xl font-semibold sm:text-5xl">
            {dataHelper().kind_of}
          </h3>
          <p className="my-5 max-w-[46ch] text-pretty text-lg">
            {dataHelper().kind_of_description}
          </p>
          <button className="bg-black text-white text-lg px-10 py-5 rounded-full mr-1 flex items-center">
            <span>{dataHelper().take_our_quiz}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KindOf;
