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
//
const WhyUs = () => {
  return (
    <CommonLayout>
      <div className="flex flex-col items-center justify-center lg:py-[148px] md:py-[115px] sm:py-[70px] py-[50px] text-center ">
        <h2 className="heading text-primary text-center">Why Us?</h2>
        <div className="flex flex-wrap justify-center  items-center lg:gap-y-[60px] md:gap-y-[40px] sm:gap-y-[26px] gap-y-[18px] xl:gap-x-[110px]  md:gap-x-[50px] gap-x-[30px] lg:mt-[84px] md:mt-[70px] sm:mt-[50px] mt-[30px] w-full">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="card flex flex-col md:items-start items-center group rounded-lg bg-white hover:bg-primary xl:pt-8 pt-6 xl:px-7 px-5 xl:pb-[71px] lg:pb-[50px] md:pb-[40px] sm:pb-[30px] pb-[24px] border border-[#E3E3ED] transition self-stretch xl:max-w-[337px] lg:max-w-[280px] md:max-w-[270px] sm:max-w-[70%] w-full hover:shadow-cardShadow "
            >
              <div className="lg:w-[74px] lg:h-[74px] w-[70px] h-[70px] flex items-center justify-center bg-[#E1E8FF] group-hover:bg-white rounded-lg transition ">
                {card.icon} {/* Render the icon component */}
              </div>
              <span className="sub-heading tracking-[0.5%] lg:text-start text-center xl:mt-[51px] lg:mt-[41px] md:mt-[36px] sm:mt-[30px] mt-[26px] xl:mb-[20px] lg:mb-[16px] md:mb-[12px] mb-2 text-[#11142D] group-hover:text-white transition ">
                {card.title}
              </span>
              <p className="text-medium lg:text-start text-center font-normal  leading-[125%] text-[#11142D] group-hover:text-white transition ">
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
