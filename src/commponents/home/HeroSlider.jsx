import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NextIcon, PrevIcon } from "../common/Icon";

const HeroSlider = ({ slides }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      pagination={{
        clickable: true,
      }}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper h-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center gap-[33px] max-w-[683px] w-full mx-auto lg:mt-[168px] md:mt-[140px] mt-[120px]">
            <div className="flex flex-col gap-[11px]">
              <h1 className="hero-heading text-white text-center">
                {slide.title}
              </h1>
              <p className="text-medium text-white text-center font-medium">
                {slide.description}
              </p>
            </div>
            <div className="flex items-center justify-center lg:max-w-[164px] md:max-w-[135px] sm:max-w-[125px] max-w-[115px] w-full lg:h-[45px] md:h-[42px] sm:h-[40px] h-[38px] ">
              <button className="bg-transprent !text-white rounded-[4px]   flex items-center justify-center text-nowrap  hover:!text-primary hover:border-primary transition-all duration-200 w-full h-full border border-white ">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className="swiper-button-prev" ref={prevRef}>
        <PrevIcon />
      </div>
      <div className="swiper-button-next" ref={nextRef}>
        <NextIcon />
      </div>
    </Swiper>
  );
};

export default HeroSlider;
