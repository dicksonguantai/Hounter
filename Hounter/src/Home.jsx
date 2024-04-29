// Home.jsx
import Navbar from "./Components/Navbar/Navbar";
import Footerall from "./Components/Footer/Footer";
import SearchBar from "./Components/SearchBar/SearchBar";
import HousesSection from "./Components/Houses/HousesSection";
export default function Home() {
  

  return (
    <div>
    <Navbar/>
    <SearchBar/>
    <HousesSection/>
    <Footerall/>

      
    </div>
    );
}
