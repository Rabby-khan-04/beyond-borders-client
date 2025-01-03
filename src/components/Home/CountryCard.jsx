import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const CountryCard = ({ country }) => {
  const { image, country_name, description } = country;
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="relative bg-center bg-cover bg-no-repeat h-[576px] rounded-full flex items-end justify-center py-14 px-10 overflow-hidden group"
    >
      <div className="bg-primary/0 group-hover:bg-primary/50  transition-all duration-300 ease-in-out delay-150 absolute top-0 left-0 inset-0 -z-[1px] pointer-events-none"></div>
      <div className="relative z-10 text-center">
        <h2 className="font-palanquin_park font-bold text-white text-5xl mb-6 delay-[60ms] translate-y-12 transition-all duration-[375ms] ease-[cubic-bezier(0.7, 0, 0.3, 1)] group-hover:translate-y-0">
          {country_name}
        </h2>
        <p className="mb-5 font-montserrat font-normal text-white text-base delay-[100ms] translate-y-12 transition-all duration-[500ms] ease-[cubic-bezier(0.7, 0, 0.3, 1)] group-hover:translate-y-0">
          {description.substring(0, 55) + "..."}
        </p>

        <Link
          to="/"
          className="text-white uppercase text-xs font-montserrat flex items-center justify-center gap-0.5 delay-200 translate-y-12 opacity-0 transition-all duration-[375ms] ease-[cubic-bezier(0.7, 0, 0.3, 1)] group-hover:translate-y-0 group-hover:opacity-100"
        >
          <span>Read More</span>
          <FaAngleRight className="text-base text-white" />
        </Link>
      </div>
    </div>
  );
};

CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryCard;
