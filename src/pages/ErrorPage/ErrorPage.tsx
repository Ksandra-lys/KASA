import Header from "../../components/Header/Header.js"
import { Link } from "react-router-dom";
import "./ErrorPage.scss";
import Footer from "../../components/Footer/Footer.js";
export default function Error() {
    return (
        <div className="errorpage_container">
        <Header/>
        <main className="error_page">
            <div className="error_status_description">
                <span className="error_status">404</span>
                <span className="error_description">Oups! La page que vous demandez n'existe pas.</span>
            </div>
            
            <Link to="/">Retourner sur la page d'accueil</Link>
        </main>
        <Footer/>
        </div>
        
    );
}