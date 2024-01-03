'use client'
import Link from 'next/link'
import './Button.css'
import { Toaster, toast } from 'sonner'

export default function Button (){
    return(
        <>
    <button 
    className="button" 
    type='submit' 
    onClick={()=>{
        toast.success('Your message has been sent',{
            position: "top-center",
            duration: 5000,
            
        }

        )}}>Send</button>
    <Toaster
  />
    </>

    )
}

export function VerMásButton (){
    return(
        <>
    <button 
    className="button" 
    type='button'       
    >Ver más</button>
   
    </>

    )
}