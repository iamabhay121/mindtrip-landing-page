import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import SocialCard from "../Card-Components/social-card/SocialCard";

const Social = () => {
  return (
    <div className="mx-auto w-full  text-center py-20">
      <h2 className="mb-[1.5em] text-pretty text-5xl font-bold tracking-tight sm:text-6xl">
        Tag us on your next trip.
      </h2>
      <SocialCard />
      <p className="mb-5 mt-20 flex justify-center gap-12">
        <FaInstagram size={50} />
        <FaTiktok size={46} />
      </p>
      <p className="text-2xl font-semibold">
        #traveldifferently #mindtripping #mindtripai #traveltogether
        #travelyourway
      </p>
    </div>
  );
};

export default Social;
