import { useForm } from "react-hook-form";
import axios from "axios";
import Toast from "../../utils/Toast";
import SectionTitle from "../../components/Shared/SectionTitle";
import touristsSpotBG from "../../assets/image/add-tourists-spot-bg.jpg";
import { useLoaderData } from "react-router-dom";

const UpdateTouristsSpot = () => {
  const { data } = useLoaderData();
  const { register, handleSubmit } = useForm();
  const spot = data.data;

  const handleUpdateSpot = async (data) => {
    console.log(data);
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/v1/tourists-spot/update-spot/${spot._id}`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.data.modifiedCount > 0) {
        Toast.fire({
          icon: "success",
          title: "Tourists spot updated successfully!!",
        });
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
            Update tourists spot
          </h1>
        </div>
      </section>

      <section className="py-28 bg-background">
        <div className="container">
          <SectionTitle
            title="Discover & Share New Destinations"
            subtitle="Update Destination"
          />

          <form
            onSubmit={handleSubmit(handleUpdateSpot)}
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
                  defaultValue={spot.image}
                  {...register("image")}
                />
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
                  defaultValue={spot.tourists_spot_name}
                  {...register("tourists_spot_name")}
                />
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
                  defaultValue={spot.country_name}
                  {...register("country_name")}
                />
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
                  defaultValue={spot.location}
                  {...register("location")}
                />
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
                  defaultValue={spot.short_description}
                  {...register("short_description")}
                />
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
                  defaultValue={spot.average_cost}
                  {...register("average_cost")}
                />
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
                  defaultValue={spot.seasonality}
                  {...register("seasonality")}
                />
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
                  defaultValue={spot.travel_time}
                  {...register("travel_time")}
                />
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
                  defaultValue={spot.totalVisitorsPerYear}
                  {...register("totalVisitorsPerYear")}
                />
              </div>
              <div className="w-full space-y-4">
                <label className="input__label" htmlFor="user_email">
                  User Email
                </label>
                <input
                  type="text"
                  id="user_email"
                  className="input"
                  defaultValue={spot.user_email}
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
                defaultValue={spot.user_name}
                placeholder="Enter user name"
                {...register("user_name")}
              />
            </div>

            <div className="mt-6">
              <button type="submit" className="submit__btn w-full">
                Update Spot
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateTouristsSpot;
