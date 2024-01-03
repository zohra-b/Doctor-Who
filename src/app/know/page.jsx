import { VerMásButton } from "../components/Button/Button";
import { latoBold } from "../fonts";
import './know.css'
import Image from "next/image";

export default function Conoce(){
    return (
        <div className="know-page">
           <section className="know-page-text">
        <h1 className={`know-page-title ${latoBold.className}`}>Conoce a ... decimotercera doctor</h1>
        <p className="know-page-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto dolor suscipit inventore hic, autem quisquam minus, reprehenderit nobis deleniti numquam aspernatur odio repellendus delectus, eos in nisi debitis. Architecto, provident.</p>
        <VerMásButton/>
        </section>
        <section>
        <Image 
        src="/assets/img/doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg" 
        alt="foto doctor"
        width={303}
        height={407} />
        </section>
        </div> 
    )
}