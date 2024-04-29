// Home.jsx
import Navbar from "./Components/Navbar/Navbar";
import Footerall from "./Components/Footer/Footer";
import SearchBar from "./Components/SearchBar/SearchBar";
import HouseCard from "./Components/SearchBar/Houses/HouseCard";
import HousesSection from "./Components/SearchBar/Houses/HousesSection";
export default function Home() {
  

  return (
    <section>
    <div className="flex flex-wrap">
    <Navbar/>
    <SearchBar/>
    <HousesSection/>
    <Footerall/>

      
    </div></section>
    
    );
}
