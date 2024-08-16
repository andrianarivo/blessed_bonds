import React from 'react';
import { useSwiper } from 'swiper/react';

const SwiperNextButton = () => {
  const swiper = useSwiper();
  return (
    <button
      className="btn btn-circle bg-gray-300"
      type="button"
      onClick={() => {
        swiper.slideNext();
      }}
    >
      <span className="material-symbols-rounded text-3xl">chevron_right</span>
    </button>
  );
};

SwiperNextButton.propTypes = {};

export default SwiperNextButton;
