import React from 'react';
import Slide1 from "../Components/image/screen1.jpg.webp";
import Slide2 from "../Components/image/screen2.jpg.webp";
import Slide3 from "../Components/image/screen3.jpg.webp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";


const Slide = () => {
    return (
        <div className='my-5 py-5 container'>
            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>

                    {({ isNext }) => (
                        <div className={isNext ? "active_slide" : ""}><img src={Slide1} alt="" /> </div>
                    )}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isNext }) => (
                        <div className={isNext ? "active_slide" : ""}><img src={Slide2} alt="" /> </div>
                    )}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isNext }) => (
                        <div className={isNext ? "active_slide" : ""}><img src={Slide3} alt="" /> </div>
                    )}
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Slide;