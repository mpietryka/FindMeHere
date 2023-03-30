import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { StatBox } from "../statBox/StatBox";
import "swiper/css";
import "swiper/css/navigation";

export const Swipe = ({ clicks, clicksPerPlatform }) => {
  return (
    <>
      <div className="md:hidden mx-auto w-11/12 my-4">
        <Swiper spaceBetween={0} slidesPerView={1} className="mySwiper">
          <SwiperSlide className="my-2">
            <StatBox name={"Total "} clicks={clicks.length} />
          </SwiperSlide>
          {clicksPerPlatform.map((click, i) => (
            <SwiperSlide className="my-2" key={i}>
              <StatBox name={click.platform} clicks={click.occurrence} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden md:block mx-auto w-11/12 my-3">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={3}
          className="mySwiper"
        >
          <SwiperSlide className="my-2">
            <StatBox name={"Total "} clicks={clicks.length} />
          </SwiperSlide>
          {clicksPerPlatform.map((click, i) => (
            <SwiperSlide className="my-2" key={i}>
              <StatBox name={click.platform} clicks={click.occurrence} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
