import React from 'react';
import Image from 'next/image';
import VerMásButton from '../components/Button/VerMásButton';
import { latoBold, montserratSemiBold } from '../fonts';
import './know.css'

export default function Conoce() {
    return (
        <div>
            <div className="know-page">
                <section className="know-page-text">
                    <h1 className={`know-page-title ${latoBold.className}`}>
                        Conoce a ... decimotercera doctor
                    </h1>
                    <p className={`know-page-description ${montserratSemiBold.className}`}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto dolor suscipit inventore hic, autem quisquam minus, reprehenderit nobis deleniti numquam aspernatur odio repellendus delectus, eos in nisi debitis. Architecto, provident.
                    </p>
                    <VerMásButton />
                </section>
                <section>
                    <Image
                        className="know-page-image"
                        src="/assets/img/doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg"
                        alt="foto decimotercera doctor"
                        width={303}
                        height={407}
                    />
                </section>
            </div>
        </div>
    );
}
