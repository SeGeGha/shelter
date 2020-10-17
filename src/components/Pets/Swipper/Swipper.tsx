import React, { useState, useEffect } from 'react';
import SwiperCore, {
  Navigation, Virtual, A11y, Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import PetCard from '../../PetsCard/PetsCard';

import petsCards from '../../../config/petsCards';
import { SLIDE_WIDTH, MIN_SLIDE_SPACE_BETWEEN, MIN_SLIDE_SPACE_BETWEEN_COUNT } from '../../../config/swiper';

import 'swiper/swiper.scss';
import './Swipper.scss';

SwiperCore.use([Navigation, Virtual, A11y, Autoplay]);

export default () => {
  const [swiperConfig, setSwiperConfig] = useState({
    slidesPerView: 0,
    spaceBetweenSlide: 0,
  });
  const slides = petsCards.map(({
    id, name, type, img,
  }) => (
    <SwiperSlide key={id} virtualIndex={id}>
      <PetCard
        name={name}
        type={type}
        img={img}
      />
    </SwiperSlide>
  ));

  function setSwiperSlidesBoxModel() {
    const swiperContainerWidth = document.querySelector('.swiper-container').clientWidth;
    const maxSlidesPerView = Math.trunc(swiperContainerWidth / SLIDE_WIDTH);
    const slidesWidth = SLIDE_WIDTH * maxSlidesPerView;
    const slidesSpaceCount = maxSlidesPerView - 1 || MIN_SLIDE_SPACE_BETWEEN_COUNT;

    setSwiperConfig({
      slidesPerView: maxSlidesPerView,
      spaceBetweenSlide: (swiperContainerWidth - slidesWidth) / slidesSpaceCount || MIN_SLIDE_SPACE_BETWEEN,
    });
  }

  useEffect(() => setSwiperSlidesBoxModel(), []);
  useEffect(() => {
    window.addEventListener('resize', setSwiperSlidesBoxModel);

    return () => window.removeEventListener('resize', setSwiperSlidesBoxModel);
  }, [swiperConfig]);

  return (
    <Swiper
      spaceBetween={swiperConfig.spaceBetweenSlide}
      slidesPerView={swiperConfig.slidesPerView}
      navigation
      virtual
      autoplay
    >
      {slides}
    </Swiper>
  );
};
