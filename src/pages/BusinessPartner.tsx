import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import {
    partner1,
    partner10,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
    partner9,
} from "../constants/images";

const BusinessPartner = () => {
    return (
        <div className="flex w-full bg-pink-50 justify-center">
            <div className="my-12">
                <h1 className="font-poppins font-bold text-4xl text-center uppercase tracking-wide">
                    Business Partners
                </h1>
                <div className="my-8">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={1}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img width={"200px"} src={partner1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img width={"400px"} src={partner2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img width={"200px"} src={partner3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img width={"200px"} src={partner4} alt="" />
                        </SwiperSlide>
                        {/* <SwiperSlide>
                            <img width={"200px"} src={partner5} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img width={"200px"} src={partner6} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img width={"200px"} src={partner7} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img width={"200px"} src={partner8} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img width={"200px"} src={partner9} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img width={"200px"} src={partner10} alt="" />
                        </SwiperSlide> */}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default BusinessPartner;
