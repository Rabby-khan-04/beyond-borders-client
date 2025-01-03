import PropTypes from "prop-types";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Controller } from "swiper/modules";

const PaginationSlider = ({ slides, setPaginationSwiper, bannerSwiper }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        modules={[Controller]}
        onSwiper={setPaginationSwiper}
        controller={{ control: bannerSwiper }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={slide._id}
            onClick={() => bannerSwiper.slideTo(index)}
            className="cursor-pointer"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full rounded-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

PaginationSlider.propTypes = {
  slides: PropTypes.array,
  setPaginationSwiper: PropTypes.func,
  bannerSwiper: PropTypes.object,
};

export default PaginationSlider;
