import { Link } from "react-router-dom"
import Nav from "../component/Nav"
import { useEffect, useState } from "react"
import { db } from "./../../../Config/index"
import { useUser } from "@clerk/clerk-react"
import carListing from "./../../../Config/schema"
import { eq } from 'drizzle-orm';
import CarCard from "../component/CarCard"

const MyListing = ()=>{
    const { user } = useUser();
    let [cardata,setCarData] = useState([])
    const[loader,setLoader] = useState(true)
    useEffect(()=>{  
        getData()
    },[])

    async function getData(){
        setLoader(true)
        const loggedInUser = user?.id
        const existingCar = await db
        .select()
        .from(carListing).where(eq(carListing.userName,loggedInUser))
        setCarData(existingCar)
        setLoader(false)  
    }

    return <div>
        <Nav/>
        <div className="flex justify-between p-10">
            <h2 className="text-2xl">My Listing ({cardata.length})</h2>
           <Link to="/AddLsiting"> <button className="bg-blue-200 p-2 rounded hover:bg-blue-500 font-bold">+ Add New Listing</button></Link>
        </div>
        <div className="grid md:grid-cols-4">
            { 
                cardata?.map((car,i)=>{
                    const data = {
                        id:car.id,
                        image : car.carImages[0],
                        name : car.make,
                        miles : car.mileage,
                        gearType : car.transmission,
                        fuelType : car.fuelType,
                        price : car.price
                    }
                    return <div key={i} className="p-2">   
                        <CarCard car={data} getData={getData} index={undefined} showDeleteButton={true}/>
                        </div>
                })
            }
        
        </div>
        {loader && <div>Loading...</div>}
    </div>
}

export default MyListing