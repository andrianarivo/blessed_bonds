import React from 'react';
import { useSwiper } from 'swiper/react';

const SwiperPrevButton = () => {
  const swiper = useSwiper();
  return (
    <button
      className="btn btn-circle bg-gray-300"
      type="button"
      onClick={() => {
        swiper.slidePrev();
      }}
    >
      <span className="material-symbols-rounded text-3xl">chevron_left</span>
    </button>
  );
};

SwiperPrevButton.propTypes = {};

export default SwiperPrevButton;
