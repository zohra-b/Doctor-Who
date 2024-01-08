'use client'
import Link from 'next/link'
import './Button.css'
import { Toaster, toast } from 'sonner'

export default function Button (){
    const Button=({onsubmit})=>{
        
    return(
    
    <button
    className={`button toast`}
    type='submit' 
    onClick={onsubmit}
    >Send</button>


)
}}
// {()=>{
    //     toast.success('Your message has been sent',{
        //         position: "top-center",
        //         duration: 3000,
        //     }
        //     )}}
        {/* <Toaster/> */}