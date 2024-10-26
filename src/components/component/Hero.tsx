import SelectCar from "./SelectCar"
import Category from "./Category"
import MostSearchedCar from "./MostSearchedCar"
import SectionComponent from './SectionComponent'
import Footer from './Footer'

const Hero = ()=>{
    return<><div className="w-[100%] border bg-black md:h-48">
       <div className="flex flex-col justify-center items-center mt-10 md:mt-14 font-sans gap-y-5">
        <h2 className="md:text-lg text-xs text-white">Find car for sale and for rent near you</h2>
        <div className="relative w-full h-14 flex justify-center z-0">
        <video
        autoPlay
        loop
        muted
        className=" top-0 left-0 w-full h-full object-cover"
      >
        <source src="/CarVideo.mp4" type="video/mp4" />
      </video>
         <h2 className="absolute top-[-1px] md:top-0 md:text-5xl text-3xl text-center text-white font-bold h-full w-full bg-black mix-blend-multiply">Find Your Dream Car</h2>
        </div>
       </div>
    </div>
    <div className="flex flex-col p-5  items-center md:p-5 md:h-[350px] h-[270px] relative bg-[#eef0fc]">
    <SelectCar/>
    <img src="heroCar2.png" className="absolute w-[70%] md:top-10 top-44 z-0" />
    </div>
    
    <div className=" p-2 md:mt-60 mt-20">
    <h2 className="text-center text-3xl font-bold mb-5">Browse By Type</h2>
   <Category/>
   </div>
   <MostSearchedCar />
   <SectionComponent/>
   <Footer/>
    </> 
} 

export default Hero