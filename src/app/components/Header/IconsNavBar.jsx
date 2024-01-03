import React from "react"
import Image from "next/image"
import Link from "next/link"
import './Header.css'

export default function IconsNavBar (){
    return (
    <nav className="icon-bar"> 
        <Link 
        className="social-links"
        href="https.//www.facebook.com">
            <Image 
            src="/assets/img/icons/facebook.svg"
            width={24}
            height={24}
            alt="facebook icon"/>
        </Link>
        <Link
        className="social-links"
        href="https.//www.twitter.com">
            <Image 
            src="/assets/img/icons/simple-icons_x.svg"
            width={24}
            height={24}
            alt="X icon"/>
        </Link>
        <Link
        className="social-links"
        href="https.//www.instagram.com">
            <Image 
            src="/assets/img/icons/mdi_instagram.svg"
            width={24}
            height={24}
            alt="instagram icon"/>
        </Link>
        <Link
        className="social-links"
        href="https.//www.facebook.com">
            <Image 
            src="\assets\img\icons\ic_baseline-tiktok.svg"
            width={24}
            height={24}
            alt="tiktok icon"/>
        </Link>
        </nav>)
}