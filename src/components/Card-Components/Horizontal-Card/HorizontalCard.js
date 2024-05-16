import React from "react";
import { getImgPath } from "../../../data-helper";

const HorizontalCard = ({ data }) => {
  return (
    <div className="flex flex-col items-center ">
      {data.map((item) => (
        <div
          key={item.id}
          className="grid items-center gap-8 text-pretty sm:gap-24 lg:grid-cols-2 mt-[10rem] w-11/12 bg-white "
        >
          <div className="-mx-container lg:mr-0">
            <img
              src={getImgPath(item.imagePath)}
              alt={`personalized-${item.id}`}
              loading="lazy"
            />
          </div>
          {item.id % 2 ? (
            <div className="mx-auto max-w-md text-pretty ">
              <h3 className="mb-5 text-4xl font-semibold sm:text-5xl">
                {item.title}
              </h3>
              <p className="text-lg">{item.description}</p>
            </div>
          ) : (
            <div className="mx-auto max-w-md text-pretty lg:order-first">
              <h3 className="mb-5 text-4xl font-semibold sm:text-5xl">
                {item.title}
              </h3>
              <p className="text-lg">{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HorizontalCard;
