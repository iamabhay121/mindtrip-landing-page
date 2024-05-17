import React from "react";
import { IoSparklesSharp } from "react-icons/io5";
import { dataHelper } from "../../data-helper";

const Footer = () => {
  const companyList = dataHelper().company_list;
  const creatorList = dataHelper().creator_program_list;
  return (
    <div>
      <div
        className="mx-auto w-full py-24 "
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center font-semibold hover:cursor-pointer hover:opacity-65 ml-20">
              <IoSparklesSharp className="gap-[.5rem] text-3xl" />
              <p className="text-2xl">{dataHelper().mindtrip_smallCase}</p>
              <span className="text-2xl">.</span>
              <span className="text-xs font-extralight px-1 h-4 rounded  bg-black text-white">
                {dataHelper().beta}
              </span>
            </div>
          </div>
          <div className="flex-1 sm:order-last sm:text-right mr-20">
            <h2 className="mb-1 font-semibold">{dataHelper().company}</h2>
            <ul>
              {companyList.map((item, id) => (
                <li key={id} className="my-2 font-light">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 sm:text-right">
            <h2 className="mb-1 font-semibold">
              {dataHelper().creator_program}
            </h2>
            <ul>
              {creatorList.map((item, id) => (
                <li key={id} className="my-2 font-light">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
