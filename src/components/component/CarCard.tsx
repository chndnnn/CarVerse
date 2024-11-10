import { Separator } from "./../ui/separator"
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoMdSpeedometer } from "react-icons/io";
import { GiGearStickPattern } from "react-icons/gi";
import { GoLinkExternal } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import ConfirmationModal from "./ConfirmationModal";

interface carCardInterface {
    car : any,
    index : any,
    showDeleteButton : boolean
}

const CarCard:React.FC<carCardInterface> = ({car,showDeleteButton})=>{

    function onDeleteClick(){
        console.log(car)
    }
   return <>
   <div className="md:border border-solid w-[98%] bg-gray-100 rounded-lg p-2 relative">
    <img src={car.image} alt="" className="h-48 w-full rounded-lg"/>
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
    {showDeleteButton && <ConfirmationModal showDelete={true} data={"Do yo really want to delete this data"} onDeleteClick={onDeleteClick} ><MdDelete className="absolute top-[-5px] right-[-4px] cursor-pointer hover:scale-95 text-red-800 text-3xl"/></ConfirmationModal>}
   
   </div>
   </>

}

export default CarCard