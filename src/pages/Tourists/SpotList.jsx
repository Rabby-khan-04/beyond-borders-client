import { useLoaderData } from "react-router-dom";
import mySpotsBG from "../../assets/image/my-spot-banner.jpg";
import SectionTitle from "../../components/Shared/SectionTitle";
import MySpotsCard from "../../components/Tourists/MySpotsCard";

const SpotList = () => {
  const { data } = useLoaderData();
  console.log(data.data);
  return (
    <>
      <section
        style={{ backgroundImage: `url(${mySpotsBG})` }}
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
            title="Discover your shared destinations"
            subtitle="Your Added Tourist Spots"
          />

          <div className="grid grid-cols-3 gap-4">
            {data.data.map((destination) => (
              <MySpotsCard key={destination._id} destination={destination} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SpotList;
