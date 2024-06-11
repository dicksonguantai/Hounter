import { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HouseContext } from "./HouseContext";

function ImageModal({ image, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative max-w-full max-h-full p-4">
        <img src={image} alt="Large view" className="max-w-full max-h-screen object-contain"/>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-400 text-4xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default function HouseDetails() {
  const { id } = useParams();
  const { houses } = useContext(HouseContext);
  const house = houses.find(h => h.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(null);

  if (!house) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
        <div className="relative">
          {house.images.length > 0 && (
            <img
              className="w-full h-64 object-cover"
              src={house.images[0]}
              alt={`Image of ${house.id}`}
            />
          )}
          <Link to="/">
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-400 text-2xl"
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
            {house.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`House image ${index}`}
                className="w-full h-32 object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
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
