import React from "react";

const HorizontalCard = ({ data }) => {
  return (
    <div className="w-full mx-auto py-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-11/12 mx-auto col-span-2 flex flex-col items-center rounded-[40px] bg-white p-6 sm:p-16 lg:grid lg:grid-cols-2 lg:gap-10 lg:p-10 mb-10"
        >
          <div
            className={`w-full lg:w-auto  -mx-6 -mt-6 lg:mx-0 lg:mt-0 ${
              item.id % 2 ? "order-first" : "lg:order-last"
            }`}
          >
            <img
              src={item.imagePath}
              alt={item.title}
              width="720"
              height="640"
              className="mx-auto rounded-[40px]"
            />
          </div>
          <div className="mx-auto w-full max-w-md text-pretty text-center lg:text-left">
            <h3 className="text-3xl font-semibold leading-snug sm:text-5xl lg:text-4xl xl:text-5xl">
              {item.title}
            </h3>
            <p className="mt-4 text-md sm:text-lg">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCard;
