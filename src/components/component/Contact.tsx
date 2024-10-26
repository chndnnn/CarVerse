import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = ()=>{
  const {isSignedIn} = useUser();
  let nav = useNavigate();
  useEffect(()=>{
    if(!isSignedIn){
     nav('/')
    }
  },[])
  return <div>
    <p>Hii I am chandan</p>
    <p>Hii I am chandan</p>
    <p>Hii I am chandan</p>
    
  </div>
}

export default Contact