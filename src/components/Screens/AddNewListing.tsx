import { useState } from "react"
import Nav from "../component/Nav"
import data from "./../../Datas/FormInputdetails.json"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "./../ui/separator"
import { db } from "./../../../Config/index" 
import carListing from "./../../../Config/schema"


const AddNewListing = ()=>{
  const [listingInfo,setListingInfo] = useState({
    make: "",
    model: "",
    year: 0, // Ensure numerical fields are initialized as numbers
    color: "",
    price: 0,
    mileage: "",
    fuelType: "",
    transmission: "",
    vin: "",
    engineSize: 0, // Numerical field
    drivetrain: "",
    bodyType: "",
    condition: "",
    description: "",
    airConditioning: false,
    leatherSeats: false,
    sunroof: false,
    bluetooth: false,
    backupCamera: false,
    parkingSensors: false,
    heatedSeats: false,
    navigationSystem: false,
    antiLockBrakes: false,
    airbags: false,
    tractionControl: false,
    laneDepartureWarning: false,
    blindSpotMonitoring: false,
    emergencyBraking: false,
  })

  async function onSubmitClick(e:any){
    e.preventDefault();
    console.log(listingInfo)
    try{
       await db.insert(carListing).values(listingInfo);
       console.log("data Saved successfully!!")
    }catch(e){
      console.log("Error : ",e)
    }
  }

  function onCheckBoxChecked(e:any,ele:any){
    setListingInfo((prev)=>({...prev,[ele.value]:e.target.checked}))
        
  }



    return <div>
      <Nav/>
      <h2 className="text-2xl font-bold text-center py-4">Add New Listing</h2>
      <form onSubmit={(e)=>{onSubmitClick(e)}}>
      <div className="border border-solid w-[90%] mx-auto md:grid md:grid-cols-2 gap-2 p-5 rounded mb-10 shadow-xl">
       <h2 className="col-span-2 text-xl font-bold">Car Details</h2>
        {data.carFields?.map((ele,index)=>{
          if(ele.type == "text" || ele.type == "number"){
            return <div key={index} className="flex flex-col w-[100%] " >
             <label >{ele.label} {ele.required && <span className="text-red-500">*</span>}</label>
              <input className="w-[100%] border border-solid p-1 rounded" required={ele.required} placeholder={ele.placeholder} type={ele.type} onBlur={(e:any)=>setListingInfo((prev)=>({...prev,[ele.name]:e.target.value}))} />
              </div>
          }else if(ele.type == "select"){
            return <div key={index} className="flex flex-col w-[100%]">
              <label>{ele.label} {ele.required && <span className="text-red-500">*</span>}</label>
              <Select required={ele.required}  onValueChange={(e:any)=>(setListingInfo((prev)=>({...prev,[ele.name]:e})))}>
  <SelectTrigger className="w-[100%]">
    <SelectValue placeholder={ele.name} />
  </SelectTrigger>
  <SelectContent>
    {ele.options?.map((element,i)=>{
      return <SelectItem key={i} value={element}>{element}</SelectItem>
    })}
  </SelectContent>
</Select>

            </div>
          }else{
            return <div key={index} className="flex flex-col w-[100%]">
             <label>{ele.label} {ele.required && <span className="text-red-500">*</span>}</label>
              {/* <input type={ele.type} required={ele.required} placeholder={ele.placeholder} className="w-[100%]" onBlur={(e:any)=>setListingInfo((prev)=>({...prev,[ele.name]:e.target.value}))}/> */}
              <textarea   required={ele.required} placeholder={ele.placeholder} className="border border-solid rounded w-[100%] p-1" onBlur={(e:any)=>setListingInfo((prev)=>({...prev,[ele.name]:e.target.value}))}></textarea>
              </div>
          }
        
        })}
         <Separator className="col-span-2 bg-black"/>
         <h2 className="text-2xl font-bold ">Features</h2>
        <div className="col-span-2 grid md:grid-cols-4 grid-cols-2 md:gap-1 gap-y-1 text-sm md:text-lg">
           {data.carCheck.map((ele,index)=>{        
            return <div key={index}>
              <input className="md:mr-1 cursor-pointer" type="checkbox" onChange={(e)=>onCheckBoxChecked(e,ele)}/>
              <label>{ele.label}</label>
              </div>
           })}
        </div>
        <Separator className="col-span-2 border-1 bg-black"/>
        <button type="submit" className="bg-black mt-2 md:mt-0 text-white hover:bg-slate-800 hover:shadow-xl rounded p-2">submit</button>
      </div>
      </form>
    </div>
}

export default AddNewListing