import Image from "next/image";
import IconsNavBar from "../Header/IconsNavBar";
import './Footer.css'

export default function Footer(){
    return (
        <footer className="footer">
            <Image
            className="logo-footer"
            src="/assets/img/logos/logo-cadena.png"
            width={35}
            height={35}/>

            <IconsNavBar/>
        </footer>
    )
}
