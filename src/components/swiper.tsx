import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Car } from '@/data/data';
import cars from '@/data/data';
import { useRouter } from 'next/router';

import 'swiper/css';
import 'swiper/css/navigation';



import { Navigation } from 'swiper/modules';

export default function SwipInt() {

  const router = useRouter();
  const { abbreviation } = router.query;

  const car: Car | undefined = cars.find((car) => car.abbreviation === abbreviation);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper action_opened">
        <SwiperSlide >
          <img src={car.swiper[0]} alt={car.name} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car.swiper[1]} alt={car.name} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car.swiper[2]} alt={car.name} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car.swiper[3]} alt={car.name} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car.swiper[4]} alt={car.name} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car.swiper[5]} alt={car.name} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
