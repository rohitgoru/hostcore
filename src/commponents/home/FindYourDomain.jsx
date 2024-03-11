import React from "react";
import CommonLayout from "../common/CommonLayout";
import ButtonPrimary from "../common/ButtonPrimary";
import finddomain from "../../assets/images/FindYourDomain.webp";
const FindYourDomain = () => {
  return (
    <>
      <div
        className="bg-cover"
        style={{ backgroundImage: `url(${finddomain})` }}
      >
        <CommonLayout>
          <div className="flex flex-col items-center justify-center pt-[38px] pb-[158px] text-center">
            <h2 className="heading text-primary text-center">
              Find Your Domain Now!
            </h2>
            <p className="text-medium leading-[120%] text-gray1 mt-[12px] mb-[51px] text-center">
              Get Your domain name immediately with prices starting at only $5
            </p>

            <form action="get" className="max-w-[705px] w-full">
              <div className="bg-white  w-full flex justify-between rounded-2xl items-center p-3">
                <input
                  className="max-w-[350px] lg:h-[45px] md:h-[42px] sm:h-[40px] h-[38px] w-full outline-none ml-[10px] text-medium leading-[120%]"
                  type="text"
                  name="text"
                  id="text"
                  placeholder="mydomainname.com"
                />
                <button
                  className="lg:max-w-[164px] md:max-w-[135px] sm:max-w-[125px] max-w-[115px] w-full lg:h-[45px] md:h-[42px] sm:h-[40px] h-[38px]"
                  type="submit"
                >
                  <ButtonPrimary primary={"Check Now"} />
                </button>
              </div>
            </form>
          </div>
        </CommonLayout>
      </div>
    </>
  );
};

export default FindYourDomain;
