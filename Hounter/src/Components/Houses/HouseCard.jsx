import { useState } from "react";
import Slider from "react-slick";
import {
  faDoorOpen,
  faHouseUser,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function HouseCard({ onBookNow }) {
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1587613892572-86e79e7d2225?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
    "https://images.unsplash.com/photo-1563013544-824ae0efbdc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlide, // Pass currentSlide as the initial slide index
    afterChange: (current) => setCurrentSlide(current),
  };

  const goToPreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleBookNow = () => {
    // Assuming house details are available here
    const houseDetails = {
      price: "Kshs 7,000",
      type: "Bedsitter",
      location: "Juja",
      description: "House description...",
      image: images[currentSlide],
    };
    // Call the function to open the modal and pass house details
    onBookNow(houseDetails);
  };

  return (
    <div className="w-full md:max-w-sm overflow-hidden m-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="relative">
              <FontAwesomeIcon 
                icon={faChevronLeft}
                className="text-white cursor-pointer absolute top-1/2 left-4 transform -translate-y-1/2"
                onClick={goToPreviousSlide}
              />
              <img
                className="object-cover object-center w-full h-56"
                src={image}
                alt={`House Image ${index}`}
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-white cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2"
                onClick={goToNextSlide}
              />
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex items-center justify-center px-6 py-3 bg-gray-900">
        <h1 className="text-lg font-semibold text-white">
          <FontAwesomeIcon icon={faHouseUser} /> Kshs 7,000
        </h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          Bedsitter
        </h1>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          <FontAwesomeIcon icon={faDoorOpen} /> Gate A
        </h1>

        <p className="py-2 text-gray-700 dark:text-gray-400">
          House description...
        </p>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg
            aria-label="location pin icon"
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
            />
          </svg>
          <h1 className="px-2 text-sm">Juja</h1>
        </div>

        <div className="flex items-center justify-center mt-4 text-gray-700 dark:text-gray-200">
          <button 
            onClick={handleBookNow}
            className="flex items-center bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600"
          >
            <h1 className="px-2 text-sm">Book Now</h1>
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="w-6 h-6 fill-current"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
