import './Button.css'
import Link from 'next/link';
export default function VerMásButton() {
    return (
        <Link 
        href="https://www.doctorwho.tv/" 
        className="button"
        target="_blank">
            Ver más
        </Link>
    );
}