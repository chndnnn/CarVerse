import { useEffect, useState } from "react"
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
import { useUser } from "@clerk/clerk-react"
import axios from 'axios'
import ImageComponent from "../component/ImageComponent"
import { useLocation } from "react-router-dom"
import { eq } from "drizzle-orm"

// Define a type for the state shape
interface ListingInfo {
  userName: string | undefined;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  mileage: string;
  fuelType: string;
  transmission: string;
  vin: string;
  engineSize: number;
  drivetrain: string;
  bodyType: string;
  condition: string;
  description: string;
  airConditioning: boolean;
  leatherSeats: boolean;
  sunroof: boolean;
  bluetooth: boolean;
  backupCamera: boolean;
  parkingSensors: boolean;
  heatedSeats: boolean;
  navigationSystem: boolean;
  antiLockBrakes: boolean;
  airbags: boolean;
  tractionControl: boolean;
  laneDepartureWarning: boolean;
  blindSpotMonitoring: boolean;
  emergencyBraking: boolean;
  carImages: string[];  // Explicitly specify carImages as string[]
}

const AddNewListing = () => {

  const { user } = useUser();
  const [allImages, setAllImages] = useState<File[]>([]);
  const[loader,setLoader] = useState(false)
  const [removeAllImage,setRemoveAllImage]=useState(false)
  const location = useLocation();
  const { fromEdit , id} = location.state || {};

  const [listingInfo, setListingInfo] = useState<ListingInfo>({
    userName: user?.id,
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
    carImages: []  // Now properly typed as an empty array of strings
  });

  useEffect(()=>{
    getData()
  },[fromEdit])

  async function getData(){
    const existingCar = await db
    .select()
    .from(carListing).where(eq(carListing.id,id))
    setListingInfo({
      make: existingCar[0].make,
      model: existingCar[0].model,
      year: existingCar[0].year,
      color: existingCar[0].color,
      price: existingCar[0].price,
      mileage: existingCar[0].mileage,
      fuelType: existingCar[0].fuelType,
      transmission: existingCar[0].transmission,
      vin: existingCar[0].vin,
      engineSize: existingCar[0].engineSize,
      drivetrain: existingCar[0].drivetrain,
      bodyType: existingCar[0].bodyType,
      condition: existingCar[0].condition,
      description: existingCar[0].description,
      airConditioning: existingCar[0].airConditioning,
      leatherSeats: existingCar[0].leatherSeats,
      sunroof: existingCar[0].sunroof,
      bluetooth: existingCar[0].bluetooth,
      backupCamera: existingCar[0].backupCamera,
      parkingSensors: existingCar[0].parkingSensors,
      heatedSeats: existingCar[0].heatedSeats,
      navigationSystem: existingCar[0].navigationSystem,
      antiLockBrakes: existingCar[0].antiLockBrakes,
      airbags: existingCar[0].airbags,
      tractionControl: existingCar[0].tractionControl,
      laneDepartureWarning: existingCar[0].laneDepartureWarning,
      blindSpotMonitoring: existingCar[0].blindSpotMonitoring,
      emergencyBraking: existingCar[0].emergencyBraking,
      carImages:existingCar[0].carImages,
    });
}

  async function onSubmitClick(e: any) {
    e.preventDefault();
    if(!fromEdit){
      await ontestButtonCLick();
    }else{
      await ontestButtonCLick()
    }
  }
  
  async function updateData(){
    const { vin, ...dataToUpdate } = listingInfo;
    await db
        .update(carListing)
        .set(dataToUpdate) // Update all other fields except `vin`
        .where(carListing.vin === vin); // Condition to match the car by VIN
      console.log("Data updated successfully!");
  }
  async function saveData(){
    setLoader(true)
    try {
       await db.insert(carListing).values(listingInfo);
      console.log("data Saved successfully!!");
      setListingInfo({
        userName: user?.id,
        make: "",
        model: "",
        year: 0,
        color: "",
        price: 0,
        mileage: "",
        fuelType: "",
        transmission: "",
        vin: "",
        engineSize: 0,
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
        carImages: [],
      });
      setAllImages([]);
      setRemoveAllImage(true)
    } catch (e) {
      console.log("Error : ", e);
    }
    setLoader(false)
  }

  useEffect(()=>{
    if(listingInfo.carImages.length>0 && !fromEdit){
    saveData()
    }else{
     // updateData()
    }
  },[listingInfo.carImages])

  async function ontestButtonCLick() {
    let data = await uploadImage();
    setListingInfo((prev) => ({ ...prev, carImages: data }));
  }

  function getAllImages(file: any) {
    setAllImages(file);
  }

  async function uploadImage() {
    const uploadImageToCloudanary = async (file: any) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "carverse");
      try {
        const respose = await axios.post("https://api.cloudinary.com/v1_1/dpktm06rw/image/upload", formData);
        return respose.data.secure_url;
      } catch (err) {
        console.log(err);
      }
    };

    const uploadPromises = allImages.map((file) => uploadImageToCloudanary(file));
    const data = await Promise.all(uploadPromises);
    return data;
  }

  function onCheckBoxChecked(e: any, ele: any) {
    setListingInfo((prev) => ({ ...prev, [ele.value]: e.target.checked }));
  }

  return (
    <div>
      <Nav />
      <h2 className="text-2xl font-bold text-center py-4">{fromEdit?"Update Listing":"Add New Listing"}</h2>
      <form onSubmit={(e) => { onSubmitClick(e) }}>
        <div className="border border-solid w-[90%] mx-auto md:grid md:grid-cols-2 gap-2 p-5 rounded mb-10 shadow-xl">
          <h2 className="col-span-2 text-xl font-bold">Car Details</h2>
          {data.carFields?.map((ele, index) => {
            if (ele.type === "text" || ele.type === "number") {
              return (
                <div key={index} className="flex flex-col w-[100%]">
                  <label>{ele.label} {ele.required && <span className="text-red-500">*</span>}</label>
                  <input
                    className="w-[100%] border border-solid p-1 rounded"
                    required={ele.required}
                    placeholder={ele.placeholder}
                    value={listingInfo[ele.name]}
                    type={ele.type}
                    onChange={(e: any) => setListingInfo((prev) => ({ ...prev, [ele.name]: e.target.value }))}
                  />
                </div>
              );
            } else if (ele.type === "select") {
              return (
                <div key={index} className="flex flex-col w-[100%]">
                  <label>{ele.label} {ele.required && <span className="text-red-500">*</span>}</label>
                  <Select value={listingInfo[ele.name]} required={ele.required} onValueChange={(e: any) => (setListingInfo((prev) => ({ ...prev, [ele.name]: e })))}>
                    <SelectTrigger className="w-[100%]">
                      <SelectValue placeholder={ele.name} />
                    </SelectTrigger>
                    <SelectContent>
                      {ele.options?.map((element, i) => {
                        return <SelectItem key={i} value={element}>{element}</SelectItem>
                      })}
                    </SelectContent>
                  </Select>
                </div>
              );
            } else {
              return (
                <div key={index} className="flex flex-col w-[100%]">
                  <label>{ele.label} {ele.required && <span className="text-red-500">*</span>}</label>
                  <textarea
                    required={ele.required}
                    placeholder={ele.placeholder}
                    value={listingInfo[ele.name]}
                    className="border border-solid rounded w-[100%] p-1"
                    onChange={(e: any) => setListingInfo((prev) => ({ ...prev, [ele.name]: e.target.value }))}
                  />
                </div>
              );
            }
          })}
          <Separator className="col-span-2 bg-black" />
          <h2 className="text-2xl font-bold">Features</h2>
          <div className="col-span-2 grid md:grid-cols-4 grid-cols-2 md:gap-1 gap-y-1 text-sm md:text-lg">
            {data.carCheck.map((ele, index) => {
              return (
                <div key={index}>
                  <input className="md:mr-1 cursor-pointer" type="checkbox" checked={listingInfo[ele.value]} onChange={(e) => onCheckBoxChecked(e, ele)} />
                  <label>{ele.label}</label>
                </div>
              );
            })}
          </div>
          <Separator className="col-span-2 border-1 bg-black" />
          <div className="col-span-2">
            <ImageComponent removeAllImage={removeAllImage} getAllImages={getAllImages} existingImages={listingInfo.carImages}/>
          </div>
          <button type="submit" className="bg-black mt-2 md:mt-0 text-white hover:bg-slate-800 hover:shadow-xl rounded p-2">{loader?"Submiting..":fromEdit?"upadte":"submit"}</button>
        </div>
      </form>
    </div>
  );
}

export default AddNewListing
