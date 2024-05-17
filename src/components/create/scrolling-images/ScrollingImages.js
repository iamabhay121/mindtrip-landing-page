import React from "react";
import scroll1 from "../../../assets/background-scroll/scroll-1.jpeg";
import scroll2 from "../../../assets/background-scroll/scroll-2.jpeg";
import scroll3 from "../../../assets/background-scroll/scroll-3.jpeg";
import scroll4 from "../../../assets/background-scroll/scroll-4.jpeg";
import scroll5 from "../../../assets/background-scroll/scroll-5.jpeg";
import "./style.css";

const images = [
  { src: scroll1, left: "97px", className: "scroll-animation-3d-0" },
  { src: scroll2, left: "224px", className: "scroll-animation-3d-1" },
  { src: scroll3, left: "422px", className: "scroll-animation-3d-2" },
  { src: scroll4, left: "15px", className: "scroll-animation-3d-3" },
  { src: scroll5, left: "410px", className: "scroll-animation-3d-4" },
];

const ScrollingImages = () => {
  return (
    <div className="relative w-full h-96">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute overflow-hidden opacity-0 rounded-2xl shadow-xl ${image.className}`}
          style={{ left: image.left, height: "400px", width: "270px" }}
        >
          <img
            src={image.src}
            alt={`scroll-${index}`}
            className="w-full h-full object-cover rounded-[inherit]"
          />
        </div>
      ))}
    </div>
  );
};

export default ScrollingImages;
