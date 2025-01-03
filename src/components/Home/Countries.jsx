import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import CountryCard from "./CountryCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/v1/tourists-spot/countries"
      );

      setCountries(response.data.data);
    };

    fetchCountries();
  }, []);

  return (
    <section className="pt-28 pb-12 bg-background">
      <div className="container grid grid-cols-7 gap-6">
        <div className="col-span-2 self-center">
          <SectionTitle
            subtitle="Cherished your memories"
            title="Explore World"
            description="Embark on unforgettable adventures and treasure the moments that define your journey. Discover the world's wonders and create memories that last a lifetime."
            align="left"
          />
        </div>
        <div className="col-span-5 self-center">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 2500 }}
            loop={true}
            modules={[Pagination, Autoplay]}
          >
            {countries.map((country) => (
              <SwiperSlide key={country._id}>
                <CountryCard country={country} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Countries;
