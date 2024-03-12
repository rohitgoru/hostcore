import React from "react";
import Nav from "../common/Nav";
import HeroContainer from "../common/HeroContainer";
import HeroSlider from "./HeroSlider";
import herobg from "../../assets/images/herobg.webp";
import { HeroForground } from "../common/Icon";

const slides = [
  {
    title: "Unturned Web Hosting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    buttonText: "Get Started",
  },
  {
    title: "Unturned Web Hosting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    buttonText: "Get Started",
  },
  {
    title: "Unturned Web Hosting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    buttonText: "Get Started",
  },
  {
    title: "Unturned Web Hosting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    buttonText: "Get Started",
  },
  {
    title: "Unturned Web Hosting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    buttonText: "Get Started",
  },

  // Add more slides as needed
];

const HeroSection = () => {
  return (
    <>
      <section>
        <HeroContainer>
          <Nav />
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
