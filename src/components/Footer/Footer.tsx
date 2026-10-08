import BlackLogo from "../../assets/images/black_logo.png"
import "./Footer.scss"
export default function Footer(){
    return(
        <footer>
            <img src={BlackLogo} alt="Logo" />
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
        
    )
}