import { useState, useEffect } from "react";
import HouseCard from "./HouseCard";

const HousesSection = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("https://4g90ay7oei.execute-api.us-east-1.amazonaws.com/api/houses")
      .then((response) => response.json())
      .then((data) => setHouses(data))
      .catch((error) => console.error("Error fetching houses:", error));
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {houses.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  );
};

export default HousesSection;
