import React from "react";
import social1 from "../../../assets/social/Social_1.jpeg";
import social2 from "../../../assets/social/Social_2.jpeg";
import social3 from "../../../assets/social/Social_3.jpeg";
import social4 from "../../../assets/social/Social_4.jpeg";

const SocialCard = () => {
  const socialImages = [social1, social2, social3, social4];

  return (
    <div className="-mx-container">
      <ul className="scrollbar-hide flex snap-x snap-mandatory scroll-pl-[--container-pad] gap-[--grid-card-gap] overflow-auto *:shrink-0 *:basis-60 *:snap-start md:justify-center md:overflow-hidden">
        {socialImages.map((image, index) => (
          <li key={index} className="ml-container rounded-2xl mr-5">
            <img
              src={image}
              alt={`social-${index + 1}`}
              width="240"
              height="288"
              className="overflow-hidden  h-72 overflow-hidden rounded-[inherit] object-cover object-center"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialCard;
