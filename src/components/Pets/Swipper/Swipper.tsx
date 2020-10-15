import React, { useState, useEffect } from 'react';
import SwiperCore, {
  Navigation, Virtual, A11y, Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '../../Button/Button';

import petsCards from '../../../config/petsCards';
import slideWidth from '../../../config/swiper';

import 'swiper/swiper.scss';
import './Swipper.scss';

SwiperCore.use([Navigation, Virtual, A11y, Autoplay]);

export default () => {
  const [swiperConfig, setSwiperConfig] = useState({
    slidesPerView: 0,
    spaceBetweenSlide: 0,
  });
  const slides = petsCards.map(({
    id, name, species, imgSrc,
  }) => (
    <SwiperSlide key={id} virtualIndex={id}>
      <img
        src={imgSrc}
        alt={`${species} ${name}`}
      />
      <h4>{name}</h4>
      <Button type="secondary">Learn more </Button>
    </SwiperSlide>
  ));

  function setSwiperSlidesBoxModel() {
    const swiperContainerWidth = document.querySelector('.swiper-container').clientWidth;
    const maxSlidesPerView = Math.trunc(swiperContainerWidth / slideWidth);
    const slidesWidth = slideWidth * maxSlidesPerView;
    const slidesSpaceCount = maxSlidesPerView - 1 || 1;

    setSwiperConfig({
      slidesPerView: maxSlidesPerView,
      spaceBetweenSlide: (swiperContainerWidth - slidesWidth) / slidesSpaceCount,
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
