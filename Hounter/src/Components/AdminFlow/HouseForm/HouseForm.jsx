import { useState, useEffect } from 'react';
import "./HouseForm.css";

export default function HouseForm({ house, setHouses }) {
  const [formData, setFormData] = useState({
    id: '',
    house_type: '',
    location: '',
    price: '',
    images: []
  });

  useEffect(() => {
    if (house) {
      setFormData(house);
    }
  }, [house]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      // API call to update house
    } else {
      // API call to add new house
    }
    // Refresh house list
    setHouses((prev) => [...prev, formData]);
  };

  return (
    <form onSubmit={handleSubmit} className="house-form mt-5">
      <h2 className="text-xl font-semibold mb-5">{formData.id ? 'Edit House' : 'Add New House'}</h2>
      <label className="block mb-3">
        <span className="text-gray-700">Type</span>
        <input
          type="text"
          name="house_type"
          value={formData.house_type}
          onChange={handleChange}
          className="mt-1 block w-full"
        />
      </label>
      <label className="block mb-3">
        <span className="text-gray-700">Location</span>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="mt-1 block w-full"
        />
      </label>
      <label className="block mb-3">
        <span className="text-gray-700">Price</span>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="mt-1 block w-full"
        />
      </label>
      <label className="block mb-3">
        <span className="text-gray-700">Images</span>
        <input
          type="file"
          name="images"
          multiple
          onChange={(e) => setFormData({ ...formData, images: [...e.target.files] })}
          className="mt-1 block w-full"
        />
      </label>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        {formData.id ? 'Update' : 'Add'}
      </button>
    </form>
  );
}
