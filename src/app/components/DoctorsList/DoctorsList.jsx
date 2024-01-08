'use client'
import React from "react"
import doctors from '/public/doctors.json'
import './DoctorsList.css'
import { latoBold, montserratSemiBold } from "@/app/fonts"
import VerMásButton from "../Button/VerMásButton"

export default function DoctorsList (){
    return(
        <div className="doctors-list-page">
            {
            doctors.map(doctor=>(
                <div 
                    className={`doc-card ${latoBold.className}`} 
                    key={doctor.id}>
                    <img className='doctor-foto' 
                        src={doctor.image} 
                        alt="foto {doctor.doctor}"/>
                    <h2 
                        className="doctor-number">{doctor.doctor}
                    </h2>
                    <h3 
                        className={`doctor-actor ${montserratSemiBold.className}`}>
                            {doctor.actor}
                    </h3>
                    <p 
                        className={`screen-time ${montserratSemiBold.className}`}>
                            {doctor.screen_time}</p>
                    <VerMásButton/>
                </div>
               ))
            }
        </div>
    )
}
