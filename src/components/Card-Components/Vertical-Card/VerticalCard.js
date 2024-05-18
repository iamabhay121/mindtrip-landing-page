import React from "react";

const VerticalCard = ({ data }) => {
  return (
    <div className="mx-auto">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-6 mx-auto bg-white rounded-[40px] p-6 sm:gap-10 sm:p-16"
          style={{ height: "800px" }}
        >
          <div className="-mx-6 lg:order-last">
            <img
              src={item.imagePath}
              alt={item.title}
              className="mx-auto rounded-[inherit] object-cover"
              width="582"
              height="466"
            />
          </div>
          <div className="mx-auto mb-auto w-full max-w-md text-pretty">
            <h3 className="text-3xl font-semibold sm:text-5xl lg:text-4xl xl:text-5xl">
              {item.title}
            </h3>
            <p className="mt-[1em] text-md sm:text-lg">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalCard;
