import { Link } from "react-router-dom"
import Nav from "../component/Nav"

const MyListing = ()=>{
    return <div>
        <Nav/>
        <div className="flex justify-between p-10 border border-solid border-green-500">
            <h2 className="text-2xl">My Listing</h2>
           <Link to="/AddLsiting"> <button className="bg-blue-200 p-2 rounded hover:bg-blue-500 font-bold">+ Add New Listing</button></Link>
        </div>
    </div>
}

export default MyListing