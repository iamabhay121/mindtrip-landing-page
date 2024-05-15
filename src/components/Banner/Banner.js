import React from "react";
import "./banner.css";
import bgImg from "../../assets/banner-images/banner.jpeg";
import london from "../../assets/banner-images/London.png";
import paris from "../../assets/banner-images/Paris.png";
import rome from "../../assets/banner-images/Rome.png";

const Banner = () => {
  return (
    <div className="flex flex-1 flex-col ">
      <div className=" ">
        <div className=" inset-0 ">
          <img
            src={bgImg}
            alt="background"
            className="h-full w-full rounded-b-[30px]"
          ></img>
        </div>
        <img
          src={london}
          alt="big-bang"
          className="w-60 absolute right-[25.25vw] top-[37%]  animate-float1 "
        ></img>
        <img
          src={paris}
          alt="eiffle tower"
          className="w-56 absolute right-[2vw] top-[15%] animate-float2"
        ></img>

        <img
          src={rome}
          alt="colosium"
          className="w-56 absolute bottom-[9%] right-[8vh] animate-float3"
        ></img>
      </div>
    </div>
  );
};

export default Banner;
