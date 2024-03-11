import React from "react";
import ButtonPrimary from "../common/ButtonPrimary";
import CommonLayout from "../common/CommonLayout";
import {
  MassageIcon,
  SettingsIcon,
  SecurityIcon,
  GraphIcon,
} from "../common/Icon"; // Import additional icons as needed

const cardData = [
  {
    title: "Blazing Fast Hardware",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <GraphIcon />, // Add an icon component for each card
  },
  {
    title: "99.99% Uptime",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    icon: <GraphIcon />, // Example of another icon
  },
  {
    title: "Worldwide Network",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    icon: <GraphIcon />, // Example of another icon
  },
  {
    title: "Money Back Guarantee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <GraphIcon />, // Add an icon component for each card
  },
  {
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    icon: <GraphIcon />, // Example of another icon
  },
  {
    title: "DDOs Protection",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    icon: <GraphIcon />, // Example of another icon
  },
  // Add more objects for additional cards
];

const WhyUs = () => {
  return (
    <CommonLayout>
      <div className="flex flex-col items-center justify-center py-[148px] text-center ">
        <h2 className="heading text-primary text-center">Why Us?</h2>
        <div className="flex flex-wrap justify-center items-center lg:gap-x-[110px]  sm:gap-x-[50px] gap-x-[30px] lg:gap-y-[60px] md:gap-y-[50px] sm:gap-y-[40px] gap-y-[30px] mt-[84px] w-full">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="card flex flex-col group rounded-lg bg-white hover:bg-primary pt-8 px-7 pb-[71px] border border-[#E3E3ED] transition  max-w-[337px] w-full hover:shadow-cardShadow "
            >
              <div className="w-[74px] h-[74px] flex items-center justify-center bg-[#E1E8FF] group-hover:bg-white rounded-lg transition ">
                {card.icon} {/* Render the icon component */}
              </div>
              <span className="sub-heading tracking-[0.5%] text-left mt-[51px] mb-[20px] text-[#11142D] group-hover:text-white transition ">
                {card.title}
              </span>
              <p className="text-medium font-normal text-left leading-[125%] text-[#11142D] group-hover:text-white transition ">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </CommonLayout>
  );
};

export default WhyUs;
