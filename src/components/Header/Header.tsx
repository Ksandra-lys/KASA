import Logo from "../../assets/images/logo.png"
import "./Header.scss"
import { NavLink } from "react-router-dom"


export default function Header() {
    return <header className="header_container">
        <img src={Logo} alt="Logo" /> 
        <nav> 
            <NavLink to="/" className={({ isActive }) => `nav_link ${isActive ? "active" : ""}`} >Accueil</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav_link ${isActive ? "active" : ""}`}>A propos</NavLink>
        </nav>
    </header>
} 