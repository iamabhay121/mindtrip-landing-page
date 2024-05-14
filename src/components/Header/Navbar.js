import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoSparklesSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 flex h-16 items-center px-4">
      <div className="basis-1/2 items-center gap-2.5 md:flex">
        <button className="border border-transparent rounded-full font-semibold p-2  bg-transparent hover:bg-slate-200 text-sm">
          <BiMenuAltLeft className="size-8" />
        </button>
        <div className="">
          <button className="border border-transparent rounded-full font-semibold p-2  bg-transparent hover:bg-slate-200 text-sm">
            Creator Program
          </button>
        </div>
        <div className="">
          <button className="border border-transparent rounded-full font-semibold p-2  bg-transparent hover:bg-slate-200 text-sm">
            Start Exploring
          </button>
        </div>
      </div>
      <div className="flex items-center font-semibold  ">
        <IoSparklesSharp className="gap-[.5rem] text-3xl" />
        <p className="text-2xl">mindtrip.</p>
        <span className="text-xs font-extralight px-1 h-4 rounded  bg-black text-white">
          BETA
        </span>
      </div>
      <div className="ml-auto mr-[calc(var(--button-sm-px)*-1)] flex basis-1/2 justify-end gap-5 sm:mr-0">
        <div className="">
          <button className="border border-transparent rounded-full font-semibold p-2  bg-transparent hover:bg-slate-200 text-sm">
            Sign in
          </button>
        </div>
        <div className="">
          <button className="border border-black rounded-full font-semibold p-2  bg-transparent hover:bg-slate-200 text-sm">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
