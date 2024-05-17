import React from "react";
import { dataHelper } from "../../data-helper";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { FaTiktok } from "react-icons/fa";

const TnC = () => {
  return (
    <div className="mx-auto w-full">
      <div className="flex flex-col items-center justify-between gap-10 pb-11 pt-5 lg:flex-row lg:gap-5">
        <p className="flex gap-8 mr-20">
          <FaInstagram size={20} />
          <FaTiktok size={20} />
          <FaFacebookF size={20} />
          <FaXTwitter size={20} />
          <FaYoutube size={20} />
          <FaLinkedinIn size={20} />
        </p>
        <p className="flex flex-col items-center justify-center gap-2.5 ml-20 text-center text-sm text-muted sm:flex-row sm:gap-5 lg:order-first">
          <span>{dataHelper().tnc}</span>
          <span className="flex justify-center gap-5">
            <a
              className="-m-2 p-2 transition-colors hover:text-foreground"
              href="/"
            >
              {dataHelper().privacy_policy}
            </a>
            <a
              className="-m-2 p-2 transition-colors hover:text-foreground"
              href="/"
            >
              {dataHelper().terms_of_service}
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default TnC;
