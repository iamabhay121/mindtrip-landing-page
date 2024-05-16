import React from "react";
import { MdOutlineHotel } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { PiAirplaneInFlightLight } from "react-icons/pi";
import { RiRestaurantLine } from "react-icons/ri";
import { PiShapes } from "react-icons/pi";
import { BsPersonStanding } from "react-icons/bs";

// Mapping of icons to be used dynamically
const icons = {
  0: MdOutlineHotel,
  1: FaCar,
  2: PiAirplaneInFlightLight,
  3: RiRestaurantLine,
  4: PiShapes,
  5: BsPersonStanding,
};

const OrganizeCards = ({ data }) => {
  return (
    <ul className="grid gap-5 text-balance text-lg sm:grid-cols-2 lg:grid-cols-3 mx-10">
      {data.map((item, index) => {
        const IconComponent = icons[index]; // Get the corresponding icon component
        return (
          <li key={index} className="rounded-2xl bg-gray-100 p-6 sm:p-10">
            <div className="flex items-center">
              {IconComponent && <IconComponent />}{" "}
              {/* Render the icon component */}
              {item.comming_soon && (
                <span className="px-2 py-1 ml-2 text-xs font-normal bg-black text-white rounded-full">
                  {item.comming_soon}
                </span>
              )}
            </div>
            <h3 className="my-2.5 text-2xl font-semibold">{item.title}</h3>
            <p>{item.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default OrganizeCards;
