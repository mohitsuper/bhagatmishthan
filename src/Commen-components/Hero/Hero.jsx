// src/components/HeroSwiper.jsx
import React from "react";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import heroswiperimg1 from '../../assets/images/imgi_2_laddu_77247.webp'
import heroswiperimg2 from '../../assets/images/imgi_3_bhagat-banner-current-4-_76611.webp'
import heroswiperimg3 from '../../assets/images/imgi_4_namkeen-2-_3284.webp'

// Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Hero() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      className="h-full w-full object-cover"
    >
      {
        [heroswiperimg1,heroswiperimg2,heroswiperimg3].map((item,index)=>{
            return(
            <SwiperSlide key={index}>
                <img src={item} />
            </SwiperSlide>
            )
        })
      }
    </Swiper>
  );
}
