import { useState, useEffect } from 'react';
import HouseForm from '../HouseForm/HouseForm';
import "./HouseList.css";

export default function HouseList() {
  const [houses, setHouses] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);

  useEffect(() => {
    // Fetch house data from API and set it to the state
    // setHouses(data);
  }, []);

  const handleEdit = (house) => {
    setSelectedHouse(house);
  };

  const handleDelete = (houseId) => {
    // API call to delete house
    // Refresh house list
  };

  return (
    <div className="house-list">
      <h1 className="text-2xl font-semibold mb-5">Manage Houses</h1>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setSelectedHouse(null)}
      >
        Add New House
      </button>
      {selectedHouse && (
        <HouseForm house={selectedHouse} setHouses={setHouses} />
      )}
      <table className="w-full mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Location</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house) => (
            <tr key={house.id}>
              <td>{house.id}</td>
              <td>{house.house_type}</td>
              <td>{house.location}</td>
              <td>{house.price}</td>
              <td>
                <button
                  className="px-2 py-1 bg-yellow-500 text-white rounded mr-2"
                  onClick={() => handleEdit(house)}
                >
                  Edit
                </button>
                <button
                  className="px-2 py-1 bg-red-600 text-white rounded"
                  onClick={() => handleDelete(house.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
