import Form from "../components/Form/Form"
import { latoBold } from "../fonts"
import './contact.css'
import Button from "../components/Button/Button"


export default function Contact(){
    return (
        <div className="contact-page">
        <h1 className="h1">Envía tu mensaje al <br />Doctor</h1>
        <Form latoBold={latoBold}/>
        
        </div>
    )
}