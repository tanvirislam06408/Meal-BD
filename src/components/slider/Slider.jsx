import React from 'react';
import slide from '../../assets/360_F_582073652_lDHmNztz9Di6edwe0gmGzIL5PzC8uj2w.webp';
import slide2 from '../../assets/pexels-ngqah83-884600.jpg';
import slide3 from '../../assets/pexels-roman-odintsov-5837103.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <Swiper
      pagination={true}
      navigation={true}
      loop={true}
      modules={[Pagination, Navigation]}
      className="mySwiper h-[50vh]"
    >
      <SwiperSlide>
        <div className="w-full h-full">
          <img className="w-full h-full object-cover block" src={slide2} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full">
          <img className="w-full h-full object-cover block" src={slide} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}