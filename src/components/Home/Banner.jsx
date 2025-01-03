// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Autoplay, Controller } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import BannerSlider from "./BannerSlider";
import SliderNav from "./SliderNav";
import PaginationSlider from "./PaginationSlider";

const Banner = () => {
  const [slides, setSlides] = useState([]);
  const [bannerSwiper, setBannerSwiper] = useState(null);
  const [paginationSwiper, setPaginationSwiper] = useState(null);

  console.log({ bannerSwiper, paginationSwiper });

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/tourists-spot/sliders"
        );
        setSlides(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSlides();
  }, []);

  return (
    <section className="">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[EffectFade, Autoplay, Controller]}
        onSwiper={setBannerSwiper}
        controller={{ control: paginationSwiper }}
        className="mySwiper relative"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide._id}>
            <BannerSlider
              image={slide.image}
              title={slide.title}
              subtitle={slide.subtitle}
            />
          </SwiperSlide>
        ))}
        <div className="absolute z-10 w-full bottom-0 right-0">
          <div className="max-w-[1660px] bg-background rounded-tl-[3vw] ml-auto flex items-center justify-between">
            <div className="w-[550px] p-10">
              <p className="font-montserrat text-[26px] font-semibold text-black">
                Top destinations suggested by travelled users
              </p>
            </div>

            <div className="grow w-[830px] -mt-16">
              <PaginationSlider
                slides={slides}
                setPaginationSwiper={setPaginationSwiper}
                bannerSwiper={bannerSwiper}
              />
            </div>

            <SliderNav swiper={bannerSwiper} />
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Banner;
