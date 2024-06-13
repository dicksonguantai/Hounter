import { useState } from "react";

export default function BookingVisit({ houseId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    house_id: houseId, // Set house_id from prop
    date: "",
    time: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [isBookingFailed, setIsBookingFailed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage("");
    setIsBookingFailed(false);

    const scheduledDateTime = `${formData.date} ${formData.time}`;

    try {
      const response = await fetch(
        "https://4g90ay7oei.execute-api.us-east-1.amazonaws.com/api/book", 
        {
          method: "POST",
          mode: 'cors',
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            house_id: formData.house_id,
            scheduled_date_time: scheduledDateTime,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(
          data.success || "Payment successful, an agent will get back to you"
        );
      } else {
        setResponseMessage(
          data.error || "An unexpected error occurred. Please try again."
        );
        setIsBookingFailed(true);
      }
    } catch (error) {
      setResponseMessage("Server error, kindly retry the request.");
      setIsBookingFailed(true);
    } finally {
      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setIsOpen(false);
      }, 5000);
    }
  };

  return (
    <div className="relative flex justify-center z-50">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      >
        Book Visit
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
              <button
                type="button"
                className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {isLoading ? (
                <div className="flex flex-col items-center justify-center mt-4">
                  <svg
                    className="w-16 h-16 text-blue-500 animate-spin"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2v6M12 16v6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M16 12h6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24"
                    />
                  </svg>
                  <p className="mt-2 text-lg sm:text-base text-blue-500">
                    Processing...
                  </p>
                </div>
              ) : isSubmitted ? (
                <div className="flex flex-col items-center justify-center mt-4">
                  <svg
                    className={`w-16 h-16 ${
                      isBookingFailed ? "text-red-500" : "text-green-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        isBookingFailed
                          ? "M6 18L18 6M6 6l12 12"
                          : "M5 13l4 4L19 7"
                      }
                    />
                  </svg>
                  <p
                    className={`mt-2 text-lg sm:text-base ${
                      isBookingFailed ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {responseMessage}
                  </p>
                </div>
              ) : (
                <form className="mt-4" onSubmit={handleSubmit}>
                  <h3
                    className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                    id="modal-title"
                  >
                    Book a Visit
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Please fill out the form below to book a visit.
                  </p>

                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-700 dark:text-gray-200"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />

                  <label
                    htmlFor="phone"
                    className="block mt-3 text-sm text-gray-700 dark:text-gray-200"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="(07XX XXX XXX)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />

                  <label
                    htmlFor="date"
                    className="block mt-3 text-sm text-gray-700 dark:text-gray-200"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />

                  <label
                    htmlFor="time"
                    className="block mt-3 text-sm text-gray-700 dark:text-gray-200"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />

                  <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    >
                      Book Visit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
