import React from "react";
import background from "../../assets/background-scroll/Creator_Background.jpeg";

import ScrollingImages from "./scrolling-images/ScrollingImages";

const Create = () => {
  return (
    <div className="relative mx-auto w-full py-12 sm:py-24">
      <div
        className="relative overflow-hidden rounded-4xl py-[100px]"
        style={{ height: "650px" }}
      >
        <img
          src={background}
          alt="background"
          className="absolute mx-auto inset-0 w-11/12 h-full object-fill rounded-[40px]"
        />
        <div className="relative ml-12 z-10 lg:w-1/2 px-9 sm:px-16 lg:px-24">
          <h2 className="text-6xl font-bold tracking-tight sm:text-7xl ">
            Create.
            <br />
            Share.
            <br />
            Earn.
          </h2>
          <p className="my-3 max-w-md text-lg font-light ">
            Use Mindtrip to create shareable itineraries and get paid anytime
            someone books an experience you recommend. Upload your photos and
            videos to your Mindtrip page to inspire others to follow in your
            footsteps and boost your brand awareness.
          </p>
          <button className="mt-3 px-6 py-5 bg-black text-white rounded-full">
            Become a Creator
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <div className="absolute inset-0">
            <ScrollingImages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
