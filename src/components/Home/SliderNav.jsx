// import { useSwiper } from "swiper/react";
import PropTypes from "prop-types";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

const SliderNav = ({ swiper }) => {
  // const swipe = useSwiper();

  return (
    <div className="text-black flex items-center justify-center w-56 gap-3">
      <button
        onClick={() => swiper.slidePrev()}
        className="inline-block rounded-full p-2 border border-black hover:text-primary hover:border-primary text-center"
      >
        <HiArrowSmLeft className="inline-block text-2xl" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="inline-block rounded-full p-2 border border-black hover:text-primary hover:border-primary text-center"
      >
        <HiArrowSmRight className="inline-block text-2xl" />
      </button>
    </div>
  );
};

SliderNav.propTypes = { swiper: PropTypes.object.isRequired };

export default SliderNav;
