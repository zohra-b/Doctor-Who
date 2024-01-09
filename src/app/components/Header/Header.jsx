'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


import './Header.css'
import IconsNavBar from './IconsNavBar'
import DoctorSearch from '../Search/Search'
import DoctorCard from '../Search/page'
import { montserratSemiBold} from '@/app/fonts'
import Search from '../Search/Search'


export default function Header() {
  
  return (
  <header className={`header ${montserratSemiBold.className}`}>
    <nav className='header-left'>
      <ul>
        <Link className='pages-route' href="../know/">Conoce a</Link>
        <Link className='pages-route' href='../doctors/'>Doctores</Link>
        <Link  className='pages-route' href='../contact/'>Contacto</Link>
      </ul></nav>
    <Link href='/'>
        <Image
          className='logo-header'
          src="/assets/img/logos/logo.png"
          alt="doctor who logo"
          width= {141.42}
          height= {144.9} />
      </Link>

    <nav className='header-right'>
      <div className='search'>
      <Search/>
      </div> 
      <IconsNavBar />
    </nav>
  </header>)}
        {/* <div className='search-icon'>
          <Image
            className='magnifyer'
            src="\assets\img\icons\material-symbols-light_search.svg"
            alt="magnifyer"
            width= {20}
            height= {20} />
        </div>
        <input 
          type="text" 
          placeholder='Buscar' 
          className='search-input'/>
      </div> */}