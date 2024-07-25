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
      <span className="material-symbols-outlined text-xl ml-1">
        arrow_back_ios
      </span>
    </button>
  );
};

SwiperPrevButton.propTypes = {};

export default SwiperPrevButton;
