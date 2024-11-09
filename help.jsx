import axios from "axios";

export const uploadImageToCloudanary = async(file)=>{
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "carverse");
    try {
        return response = await axios.post("https://api.cloudinary.com/v1_1/dpktm06rw/image/upload",formData);
        
    }catch(err){
        console.log(err)
    }
}