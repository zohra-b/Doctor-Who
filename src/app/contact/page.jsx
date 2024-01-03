import Form from "../components/Form/Form"
import { latoBold, montserratSemiBold } from "../fonts"
import './contact.css'



export default function Contact(){
    return (
        <div className="contact-page">
        <h1 className={`h1 ${montserratSemiBold.className}`}>Envía tu mensaje al <br />Doctor</h1>
        <Form latoBold={latoBold}/>
        </div>
    )
}