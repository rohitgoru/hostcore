import React, { useState } from "react";
import Nav from "../common/Nav";
import HeroContainer from "../common/HeroContainer";
import HeroSlider from "./HeroSlider";
import herobg from "../../assets/images/herobg.webp";
import { HeroForground } from "../common/Icon";
import Sidebar from "../common/Sidebar";

const slides = [
  {
    title: "Unturned Web Hosting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    buttonText: "Get Started",
  },
  {
    title: "Vercel Web Hosting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    buttonText: "Get Started",
  },
  {
    title: "Firebase Web Hosting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    buttonText: "Get Started",
  },
  {
    title: "Hostinger Web Hosting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    buttonText: "Get Started",
  },
  {
    title: "Natilyfy Web Hosting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    buttonText: "Get Started",
  },

  // Add more slides as needed
];

const HeroSection = () => {
  const [showSidebr, SetShowSidebar] = useState(false);

  const handleClick = () => {
    SetShowSidebar(!showSidebr);
    if (!showSidebr) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };
  const closeSidebar = () => {
    console.log("clicked");
    if (showSidebr) {
      handleClick();
    }
  };
  return (
    <>
      <section>
        <Sidebar showSidebr={showSidebr} click={handleClick} />
        <div
          className={`overlay fixed top-0 left-0  h-screen w-screen bg-[f5f3f400] backdrop-blur-[10px]  z-40 overflow-hidden ${
            showSidebr ? "" : "hidden"
          }`}
          onClick={closeSidebar}
        ></div>
        <HeroContainer>
          <Nav click={handleClick} showSidebr={showSidebr} />
        </HeroContainer>
        <div
          className="relative w-full flex justify-center items-center bg-no-repeat bg-center bg-cover sm:px-4 px-3  h-[90vh] "
          style={{ backgroundImage: `url(${herobg})` }}
        >
          <div className="absolute hidden md:block bottom-0 left-[200px]">
            <HeroForground />
          </div>
          <HeroSlider slides={slides} />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
