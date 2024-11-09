import { Link } from "react-router-dom"
import Nav from "../component/Nav"
import { useEffect } from "react"
import { db } from "./../../../Config/index"
import { useUser } from "@clerk/clerk-react"
import carListing from "./../../../Config/schema"
import { eq } from 'drizzle-orm';

const MyListing = ()=>{
    const { user } = useUser();
    useEffect(()=>{
        
        getData()
    },[])

    async function getData(){
        const loggedInUser = user?.id
        const existingCar = await db
        .select()
        .from(carListing).where(eq(carListing.userName,loggedInUser))
        console.log(existingCar)
    }

    return <div>
        <Nav/>
        <div className="flex justify-between p-10 border border-solid border-green-500">
            <h2 className="text-2xl">My Listing</h2>
           <Link to="/AddLsiting"> <button className="bg-blue-200 p-2 rounded hover:bg-blue-500 font-bold">+ Add New Listing</button></Link>
        </div>
        <div>

        </div>
    </div>
}

export default MyListing