import React from "react";
import { dataHelper } from "../../data-helper";
import { IoPlayCircle } from "react-icons/io5";
import TextEffect from "./text-effect/TextEffect";

const BannerText = () => {
  return (
    <div>
      <h1 className="ml-[-.0625em] text-balance text-7xl font-bold tracking-tight sm:text-8xl lg:max-w-[10em] lg:text-9xl">
        {dataHelper().travel}
        <br></br>
        {/* <span>differently</span> */}
        <span>
          <TextEffect />
        </span>
      </h1>
      <p className="my-5 max-w-md text-pretty text-lg">
        {dataHelper().mindtrip_description} <strong>{dataHelper().your}</strong>{" "}
        {dataHelper().way}
      </p>
      <p className="mt-9 flex gap-5">
        <div className="flex justify-center">
          <button className="bg-black text-white text-lg px-10 py-5 rounded-full mr-1 flex items-center">
            <span>{dataHelper().get_started}</span>
          </button>
          <button className="bg-transparent text-black px-6 py-3 rounded-full flex items-center">
            <IoPlayCircle size={42} />
            <span className="px-2">{dataHelper().play_video}</span>
          </button>
        </div>
      </p>
    </div>
  );
};

export default BannerText;
