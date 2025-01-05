import { useLoaderData } from "react-router-dom";
import touristsSpotBG from "../../assets/image/add-tourists-spot-bg.jpg";
import SectionTitle from "../../components/Shared/SectionTitle";
import DestinationCard from "../../components/Home/DestinationCard";

const AllTouristsSpot = () => {
  const { data } = useLoaderData();

  return (
    <>
      <section
        style={{ backgroundImage: `url(${touristsSpotBG})` }}
        className="bg-cover bg-center bg-no-repeat py-12 bg-black/50 bg-blend-multiply h-[600px] flex items-center justify-center"
      >
        <div className="container">
          <h1 className="text-white text-6xl font-bold font-palanquin_park text-center capitalize">
            Tourists spots
          </h1>
        </div>
      </section>

      <section className="bg-background pt-28 pb-12">
        <div className="container">
          <SectionTitle
            subtitle="Explore All Tourist Spots"
            title="Discover amazing destinations worldwide"
          />

          <div className="grid grid-cols-3 gap-6">
            {data.data.map((destination) => (
              <DestinationCard
                key={destination._id}
                destination={destination}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllTouristsSpot;
