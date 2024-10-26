import { Separator } from "./../ui/separator"
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoMdSpeedometer } from "react-icons/io";
import { GiGearStickPattern } from "react-icons/gi";
import { GoLinkExternal } from "react-icons/go";

interface carCardInterface {
    car : any,
    index : any
}

const CarCard:React.FC<carCardInterface> = ({car})=>{
   return <>
   <div className="md:border border-solid w-[98%] bg-gray-100 rounded-lg p-2">
    <img src={car.image} alt="" className="rounded-lg"/>
    <h2 className="text-lg md:mb-2 font-bold text-center">{car.name}</h2>
    <Separator className="bg-blue-400"/>
    <div className="flex w-full justify-between p-1 mt-1">
        <div className="flex flex-col items-center">
        <BsFillFuelPumpFill className="text-xl" />
        <span>{car.miles}</span>
        </div>
        <div className="flex flex-col items-center">
        <IoMdSpeedometer className="text-xl" />
        <span>{car.gearType}</span>
        </div>
        <div className="flex flex-col items-center">
        <GiGearStickPattern className="text-xl" />
        <span>{car.fuelType}</span>
        </div>
    </div>
    <Separator className="bg-blue-400"/>
    <div className="flex justify-between p-1 ">
        <h2 className="font-bold">${car.price}</h2>
        <h2 className="flex items-center gap-1 text-blue-500">View Details <GoLinkExternal/></h2>
    </div>
   </div>
   </>

}

export default CarCard