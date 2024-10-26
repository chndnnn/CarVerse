import {carlist} from './../../Datas/mostSearchCar'
import CarCard from './CarCard'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  
const MostSearchedCar = ()=>{
   return <div className='bg-[#eef0fc] py-10'>
   <h2 className='text-center text-3xl py-2 mb-5 font-bold'>Most Searched Cars</h2>
   <Carousel className='mx-14 '>
  <CarouselContent>
    {carlist.map((car,index)=>{
         return <CarouselItem key={index} className='md:basis-1/4 basis-1/1'> <CarCard car={car} index={index} /></CarouselItem>
     })}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel> 
   </div>
}

export default MostSearchedCar