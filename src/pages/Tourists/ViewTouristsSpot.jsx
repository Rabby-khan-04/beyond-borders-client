import { useLoaderData } from "react-router-dom";
import seasonalityIcon from "../../assets/icon/seasonality.png";
import locationIcon from "../../assets/icon/location.png";
import travelerIcon from "../../assets/icon/traveler.png";
import dollarIcon from "../../assets/icon/dollar-sign.png";
import travelTime from "../../assets/icon/plane.png";
import idCardIcon from "../../assets/icon/id-card.png";
import emailIcon from "../../assets/icon/mail.png";

const ViewTouristsSpot = () => {
  const { data } = useLoaderData();

  return (
    <>
      <section
        style={{ backgroundImage: `url(${data.data.image})` }}
        className="bg-cover bg-center bg-no-repeat"
      >
        <div className="container h-[600px] flex items-center justify-center">
          <h1 className="text-white text-7xl font-mansalva font-bold">
            {data?.data?.tourists_spot_name}
          </h1>
        </div>
      </section>
      <section className="py-28 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-primary font-palanquin_park text-5xl font-bold mb-2">
            {data?.data?.tourists_spot_name}
          </h2>
          <p className="font-montserrat text-des_gray text-lg mb-4">
            {data?.data?.short_description}
          </p>

          <h3 className="text-primary text-3xl font-bold mb-3">Details</h3>
          <div className="space-y-3 w-full mb-4">
            <div className="flex items-center gap-3 overflow-hidden">
              <div>
                <h4 className="text-xl font-montserrat text-secondary font-bold text-nowrap">
                  Avarage Cost:
                </h4>
              </div>
              <div className="grow h-px border border-dashed border-secondary"></div>
              <div className="flex items-center gap-1 w-32">
                <img src={dollarIcon} className="size-6" alt="" />
                <p className="text-des_gray text-lg font-montserrat font-semibold">
                  {data.data.average_cost}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 overflow-hidden">
              <div>
                <h4 className="text-xl font-montserrat text-secondary font-bold">
                  Seasonality:
                </h4>
              </div>
              <div className="grow h-px border border-dashed border-secondary"></div>
              <div className="flex items-center gap-1 w-32">
                <img src={seasonalityIcon} className="size-6" alt="" />
                <p className="text-des_gray text-lg font-montserrat font-semibold">
                  {data.data.seasonality}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 overflow-hidden">
              <div>
                <h4 className="text-xl font-montserrat text-secondary font-bold">
                  Country:
                </h4>
              </div>
              <div className="grow h-px border border-dashed border-secondary"></div>
              <div className="flex items-center gap-1 w-32">
                <img src={locationIcon} className="size-6" alt="" />
                <p className="text-des_gray text-lg font-montserrat font-semibold">
                  {data?.data?.country_name}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 overflow-hidden">
              <div>
                <h4 className="text-xl font-montserrat text-secondary font-bold">
                  Location:
                </h4>
              </div>
              <div className="grow h-px border border-dashed border-secondary"></div>
              <div className="flex items-center gap-1">
                <img src={locationIcon} className="size-6" alt="" />
                <p className="text-des_gray text-lg font-montserrat font-semibold text-nowrap">
                  {data?.data?.location}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 overflow-hidden">
              <div>
                <h4 className="text-xl font-montserrat text-secondary font-bold text-nowrap">
                  Visitor Per Year:
                </h4>
              </div>
              <div className="grow h-px border border-dashed border-secondary"></div>
              <div className="flex items-center gap-1 w-32">
                <img src={travelerIcon} className="size-6" alt="" />
                <p className="text-des_gray text-lg font-montserrat font-semibold">
                  {data?.data?.totalVisitorsPerYear}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 overflow-hidden">
              <div>
                <h4 className="text-xl font-montserrat text-secondary font-bold text-nowrap">
                  Travel Time:
                </h4>
              </div>
              <div className="grow h-px border border-dashed border-secondary"></div>
              <div className="flex items-center gap-1 w-32">
                <img src={travelTime} className="size-6" alt="" />
                <p className="text-des_gray text-lg font-montserrat font-semibold text-nowrap">
                  {data?.data?.travel_time}
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-primary text-3xl font-bold mb-3">Contact</h3>
          <div className="space-y-3 w-full mb-4">
            <div className="flex items-center gap-3 overflow-hidden">
              <div>
                <h4 className="text-xl font-montserrat text-secondary font-bold text-nowrap">
                  Name:
                </h4>
              </div>
              <div className="grow h-px border border-dashed border-secondary"></div>
              <div className="flex items-center gap-1">
                <img src={idCardIcon} className="size-6" alt="" />
                <p className="text-des_gray text-lg font-montserrat font-semibold text-nowrap">
                  {data.data.user_name}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 overflow-hidden">
              <div>
                <h4 className="text-xl font-montserrat text-secondary font-bold">
                  Email:
                </h4>
              </div>
              <div className="grow h-px border border-dashed border-secondary"></div>
              <div className="flex items-center gap-1">
                <img src={emailIcon} className="size-6" alt="" />
                <p className="text-des_gray text-lg font-montserrat font-semibold">
                  {data.data.user_email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewTouristsSpot;
