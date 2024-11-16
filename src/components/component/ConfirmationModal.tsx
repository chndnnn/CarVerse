import { useState } from 'react';
import ReactModal from 'react-modal';

interface ConfirmationModalInterface {
    children : any
    onDeleteClick? : any
    data:String
    showDelete?:boolean
    closeModall?:boolean
    loader?:boolean,
    showSonfirm?:boolean
}

const ConfirmationModal:React.FC<ConfirmationModalInterface> = ({children,onDeleteClick,data,showDelete,closeModall,loader,showSonfirm})=>{

  const [isOpen, setIsOpen] = useState(false);

  if(closeModall){
        setIsOpen(false); 
    } 

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function onDeleteButtonClick (){
   await onDeleteClick()
   closeModal()
  }
  async function onConfirmClick (){
    closeModal()
   }
  return (
    <div>
      <button onClick={openModal}>{children}</button>
      <ReactModal className=' md:w-[30%] h-[20%] rounded-lg gap-2 bg-slate-50 shadow-lg flex flex-col justify-center items-center mx-auto my-auto mt-20' isOpen={isOpen} onRequestClose={closeModal}>
        <h2>{data}</h2>
        <div className='flex gap-2'>
        <button className='bg-green-600 text-white p-1 rounded-lg px-3'  onClick={closeModal}>Close</button>
        {showDelete && <button onClick={onDeleteButtonClick} className='bg-red-600 text-white p-1 rounded-lg px-3'>{loader?"Deleting..":"Delete"}</button> }
        {showSonfirm && <button onClick={onConfirmClick} className='bg-green-600 text-white p-1 rounded-lg px-3'>{loader?"Confirming..":"Confirm"}</button> }
        </div>
      </ReactModal>
    </div>
  );
}

export default ConfirmationModal