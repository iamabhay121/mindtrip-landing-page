import React from "react";
import { MdOutlineHotel } from "react-icons/md";

const OrganizeCards = ({ data }) => {
  return (
    <ul className="grid gap-5 text-balance text-lg sm:grid-cols-2 lg:grid-cols-3 mx-10">
      {data.map((item, index) => (
        <li key={index} className="rounded-2xl bg-gray-100 p-6 sm:p-10">
          <MdOutlineHotel />
          {item.comingSoon ? (
            <span className="inline-block px-2 py-1 mt-2 text-xs font-semibold bg-black rounded">
              Coming soon
            </span>
          ) : (
            ""
          )}
          <h3 className="my-2.5 text-2xl font-semibold">{item.title}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default OrganizeCards;
