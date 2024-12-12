import { useEffect, useState } from "react"
import { ImCheckboxChecked } from "react-icons/im";

interface FeaturesInterface {
    carData : any
}
const Features:React.FC<FeaturesInterface> = ({carData})=>{

    let [feature,setFeature] = useState({})

    useEffect(()=>{
        let data = {
        airConditioning: carData?.airConditioning,
        leatherSeats: carData?.leatherSeats,
        sunroof: carData?.sunroof,
        bluetooth: carData?.bluetooth,
        backupCamera: carData?.backupCamera,
        parkingSensors: carData?.parkingSensors,
        heatedSeats: carData?.heatedSeats,
        navigationSystem: carData?.navigationSystem,
        antiLockBrakes: carData?.antiLockBrakes,
        airbags: carData?.airbags,
        tractionControl: carData?.tractionControl,
        laneDepartureWarning: carData?.laneDepartureWarning,
        blindSpotMonitoring: carData?.blindSpotMonitoring,
        emergencyBraking: carData?.emergencyBraking,
        }

        setFeature(data)
    },[carData])
    return <div className="w-full grid md:grid-cols-2 px-2 ">
          {Object.entries(feature).map(([key, value])=>{
            if(value) return <div className="flex gap-1 items-center"><span><ImCheckboxChecked className="text-blue-500 rounded-full" /></span>{key}</div>      
          })}
    </div>
}

export default Features