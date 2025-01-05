import PropTypes from "prop-types";
import seasonalityIcon from "../../assets/icon/seasonality.png";
import locationIcon from "../../assets/icon/location.png";
import travelerIcon from "../../assets/icon/traveler.png";
import { Link } from "react-router-dom";

const DestinationCard = ({ destination }) => {
  const {
    _id,
    image,
    tourists_spot_name,
    country_name,
    short_description,
    average_cost,
    seasonality,
    totalVisitorsPerYear,
  } = destination;
  return (
    <Link to={`/tourists-spot/${_id}`}>
      <div className="overflow-hidden relative rounded-2xl border border-secondary group">
        <img
          src={image}
          className="h-[600px] object-cover scale-100 transition-all ease-in-out duration-500 group-hover:scale-125"
          alt=""
        />

        <div className="pt-4 pb-6 px-7 absolute w-full min-h-[165px] bottom-0 left-0 right-0 z-10 bg-background transition-all ease-in-out duration-300 translate-y-24 group-hover:translate-y-0">
          <div className="flex items-center justify-between">
            <h2 className="font-palanquin_park text-primary text-2xl font-semibold">
              {tourists_spot_name}
            </h2>
            <p className="font-palanquin_park font-semibold text-primary text-lg">
              Cost: ${average_cost}
            </p>
          </div>

          <p className="font-montserrat text-base text-des_gray my-2 opacity-0 translate-y-8 transition-all ease-in-out duration-300 delay-150 group-hover:opacity-100 group-hover:translate-y-0">
            {short_description.substring(0, 90) + "..."}
          </p>
          <div className="flex items-center gap-6  opacity-0 translate-y-8 transition-all ease-in-out duration-300 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
            <div className="flex items-center gap-3">
              <img src={seasonalityIcon} className="size-6" alt="" />
              <p className="text-des_gray text-lg font-montserrat font-semibold">
                {seasonality}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img src={locationIcon} className="size-6" alt="" />
              <p className="text-des_gray text-lg font-montserrat font-semibold">
                {country_name}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img src={travelerIcon} className="size-6" alt="" />
              <p className="text-des_gray text-lg font-montserrat font-semibold">
                {totalVisitorsPerYear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

DestinationCard.propTypes = {
  destination: PropTypes.object.isRequired,
};

export default DestinationCard;
