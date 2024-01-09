'use client'
import './Form.css'

import { latoBold} from '@/app/fonts'
import {Toaster, toast} from 'sonner';
import { useState } from 'react';

export default function Form (){
       
                const [formData, setFormData]=useState({
                        name:'',
                        email:'',
                        message:'',
                });

                const handleFormSubmit=()=>{
                        console.log(formData)
                }

                const handleInputChange=(e)=>{
                        const {name, value}=e.target;
                        setFormData({...formData,[name]:value}) 
                        // const {email, value}=e.target;
                        // setFormData({...formData,[email]:value}) 
                        // const {message, value}=e.target;
                        // setFormData({...formData,[message]:value}) 
                }
                return (
        <>
        <form className={`form-component ${latoBold.className}`}>
                <input
                        className="form-name" 
                        type="text"
                        name='name'
                        placeholder='Nombre*'
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                />
                <input
                        className="form-email" 
                        type="email"
                        name='email'
                        placeholder='Email*'
                        required='@'
                        value={formData.email}
                        onChange={handleInputChange}
                />

                <textarea
                        className="form-message" 
                        type="text"
                        name='message'
                        placeholder=' Mensaje*'
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                />
                <button className='form-button' onSubmit={handleFormSubmit}>Send</button>   
        git 
        </form>
        </>
)
}