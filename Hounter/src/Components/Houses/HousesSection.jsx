import HouseCard from "./HouseCard";

export default function HousesSection(){

    return (
        <div className="flex flex-wrap space-between">
        <HouseCard/>
        <HouseCard/>
        <HouseCard/>
        <HouseCard/>
        <HouseCard/>

        </div>
    );
}