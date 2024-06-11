import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HouseContext } from "./HouseContext";

export default function HouseDetails() {
  const { id } = useParams();
  const { houses } = useContext(HouseContext);
  const house = houses.find(h => h.id === parseInt(id));

  if (!house) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
        <div className="relative">
          {house.images.length > 0 && (
            <img
              className="w-full h-64 object-cover"
              src={house.images[0].url}
              alt={`Image of ${house.id}`}
            />
          )}
          <Link to="/">
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-400"
            >
              &times;
            </button>
          </Link>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{house.house_type}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Location: {house.location}</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Price: KES {house.price}</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Rooms Available: {house.rooms_available}</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Description: {house.description}</p>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {house.images.map(image => (
              <img
                key={image.id}
                src={image.url}
                alt={`House image ${image.id}`}
                className="w-full h-32 object-cover rounded-lg"
              />
            ))}
          </div>

          <div className="mt-4">
            <Link to="/" className="text-blue-600 hover:underline dark:text-blue-400">
              Back to listings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
