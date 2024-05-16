import React from "react";
import pic from "../../../assets/everything-images/everything2.jpeg";

const VerticalCard = () => {
  return (
    <div className="flex flex-col gap-6 rounded-4xl bg-white p-6 sm:gap-10 sm:p-16 w-2/5 h-1/4">
      <div className="-mx-6 lg:order-last">
        <img src={pic} alt="no" />
      </div>
      <div className="mx-auto mb-auto w-full max-w-md text-pretty">
        <h3 className="text-3xl font-semibold  sm:text-5xl lg:text-4xl xl:text-5xl">
          Tailored Recommendation
        </h3>
        <p className="mt-[1em] text-md sm:text-lg">
          From the best restaurants in your town to the best beaches around the
          world, we’ve got you covered. Favorite the recommendations you like
          and add them to your trip plan.
        </p>
      </div>
    </div>
  );
};

export default VerticalCard;
