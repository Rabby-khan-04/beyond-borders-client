import { useForm } from "react-hook-form";
import touristsSpotBG from "../../assets/image/add-tourists-spot-bg.jpg";
import SectionTitle from "../../components/Shared/SectionTitle";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import Toast from "../../utils/Toast";

const AddTouristsSpot = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAddNewSpot = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/tourists-spot/add-spot",
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.data) {
        Toast.fire({
          icon: "success",
          title: "Tourists spot added successfully!!",
        });
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section
        style={{ backgroundImage: `url(${touristsSpotBG})` }}
        className="bg-cover bg-center bg-no-repeat py-12 bg-black/50 bg-blend-multiply h-[600px] flex items-center justify-center"
      >
        <div className="container">
          <h1 className="text-white text-6xl font-bold font-palanquin_park text-center capitalize">
            Add new tourists spot
          </h1>
        </div>
      </section>

      <section className="py-28 bg-background">
        <div className="container">
          <SectionTitle
            title="Discover & Share New Destinations"
            subtitle="Create a New Destination"
          />

          <form
            onSubmit={handleSubmit(handleAddNewSpot)}
            className="max-w-6xl mx-auto space-y-6"
          >
            <div className="flex items-center gap-6">
              <div className="w-full space-y-4">
                <label className="input__label" htmlFor="image">
                  Image
                </label>
                <input
                  type="url"
                  id="image"
                  className="input"
                  placeholder="Enter image url"
                  {...register("image", { required: true })}
                />
                {errors.image && (
                  <span className="text-red-600 text-base font-raleway inline-block">
                    This field is required
                  </span>
                )}
              </div>
              <div className="w-full space-y-4">
                <label className="input__label" htmlFor="tourists_spot_name">
                  Tourists Spot Name
                </label>
                <input
                  type="text"
                  id="tourists_spot_name"
                  className="input"
                  placeholder="Enter tourists spot name"
                  {...register("tourists_spot_name", { required: true })}
                />
                {errors.tourists_spot_name && (
                  <span className="text-red-600 text-base font-raleway inline-block">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-full space-y-4">
                <label className="input__label" htmlFor="country_name">
                  Country Name
                </label>
                <input
                  type="text"
                  id="country_name"
                  className="input"
                  placeholder="Enter country name"
                  {...register("country_name", { required: true })}
                />
                {errors.country_name && (
                  <span className="text-red-600 text-base font-raleway inline-block">
                    This field is required
                  </span>
                )}
              </div>
              <div className="w-full space-y-4">
                <label className="input__label" htmlFor="location">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  className="input"
                  placeholder="Enter tourists spot name"
                  {...register("location", { required: true })}
                />
                {errors.location && (
                  <span className="text-red-600 text-base font-raleway inline-block">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-full space-y-4">
                <label className="input__label" htmlFor="short_description">
                  Short Description
                </label>
                <input
                  type="text"
                  id="short_description"
                  className="input"
                  placeholder="Enter short description"
                  {...register("short_description", { required: true })}
                />
                {errors.short_description && (
                  <span className="text-red-600 text-base font-raleway inline-block">
                    This field is required
                  </span>
                )}
              </div>
              <div className="w-full space-y-4">
                <label className="input__label" htmlFor="average_cost">
                  Average Cost
                </label>
                <input
                  type="text"
                  id="average_cost"
                  className="input"
                  placeholder="Enter average cost"
                  {...register("average_cost", { required: true })}
                />
                {errors.average_cost && (
                  <span className="text-red-600 text-base font-raleway inline-block">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-full space-y-4">
                <label className="input__label" htmlFor="seasonality">
                  Seasonality
                </label>
                <input
                  type="text"
                  id="seasonality"
                  className="input"
                  placeholder="Enter seasonality"
                  {...register("seasonality", { required: true })}
                />
                {errors.seasonality && (
                  <span className="text-red-600 text-base font-raleway inline-block">
                    This field is required
                  </span>
                )}
              </div>
              <div className="w-full space-y-4">
                <label className="input__label" htmlFor="travel_time">
                  Travel Time
                </label>
                <input
                  type="text"
                  id="travel_time"
                  className="input"
                  placeholder="Enter travel time "
                  {...register("travel_time", { required: true })}
                />
                {errors.travel_time && (
                  <span className="text-red-600 text-base font-raleway inline-block">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-full space-y-4">
                <label className="input__label" htmlFor="totalVisitorsPerYear">
                  Total Visitors Per Year
                </label>
                <input
                  type="text"
                  id="totalVisitorsPerYear"
                  className="input"
                  placeholder="Enter total visitors per year "
                  {...register("totalVisitorsPerYear", { required: true })}
                />
                {errors.totalVisitorsPerYear && (
                  <span className="text-red-600 text-base font-raleway inline-block">
                    This field is required
                  </span>
                )}
              </div>
              <div className="w-full space-y-4">
                <label className="input__label" htmlFor="user_email">
                  User Email
                </label>
                <input
                  type="text"
                  id="user_email"
                  className="input"
                  defaultValue={user.email}
                  placeholder="Enter user email"
                  {...register("user_email")}
                />
              </div>
            </div>

            <div className="w-full space-y-4">
              <label className="input__label" htmlFor="user_name">
                User Name
              </label>
              <input
                type="text"
                id="user_name"
                className="input"
                defaultValue={user.displayName}
                placeholder="Enter user name"
                {...register("user_name")}
              />
            </div>

            <div className="mt-6">
              <button type="submit" className="submit__btn w-full">
                Add New Spot
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddTouristsSpot;
