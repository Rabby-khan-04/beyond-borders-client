import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import axios from "axios";
import DestinationCard from "./DestinationCard";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/v1/tourists-spot/spots"
      );

      setDestinations(response.data.data);
    };

    fetchDestinations();
  }, []);

  return (
    <section className="bg-background pt-28 pb-12">
      <div className="container">
        <SectionTitle
          subtitle="Enjoy with your love"
          title="Find your best destinations"
        />

        <div className="grid grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <DestinationCard key={destination._id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
