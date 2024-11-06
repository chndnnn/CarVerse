const ImageComponent = ()=>{
    return <div className="grid grid-cols-2 md:grid-cols-6 gap-1 border border-green-500 w-full">
        <label htmlFor="inputId">
        <div  className="border border-red-500 h-20 flex justify-center cursor-pointer items-center">
           +
           <input type="file" id="inputId" hidden={true} />
        </div>
        </label>
        <div  className="border border-red-500 h-20 flex justify-center cursor-pointer items-center"></div>
        
    </div>
}

export default ImageComponent