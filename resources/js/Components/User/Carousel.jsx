import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Carousel = (props) => {
    return (
        <Swiper
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper mb-6 h-40 md:h-80 lg:h-96 rounded-md hover:cursor-pointer"
        >
            {props.carousel.map((data, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="bg-bottom">
                            <img
                                src={"/storage/" + `${data.image}`}
                                className=""
                                alt="Tailwind CSS Carousel component"
                            />
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Carousel;
