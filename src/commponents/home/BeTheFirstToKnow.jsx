import React from "react";
import CommonLayout from "../common/CommonLayout";
import BeTheFirst from "../../assets/images/BeTheFirstToKnow.webp";
import ButtonPrimary from "../common/ButtonPrimary";
import {
  DiscordIcon,
  TickIcon,
  TickTokIcon,
  YouTubeIcon,
} from "../common/Icon";

const BeTheFirstToKnow = () => {
  return (
    <>
      <section className="relative">
        <CommonLayout>
          <div
            className="w-full bg-cover bg-center bg-no-repeat md:pt-[60px] sm:pt-[50px] pt-[30px] md:pb-[75px] sm:pb-[50px] pb-[30px] flex justify-center items-center rounded-[20px] z-10 px-4"
            style={{ backgroundImage: `url(${BeTheFirst})` }}
          >
            <div className="max-w-[521px] flex flex-col justify-center items-center md:gap-[50px] sm:gap-[40px] gap-[30px] ">
              <div className="flex flex-col items-center gap-[10px]">
                <h2 className="text-[#2A3342] footer-heading tracking-[-2%] text-center">
                  Be the first to know!
                </h2>
                <p className="text-[#556987] text-center text-large font-medium">
                  Stay in the loop with everything you need to know.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                <form action="post" className="w-full">
                  <div className="flex justify-center sm:flex-row flex-col items-center gap-[20px] h-full w-full">
                    <input
                      className=" w-full bg-white px-[10px] lg:h-[45px] md:h-[42px] sm:h-[40px] h-[38px] rounded-lg border border-[#D5DAE1] outline-none"
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="Enter your email"
                    />
                    <div
                      className="lg:max-w-[144px] md:max-w-[130px] sm:max-w-[120px] max-w-[90px] w-full lg:h-[45px] md:h-[42px] sm:h-[40px] h-[38px]"
                      type="submit"
                    >
                      <ButtonPrimary primary={"Subscribe"} />
                    </div>
                  </div>
                </form>
                <p className="text-[10px] text-[#556987] font-medium leading-[180%] sm:self-start self-auto">
                  We care about your data in our{" "}
                  <span className="text-[#01499A]">privacy policy</span>
                </p>
              </div>
            </div>
          </div>
        </CommonLayout>
        <footer className="flex flex-col items-center pt-[186px] bg-[#f4f6ff] w-full px-3 absolute md:top-[200px]  top-[130px] -z-10">
          <div className="flex items-center justify-center w-full px-5">
            <ul className="text-[#0A142F] nav-text font-normal flex flex-wrap items-center sm:justify-between justify-center lg:max-w-[567px] max-w-[467px] w-full gap-3">
              <li>
                <a className="text-[#0A142F] text-nowrap" href="/">
                  About us
                </a>
              </li>
              <li>
                <a className="text-[#0A142F] text-nowrap" href="/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-[#0A142F] text-nowrap" href="/">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="text-[#0A142F] text-nowrap" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center max-w-[176px] w-full md:mt-[28px] mt-[16px] md:mb-[43px] mb-[22px]">
            <a href="/">
              <DiscordIcon />
            </a>
            <a href="/">
              <TickTokIcon />
            </a>
            <a href="/">
              <YouTubeIcon />
            </a>
          </div>
          <p className="text-small text-[#0A142F] text-nowrap text-center">
            © Copyright 2024 ServersNow
          </p>
        </footer>
      </section>
    </>
  );
};

export default BeTheFirstToKnow;
