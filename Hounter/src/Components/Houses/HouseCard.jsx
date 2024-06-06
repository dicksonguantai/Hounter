import { useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faHouseUser,
  faChevronLeft,
  faChevronRight,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookingVisit from "../VisitBooking/BookingVisit";
import { Link } from 'react-router-dom';


export default function HouseCard({ house }) {
  const { id, price, location, description, name, gate_id, rooms_available, housetype_id, gate, images } = house;
  const [currentSlide, setCurrentSlide] = useState(0);

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} text-white cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 shadow-md z-10`}
        style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} text-white cursor-pointer absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 shadow-md z-10`}
        style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlide,
    afterChange: (current) => setCurrentSlide(current),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
   
  };

  return (
    <div className="overflow-hidden m-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="relative">
        <Slider {...settings}>
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index}>
                <img
                  className="object-cover object-center w-full h-56"
                  src={image.url}
                  alt={`House Image ${index}`}
                />
              </div>
            ))
          ) : (
            <div>
              <img
                className="object-cover object-center w-full h-56"
                src={'/Images/Nairobiskyline.jpg'}
                alt="Placeholder Image"
              />
            </div>
          )}
        </Slider>
      </div>

      <div className="flex items-center justify-center px-6 py-3 bg-gray-900">
        <h1 className="text-lg font-semibold text-white">
          <FontAwesomeIcon icon={faHouseUser} /> Kshs {price}
        </h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {housetype_id}
        </h1>
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white mt-2">
          <FontAwesomeIcon icon={faDoorOpen} /> {gate.name}
        </h1>

        <p className="py-2 text-gray-700 dark:text-gray-400">
          {description}
        </p>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6" />
          <h1 className="px-2 text-sm">{location}</h1>
        </div>

        <div className="flex justify-between items-center mt-4">
          <Link
            to={`/house/${id}`}
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            View Details
          </Link>
          <BookingVisit />
        </div>
      </div>
    </div>
  );
}
