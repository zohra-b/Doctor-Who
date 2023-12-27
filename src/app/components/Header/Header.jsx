import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


import './Header.css'
import IconsNavBar from './IconsNavBar'
import { montserratSemiBold} from '@/app/fonts'


// const links = [{
//   label: 'Conoce a',
//   route: "/app/know"
// }, {
//   label: 'Doctores',
//   route: '/app/doctors/'
// }, {
//   label: 'Contacto',
//   route: '/app/contact/'
// }
// ]
export default function Header() {
  
  return (
  <header className={`header ${montserratSemiBold.className}`}>
    <nav className='header-left'>
      <ul>
        <Link className='pages-route' href="../know/">Conoce a</Link>
        <Link className='pages-route' href='../doctors/'>Doctores</Link>
        <Link  className='pages-route' href='../contact/'>Contacto</Link>
      </ul></nav>
    <Image
        className='logo-header'
        src="/assets/img/logos/logo.png"
        alt="logo doctor who"
        width= {190}
        height= {195} />

    <nav className='header-right'>
      <div className='search'>
        <Image
        className='magnifyer'
        src="\assets\img\icons\material-symbols-light_search.svg"
        alt="magnifyer"
        width= {20}
        height= {20} />
        <p>Search</p>
      </div>
      <IconsNavBar />
   </nav>
 
  </header>)}