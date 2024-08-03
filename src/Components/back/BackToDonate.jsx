import './Back.css'
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export default function Back() {

    return (
        <Link to="/donate" className="back_btn">
            <div className="back_button">
                <ArrowLeft />
            </div>
            
        </Link>
    )
}
