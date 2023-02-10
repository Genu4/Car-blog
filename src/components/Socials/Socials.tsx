import './Socials.scss'
import { Link } from 'react-router-dom'

const Socials = () => {
    return (
        <div className="socials">
            <Link className="socials-facebook" to="/error"></Link>
            <Link className="socials-twitter" to="/error"></Link>
            <Link className="socials-pinterest" to="/error"></Link>
            <Link className="socials-email" to="/error"></Link>
        </div>
    )
}
export default Socials
