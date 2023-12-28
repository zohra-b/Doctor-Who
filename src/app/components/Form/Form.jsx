import './Form.css'
import Button from '../Button/Button'
import { latoBold} from '@/app/fonts'

export default function Form (){
    return (
        <form className={`form-component ${latoBold.className}`}>
            <input
                    className="form-name" 
                    type="text"
                    placeholder='Nombre*'
                    minLength={6}/>
            
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
                    />
            
            <Button text="Send"/>
            
        
    </form>
    )
}