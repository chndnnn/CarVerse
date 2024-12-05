import { useEffect, useState } from 'react';
import CarCard from './CarCard'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import carListing from '../../../Config/schema';
import { db } from '../../../Config/index';

  
const MostSearchedCar = ()=>{

  let [cardata,setCarData] = useState([])
  
  useEffect(()=>{  
      getData()
  },[])

  async function getData(){
      const existingCar = await db
      .select()
      .from(carListing)
      setCarData(existingCar)
  }

   return <div className='bg-[#eef0fc] py-10'>
   <h2 className='text-center text-3xl py-2 mb-5 font-bold'>Most Searched Cars</h2>
   <Carousel className='mx-14 '>
  <CarouselContent>
    {cardata.map((car,index)=>{
       const data = {
        id:car.id,
        image : car.carImages[0],
        name : car.make,
        miles : car.mileage,
        gearType : car.transmission,
        fuelType : car.fuelType,
        price : car.price
    }
         return <CarouselItem key={index} className=' w-full md:basis-1/4 basis-1/1'> <CarCard car={data} index={index} /></CarouselItem>
     })}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel> 
   </div>
}

export default MostSearchedCar