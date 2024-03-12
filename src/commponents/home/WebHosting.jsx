import React, { useState } from "react";
import CommonLayout from "../common/CommonLayout";
import { TickIcon } from "../common/Icon";

const WebHosting = () => {
  const [tabOpen, setTabOpen] = useState(1);
  const [isChecked, setIsChecked] = useState(true); // State for the checkbox

  return (
    <>
      <CommonLayout>
        <div className="flex flex-col items-center justify-center lg:pb-[148px] md:pb-[115px] sm:pb-[70px] pb-[50px] text-center ">
          <h2 className="heading text-primary text-center">Web Hosting</h2>

          <div className="flex flex-wrap flex-col md:flex-row items-center md:justify-between justify-center lg:my-[80px] md:my-[70px] sm:my-[50px] my-[30px] md:max-w-[756px]  w-full bg-[#F2F2F2] md:rounded-[56px] rounded-2xl p-3  gap-4">
            <button
              className={`text-large font-medium text-gray3 rounded-[36px]  md:self-stretch self-center ${
                tabOpen === 1
                  ? "bg-primary font-bold px-10 text-white lg:h-[70px] md:h-[60px] sm:h-[50px] h-[40px]"
                  : "px-2 "
              }`}
              onClick={() => setTabOpen(1)}
            >
              Cheap SSD Hosting
            </button>
            <button
              className={`text-large font-medium text-gray3 rounded-[36px]  md:self-stretch self-center ${
                tabOpen === 2
                  ? "bg-primary font-bold px-10 text-white lg:h-[70px] md:h-[60px] sm:h-[50px] h-[40px]"
                  : "px-2 "
              }`}
              onClick={() => setTabOpen(2)}
            >
              Cheap SSD Hosting
            </button>
            <button
              className={`text-large font-medium text-gray3 rounded-[36px]  md:self-stretch self-center ${
                tabOpen === 3
                  ? "bg-primary font-bold px-10 text-white lg:h-[70px] md:h-[60px] sm:h-[50px] h-[40px]"
                  : "px-2 "
              }`}
              onClick={() => setTabOpen(3)}
            >
              Cheap SSD Hosting
            </button>
          </div>
          <div className="flex items-center justify-center max-w-[592px]  gap-[15px] lg:mb-[48px] ms:mb-[36px] sm:mb-[30px] mb-[20px]">
            <span
              className={`text-18  ${
                isChecked ? "text-[#0000007c]  " : "text-primary"
              }`}
            >
              Billed Monthly
            </span>

            <label className="inline-flex items-center  cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={isChecked} // Added checked state
                onChange={() => setIsChecked(!isChecked)} // Added onChange event handler
              />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 outline-none peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            </label>

            <span
              className={`text-18 ${
                isChecked ? " text-primary" : "text-[#0000007c] "
              }`}
            >
              Billed Yearly (save 15%)
            </span>
          </div>
          <div className="flex lg:flex-nowrap flex-wrap items-center justify-center gap-8">
            <div className="flex flex-col md:p-6 sm:p-5 p-3 rounded-lg group  bg-white border border-[#01499A45] shadow-md hosting-card-Shaddow max-w-[389px] w-full md:gap-8 sm:gap-6 gap-5 self-stretch transition duration-300">
              <div className="flex flex-col items-start md:gap-4 gap-2">
                <h4 className="text-xxl text-[#1A1A1A] tracking-[-2%] ">
                  Free
                </h4>
                <span className="text-xxl text-[#1A1A1A] tracking-[-2%] ">
                  $20
                </span>
                <p className=" text-18 font-normal text-left text-[#667085]">
                  Copy should be concise and impactful.
                </p>
              </div>
              <div className="w-full h-[1px] bg-[#D9D9D9]"></div>
              <div className="flex flex-col items-start md:gap-6 sm:gap-4 gap-3">
                <div className="flex items-center gap-3">
                  <div>
                    <TickIcon />
                  </div>
                  <p className="text-18 font-normal text-[#1A1A1A]">
                    Amazing feature one
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <TickIcon />
                  </div>
                  <p className="text-18 font-normal text-[#1A1A1A]">
                    Wonderful feature two
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <TickIcon />
                  </div>
                  <p className="text-18 font-normal text-[#1A1A1A]">
                    Priceless feature three
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <TickIcon />
                  </div>
                  <p className="text-18 font-normal text-[#1A1A1A]">
                    Splended feature four
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <TickIcon />
                  </div>
                  <p className="text-18 font-normal text-[#1A1A1A]">
                    Splended feature four
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <TickIcon />
                  </div>
                  <p className="text-18 font-normal text-[#1A1A1A]">
                    Splended feature four
                  </p>
                </div>
              </div>
              <button className="text-18 text-[#01499A] font-bold py-4 rounded-[4px] border-[2px] border-[#01499A] group-hover:text-white group-hover:bg-[#01499A] transition duration-300">
                Get Started Now
              </button>
            </div>

            {/*  */}
            <div className="flex flex-col md:p-6 sm:p-5 p-3 rounded-lg group  bg-white border border-[#01499A45] shadow-md hosting-card-Shaddow max-w-[389px] w-full md:gap-8 sm:gap-6 gap-5 self-stretch transition duration-300 ">
              <div className="flex flex-col items-start md:gap-4 gap-2">
                <h4 className="text-xxl text-[#1A1A1A] tracking-[-2%] ">Pro</h4>
                <span className="text-xxl text-[#1A1A1A] tracking-[-2%] ">
                  $50 <span className="text-small text-[#1A1A1A]">/ Year</span>
                </span>
                <p className=" text-18 font-normal text-left text-[#667085]">
                  Copy should be concise and impactful.
                </p>
              </div>
              <div className="w-full h-[1px] bg-[#D9D9D9]"></div>
              <div className="flex flex-col items-start md:gap-6 sm:gap-4 gap-3">
                <h3 className="text-18 text-[#667085] font-normal">
                  Everything in the Free plan, plus
                </h3>
                <div className="flex items-center gap-3">
                  <div>
                    <TickIcon />
                  </div>
                  <p className="text-18 font-normal text-[#1A1A1A]">
                    Amazing feature one
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <TickIcon />
                  </div>
                  <p className="text-18 font-normal text-[#1A1A1A]">
                    Wonderful feature two
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <TickIcon />
                  </div>
                  <p className="text-18 font-normal text-[#1A1A1A]">
                    Priceless feature three
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <TickIcon />
                  </div>
                  <p className="text-18 font-normal text-[#1A1A1A]">
                    Splended feature four
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <TickIcon />
                  </div>
                  <p className="text-18 font-normal text-[#1A1A1A]">
                    Splended feature four
                  </p>
                </div>
              </div>
              <button className="text-18 text-[#01499A] font-bold py-4 rounded-[4px] border-[2px] border-[#01499A] group-hover:text-white group-hover:bg-[#01499A] transition duration-300">
                Subscribe Now
              </button>
            </div>

            {/*  */}
            <div className="flex flex-col md:p-6 sm:p-5 p-3 rounded-lg group  bg-white border border-[#01499A45] shadow-md hosting-card-Shaddow max-w-[389px] w-full md:gap-8 sm:gap-6 gap-5 self-stretch transition duration-300 ">
              <div className="flex flex-col items-start md:gap-4 gap-2">
                <h4 className="text-xxl text-[#1A1A1A] tracking-[-2%] ">
                  Enterprise
                </h4>
                <span className="text-xxl text-[#1A1A1A] tracking-[-2%] ">
                  $200
                </span>
                <p className=" text-18 font-normal text-left text-[#667085]">
                  Copy should be concise and impactful.
                </p>
              </div>
              <div className="w-full h-[1px] bg-[#D9D9D9]"></div>
              <div className="flex flex-col items-start md:gap-6 sm:gap-4 gap-3">
                <h3 className="text-18 text-[#667085] font-normal">
                  Everything in the Pro plan, plus
                </h3>
                <div className="flex items-center gap-3">
                  <div>
                    <TickIcon />
                  </div>
                  <p className="text-18 font-normal text-[#1A1A1A]">
                    Amazing feature one
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <TickIcon />
                  </div>
                  <p className="text-18 font-normal text-[#1A1A1A]">
                    Wonderful feature two
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <TickIcon />
                  </div>
                  <p className="text-18 font-normal text-[#1A1A1A]">
                    Priceless feature three
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <TickIcon />
                  </div>
                  <p className="text-18 font-normal text-[#1A1A1A]">
                    Splended feature four
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <TickIcon />
                  </div>
                  <p className="text-18 font-normal text-[#1A1A1A]">
                    Splended feature four
                  </p>
                </div>
              </div>
              <button className="text-18 text-[#01499A] font-bold py-4 rounded-[4px] border-[2px] border-[#01499A] group-hover:text-white group-hover:bg-[#01499A] transition duration-300">
                Get it Now
              </button>
            </div>
          </div>
        </div>
      </CommonLayout>
    </>
  );
};

export default WebHosting;
