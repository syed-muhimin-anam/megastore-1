import React, { useRef, useState } from 'react';
import banner1 from '../../assets/banner-1.webp'
import banner2 from '../../assets/banner-2.webp'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination } from 'swiper/modules';
import { Autoplay,  Navigation } from 'swiper/modules';

const Sweiper = () => {
  return (
    <div>
    <Swiper
         spaceBetween={30}
         centeredSlides={true}
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
         }}
         pagination={{
           clickable: true,
         }}
         navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
         className="mySwiper">
        <SwiperSlide>
            <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={banner2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Sweiper