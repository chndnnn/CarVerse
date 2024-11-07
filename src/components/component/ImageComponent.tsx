import { useState } from "react"
import { MdCancel } from "react-icons/md";

const ImageComponent = ()=>{

    const [images,setImages] = useState<File[]>([]);
    
    function onChangeFile(e:any){
        for(let i=0 ; i<e.target.files.length ; i++){
            setImages((prev)=>[...prev,e.target.files[i]])
        }
    }

    function onCancleClick(e:any){
        setImages(images.filter((image)=>image!=e))
    }

    return <div className="grid mt-4 grid-cols-2 md:grid-cols-6 gap-1  w-full">
        <label htmlFor="inputId">
        <div  className="border border-red-500 h-20 flex justify-center cursor-pointer items-center">
            +
           <input type="file" multiple={true} id="inputId" onChange={onChangeFile} hidden={true} />
        </div>
        </label>
        {images?.map((image)=>{
           return <div  className=" h-20 flex justify-center cursor-pointer relative items-center">
            <img src={URL.createObjectURL(image)} alt="" className="h-full w-full" />
            <MdCancel onClick={()=>onCancleClick(image)} className="absolute right-0 top-0 text-white" />
           </div>
        })
            
        }
        
        
    </div>
}

export default ImageComponent