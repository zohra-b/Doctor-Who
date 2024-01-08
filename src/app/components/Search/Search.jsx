import doctors from '../../../../public/doctors.json'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Search(){
    const [query,setQuery]=useState('')
    const handleSubmit=async(e)=>{
        e.preventDefault()

        const response=await fetch(`/src/app/doctors/search?query=${query}`)
        // const doctor=await response.json()
    }


    return(
        <div className='search'>
            <div className='search-icon'>
                <Image
                    className='magnifier'
                    src="/assets/img/icons/material-symbols-light_search.svg"
                    alt="magnifier"
                    width={20}
                    height={20}
                />
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder='Buscar'
                className='search-input'
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
            />
        
            </form>
            
            </div>
            )
            
            }
            