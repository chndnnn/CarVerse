import { useLocation } from "react-router-dom"
import MostSearchedCar from "../component/MostSearchedCar"
import Nav from "../component/Nav"
import SelectCar from "../component/SelectCar"
import { useEffect } from "react"

const SearchScreen = ()=>{
   let location = useLocation()
   useEffect(()=>{
    console.log(location.state)
   },[location.state])
   return(
    <div>
        <Nav/>
        <div className="flex justify-center bg-black p-2">
            <SelectCar/>
        </div>
        <MostSearchedCar/>
    </div>
   )
}

export default SearchScreen