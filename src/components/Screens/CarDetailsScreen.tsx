import { useParams } from "react-router-dom"
import Nav from "../component/Nav"
import { useEffect, useState } from "react";
import { db } from "./../../../Config/index";
import carListing from "./../../../Config/schema";
import { eq } from "drizzle-orm";
import { CiCalendarDate } from "react-icons/ci";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { LuFuel } from "react-icons/lu";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { MdLocalOffer } from "react-icons/md";
import CarDetailSpecifications from "../component/CarDetailSpecifications";
import FinanceCalculator from "../component/FinanceCalculator";
import OwnerDetails from "../component/OwnerDetails";
import MostSearchedCar from "../component/MostSearchedCar";
import Footer from "../component/Footer";
import Features from "../component/Features";

const CarDetailsScreen = ()=>{
    
    let {id} = useParams();
    const[loader,setLoader] = useState(false)
    const [ carData , setCarData] = useState({})

    useEffect(()=>{
        getData()
        window.scrollTo({top:0,behavior:"smooth"})
    },[id])

    async function getData(){
        setLoader(true)
        const existingCar = await db
        .select()
        .from(carListing).where(eq(carListing.id,id))
        setLoader(false)  
        setCarData(existingCar[0])
    }

    useEffect(()=>{
        console.log(carData?.carImages?.length)
    },[carData])
    return<>
    <Nav/>
    <div>
        <div className="p-10 border">
            <div className="p-2 ">
            <h1 className="font-bold text-3xl">{carData?.make}</h1>
            <p>{carData?.model}</p>
            </div>
            <div className="flex gap-2 ">
                <div className="flex justify-center items-center bg-blue-100 text-blue-500 font-semibold rounded-full gap-2 p-2"><CiCalendarDate/>{carData?.year}</div>
                <div className="flex justify-center items-center bg-blue-100 text-blue-500 font-semibold rounded-full gap-2 p-2"><IoSpeedometerOutline/>{carData?.mileage}</div>
                <div className="flex justify-center items-center bg-blue-100 text-blue-500 font-semibold rounded-full gap-2 p-2"><GiGearStickPattern/>{carData?.transmission}</div>
                <div className="flex justify-center items-center bg-blue-100 text-blue-500 font-semibold rounded-full gap-2 p-2"><LuFuel/>{carData?.fuelType}</div>
            </div>
            <div className="mt-2 flex md:flex-row flex-col ">
                <div className="md:w-[60%] flex flex-col justify-between">
            <Carousel className="border border-solid rounded overflow-hidden w-full shadow-lg h-[400px]">
  <CarouselContent>
    {carData?.carImages?.map((car,index)=>{
         return <CarouselItem key={index} className=' w-full md:basis-1/1 basis-1/1'><img src={car} className="w-full h-[400px] " alt="" /> </CarouselItem>
     })}
    
  </CarouselContent>
  <CarouselPrevious className="ml-[60px]"/>
  <CarouselNext className="mr-[60px]"/>
</Carousel> 
<div className="border shadow-lg rounded mt-2 p-5 break-words">
    <h1 className="text-2xl font-bold mb-5">Description</h1>
    <h1>{carData?.description}</h1>
</div>

<FinanceCalculator/>
</div>
<div className="md:w-[40%] flex flex-col gap-2 items-center mt-2 md:mt-0">
   <div className="border shadow-lg md:w-[80%] w-full h-[120px] flex flex-col px-5 rounded-lg py-20 justify-center">
    <h1>Our Price</h1>
    <h1 className="text-3xl font-bold">${carData?.price}</h1>
    <button className="flex justify-center items-center bg-blue-600 p-1 px-5 rounded text-white"><span><MdLocalOffer/></span>Make an Offer Price</button>
   </div>
   <div className="border shadow-lg md:w-[80%]  flex flex-col rounded-lg">
    <h1 className="text-2xl font-bold px-5">Specification</h1>
    <div className="px-6 mt-2">
       <CarDetailSpecifications carData={carData}/>
    </div>   
   </div>
   <div className="rounded border w-full mt-4 h-full p-2 md:w-[80%] shadow-lg">
    <Features  carData={carData}/>
    </div>
   <div className="rounded border w-full mt-4 h-full p-2 md:w-[80%] flex justify-center items-center shadow-lg">
    <OwnerDetails/>
    </div>

   
</div>
            </div>
        </div>
        <MostSearchedCar/>
        <Footer/>
    </div>
    </>

}

export default CarDetailsScreen