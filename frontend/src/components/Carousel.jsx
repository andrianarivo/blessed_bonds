import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';
import SwiperPrevButton from './swipper/SwiperPrevButton';
import SwiperNextButton from './swipper/SwiperNextButton';

const Carousel = ({ children }) => {
  const swiperCtaClass = classNames('flex', 'justify-between', 'my-2', {
    invisible: Children.count(children) <= 0,
  });

  return (
    <Swiper slidesPerView={1}>
      {Children.map(children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
      <div className={swiperCtaClass}>
        <SwiperPrevButton />
        <SwiperNextButton />
      </div>
    </Swiper>
  );
};

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Carousel;
