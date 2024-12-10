import { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";

const ImageComponent = ({
  getAllImages,
  removeAllImage,
  existingImages = [],  // New prop to pass existing images
}: {
  getAllImages: any;
  removeAllImage: boolean;
  existingImages?: string[];  // Optional array of existing image URLs
}) => {
  const [images, setImages] = useState<(File | string)[]>([]);  // Allow both File and string types for images
  
  // Reset images when removeAllImage is true
  useEffect(() => {
    if (removeAllImage) {
      setImages([]);
    }
  }, [removeAllImage]);

  // Initialize the images with existing ones
  useEffect(() => {
    if (existingImages.length > 0) {
      setImages(existingImages);  // Set initial images to URLs
    }
  }, [existingImages]);

  // Handle file input change
  function onChangeFile(e: any) {
    for (let i = 0; i < e.target.files.length; i++) {
      setImages(prev => [...prev, e.target.files[i]]);
    }
  }

  // Pass updated images to parent component
  useEffect(() => {
    getAllImages(images);
  }, [images]);

  // Handle cancel (remove) image
  function onCancleClick(image: File | string) {
    setImages(images.filter(img => img !== image));
  }

  return (
    <div className="grid mt-4 grid-cols-2 md:grid-cols-6 gap-1 w-full">
      <label htmlFor="inputId">
        <div className="border border-red-500 h-20 flex justify-center cursor-pointer items-center">
          +
          <input type="file" multiple={true} id="inputId" onChange={onChangeFile} hidden={true} />
        </div>
      </label>
      
      {images.map((image, index) => (
        <div key={index} className="h-20 flex justify-center cursor-pointer relative items-center">
          {typeof image === 'string' ? (
            // For existing images, render them directly from URL
            <img src={image} alt="Existing" className="h-full w-full object-cover" />
          ) : (
            // For new images, render them with URL.createObjectURL
            <img src={URL.createObjectURL(image)} alt="New" className="h-full w-full object-cover" />
          )}
          
          <MdCancel onClick={() => onCancleClick(image)} className="absolute bg-black rounded-full right-0 top-0 text-white cursor-pointer" />
        </div>
      ))}
    </div>
  );
};

export default ImageComponent;
