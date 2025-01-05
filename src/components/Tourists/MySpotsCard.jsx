import PropTypes from "prop-types";
import seasonalityIcon from "../../assets/icon/seasonality.png";
import locationIcon from "../../assets/icon/location.png";
import travelerIcon from "../../assets/icon/traveler.png";
import calendarIcon from "../../assets/icon/calendar.png";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "axios";
import Toast from "../../utils/Toast";

const MySpotsCard = ({ destination }) => {
  const {
    _id,
    image,
    tourists_spot_name,
    travel_time,
    country_name,
    short_description,
    average_cost,
    seasonality,
    totalVisitorsPerYear,
  } = destination;

  const handleSpotDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#325437",
      cancelButtonColor: "#a7bb89",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/tourists-spot/delete-spot/${id}`
      );

      if (response.data.data.deletedCount > 0) {
        Toast.fire({
          icon: "success",
          title: "Tourist spot has been deleted.",
        });
      } else {
        Toast.fire({
          icon: "error",
          title: "Something went wrong while deleting tourist spot",
        });
      }
    }
  };

  return (
    <div className="p-4 space-y-3 rounded-[20px] border border-transparent duration-300 transition-all hover:border-secondary">
      <img
        src={image}
        className="h-[340px] object-cover object-center rounded-[20px]"
        alt=""
      />

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <img src={seasonalityIcon} className="size-3" alt="" />
          <p className="font-montserrat text-sm text-des_gray">{seasonality}</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={locationIcon} className="size-3" alt="" />
          <p className="font-montserrat text-sm text-des_gray">
            {country_name}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img src={travelerIcon} className="size-3" alt="" />
          <p className="font-montserrat text-sm text-des_gray">
            {totalVisitorsPerYear}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img src={calendarIcon} className="size-3" alt="" />
          <p className="font-montserrat text-sm text-des_gray">{travel_time}</p>
        </div>
        <div className="flex items-center gap-2">
          <FaDollarSign className="text-sm text-secondary" />
          <p className="font-montserrat text-sm text-des_gray">
            {average_cost}
          </p>
        </div>
      </div>

      <h2 className="font-palanquin_park text-primary text-2xl font-semibold pb-3 border-b border-secondary/60">
        {tourists_spot_name}
      </h2>

      <p className="text-base text-des_gray font-montserrat mb-4">
        {short_description}
      </p>

      <div className="flex items-center gap-3">
        <Link
          to={`/tourists-spot/${_id}`}
          className="py-3 px-6 rounded-lg bg-primary text-white text-2xl transition-all duration-300 hover:bg-primary/80"
        >
          <IoIosEye />
        </Link>
        <Link
          to={`/update-tourists-spot/${_id}`}
          className="py-3 px-6 rounded-lg bg-black text-white text-2xl transition-all duration-300 hover:bg-black/80"
        >
          <FaEdit />
        </Link>
        <button
          onClick={() => handleSpotDelete(_id)}
          className="py-3 px-6 rounded-lg bg-red-500 text-white text-2xl transition-all duration-300 hover:bg-red-400"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

MySpotsCard.propTypes = {
  destination: PropTypes.object.isRequired,
};

export default MySpotsCard;
