import React from "react";
import CommonLayout from "../common/CommonLayout";
import ButtonPrimary from "../common/ButtonPrimary";
import finddomain from "../../assets/images/FindYourDomain.webp";
import { FindDomainForground } from "../common/Icon";
const FindYourDomain = () => {
  return (
    <>
      <div
        className="bg-cover relative z-10"
        style={{ backgroundImage: `url(${finddomain})` }}
      >
        <div className="absolute hidden sm:block bottom-[32px] right-[180px] -z-10">
          <FindDomainForground />
        </div>
        <CommonLayout>
          <div className="flex flex-col items-center justify-center pt-[38px] lg:pb-[158px] sm:pb-[135px] pb-[50px] text-center">
            <h2 className="heading text-primary text-center">
              Find Your Domain Now!
            </h2>
            <p className="text-medium leading-[120%] text-gray1 mt-[12px] md:mb-[51px] sm:mb-[30px] mb-[15px] text-center">
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
                <div
                  className="lg:max-w-[164px] md:max-w-[135px] sm:max-w-[125px] max-w-[115px] w-full lg:h-[45px] md:h-[42px] sm:h-[40px] h-[38px]"
                  type="submit"
                >
                  <ButtonPrimary primary={"Check Now"} />
                </div>
              </div>
            </form>
          </div>
        </CommonLayout>
      </div>
    </>
  );
};

export default FindYourDomain;
