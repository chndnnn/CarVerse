import Nav from "../component/Nav"
import SelectCar from "../component/SelectCar"

const SearchScreen = ()=>{
   return(
    <div>
        <Nav/>
        <div className="flex justify-center">
            <SelectCar/>
        </div>
    </div>
   )
}

export default SearchScreen