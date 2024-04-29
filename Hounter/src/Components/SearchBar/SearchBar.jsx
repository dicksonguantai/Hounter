import "./searchbar.css";

const gateOptions = ["Gate A", "Gate B", "Gate C"];
const houseTypeOptions = ["Bedsitter", "One Bedroom", "Two Bedroom"];
const priceRangeOptions = ["- 7,000", "7,000 - 10,000", "10,000 - 15,000"];

export default function SearchBar() {
  return (
    <div className="flex flex-col md:flex-row md:w-auto bg-blue-50 p-4 text-center">
      <div className="md:w-3/4 md:pl-4 md:m-auto">
        <p className="md:text-4xl text-xl md:m-8">Find any House in 254</p>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center  md:m-8">
          <div className="md:mr-2">
            <input type="search" placeholder="I am looking for..." className="mt-2 w-3/4 md:w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
          </div>
          <div className="md:mr-2">
            <select className="mt-2 w-3/4 md:w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300">
              <option value="">Select Gate</option>
              {gateOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div> 
          <div className="md:mr-2">
            <select className="mt-2 w-3/4 md:w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300">
              <option value="">Select Type of House</option>
              {houseTypeOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="md:mr-2">
            <select className="mt-2 w-3/4 md:w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300">
              <option value="">Select Price Range</option>
              {priceRangeOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
