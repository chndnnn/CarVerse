import { BiCategoryAlt } from "react-icons/bi"
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { SiGoogleearthengine } from "react-icons/si";
import { MdTerrain } from "react-icons/md";
import { IoMdBody } from "react-icons/io";
import { VscDebugBreakpointConditional } from "react-icons/vsc";
import { IoIosColorPalette } from "react-icons/io";
import { BsFuelPumpFill } from "react-icons/bs";

interface CarDetailSpecificationsInterface {
    carData : any
}

const CarDetailSpecifications:React.FC<CarDetailSpecificationsInterface> = ({carData})=>{

    let data = [
        {
            name : "Category",
            value:carData.bodyType,
            image : <BiCategoryAlt/>
        },
        {
            name : "Mileage",
            value:carData.mileage,
            image : <BsFillFuelPumpDieselFill/>
        },
        {
            name : "Transmission",
            value:carData.transmission,
            image : <GiGearStickPattern />
        },
        {
            name : "Engine Size",
            value:carData.engineSize,
            image : <SiGoogleearthengine />
        },
        {
            name : "Drive Train",
            value:carData.drivetrain,
            image : <MdTerrain />
        },
        {
            name : "Body Type",
            value:carData.bodyType,
            image : <IoMdBody />
        },
        {
            name : "Condition",
            value:carData.condition,
            image : <VscDebugBreakpointConditional />
        },
        {
            name : "Color",
            value:carData.color,
            image : <IoIosColorPalette />
        },
        {
            name : "Fuel Type",
            value:carData.fuelType,
            image : <BsFuelPumpFill />
        }

        
    ]
   return <div className="flex flex-col gap-2 mb-2">
    {data?.map((ele,i)=>{
      return <div key={i} className="flex  justify-between">
      <div className="flex items-center gap-2">
          <div className="bg-blue-400 rounded-full p-1">{ele.image} </div>
      
      <p>{ele.name}</p>
      </div>
      {ele.value}  
  </div>
    })
   }  
       
   </div>
}

export default CarDetailSpecifications