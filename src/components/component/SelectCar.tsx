import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { CiSearch } from "react-icons/ci";
  import { Separator } from "@/components/ui/separator"
  import data from './../../Datas/selectlisting.json'
  

const SelectCar = ()=>{

   return <><div className="flex z-10 flex-col md:flex md:flex-row justify-center items-center w-[100%] md:p-4 font-bold p-1 md:w-[50%] gap-1 bg-white md:rounded-full">
    <Select>
  <SelectTrigger className="md:w-[180px] w-full outline-none border-none">
    <SelectValue placeholder={"Cars"} />
  </SelectTrigger>
  <SelectContent>
    {data.cars.map((e,i)=>
        <SelectItem key={i} value={e}>{e}</SelectItem>
    )}
  </SelectContent>
</Select>

<Separator orientation="vertical" className="md:block hidden" />
<Select>
  <SelectTrigger className="md:w-[180px] w-full outline-none border-none">
    <SelectValue placeholder="Car makes" />
  </SelectTrigger>
  <SelectContent>
  {data.carMakes.map((e,i)=>
         <SelectItem key={i} value={e}>{e}</SelectItem>
    )}
  </SelectContent>
</Select>
<Separator orientation="vertical" className="md:block hidden"/>
<Select>
  <SelectTrigger className="md:w-[180px] w-full outline-none border-none">
    <SelectValue placeholder="Pricing" />
  </SelectTrigger>
  <SelectContent>
  {data.prices.map((e,i)=>
         <SelectItem key={i} value={e}>{e}</SelectItem>
    )}
  </SelectContent>
</Select>
<Separator orientation="vertical" className="md:block hidden"/>
<CiSearch className="text-3xl md:cursor-pointer md:block hidden bg-blue-300 rounded-full hover:text-blue-500"/>
   </div>
   <button className="md:hidden w-full bg-slate-700 text-white px-3 py-1 rounded mt-2">Search</button>
   </>
}

export default SelectCar