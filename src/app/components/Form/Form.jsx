import './Form.css'
import Button from '../Button/Button'
import { latoBold} from '@/app/fonts'
import {Toaster, toast} from 'sonner';

export default function Form (){
       
    return (
        <>
            <form className={`form-component ${latoBold.className}`}>
            <input
                    className="form-name" 
                    type="text"
                    placeholder='Nombre*'
                    required
                    minLength={5}
                    />
            
            <input
                    className="form-email" 
                    type="email"
                    placeholder='Email*'
                    required='@'
                    

                    />

            <textarea
                    className="form-message" 
                    type="text"
                    placeholder=' Mensaje*'
                    required
                    />
            <Button/>
            
        
    </form>
    </>
    )
}