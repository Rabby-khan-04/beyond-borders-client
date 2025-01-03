import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BannerSlider = ({ image, title, subtitle }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
      className="bg-center bg-cover bg-no-repeat h-screen bg-blend-multiply"
    >
      <div className="container h-full flex items-center justify-center">
        <div className="text-center text-white max-w-[960px]">
          <h3 className="text-5xl font-mansalva font-semibold mb-6">
            {subtitle}
          </h3>
          <h2 className="text-[100px] font-palanquin_park font-bold mb-12 leading-none">
            {title}
          </h2>
          <Link className="primary__btn" to="/">
            Travel Guide
          </Link>
        </div>
      </div>
    </div>
  );
};

BannerSlider.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default BannerSlider;
