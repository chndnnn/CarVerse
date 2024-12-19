import Nav from "../component/Nav"
import SelectCar from "../component/SelectCar"

const SearchScreen = ()=>{
   return(
    <div>
        <Nav/>
        <div className="flex justify-center bg-black p-2">
            <SelectCar/>
        </div>
    </div>
   )
}

export default SearchScreen