import React from "react";
import PropTypes from "prop-types";

const HorizontalCard = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          className="grid items-center gap-8 text-pretty sm:gap-24 lg:grid-cols-2 mt-[10rem]"
        >
          <div className="-mx-container lg:mr-0">
            <img
              src={item.imagePath}
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

HorizontalCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HorizontalCard;
