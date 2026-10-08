import Header from "../../components/Header/Header.js";
import "./About.scss"
import Footer from "../../components/Footer/Footer.js";
import Collapses from "../../components/Collapses/Collapses.js";
import Banner from "../../components/Banner/Banner.js";
export default function About() {

    return (
        <div className="about_container">

            <Header /> 
            <main className="about_main_container">
                <Banner bannerClass={"about_banner"}/>
                <div className="site_informations_container">
                    <Collapses descriptionText={"Fiabilité"} descriptionClass={"description"} detailsClass={"details"}
                        detailsText={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."} 
                        collapseContainerClass={"collapse_informations"}/>

                    <Collapses descriptionText={"Respect"} descriptionClass={"description"} detailsClass={"details"}
                        detailsText={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."} 
                        collapseContainerClass={"collapse_informations"}/>

                    <Collapses descriptionText={"Service"} descriptionClass={"description"} detailsClass={"details"}
                        detailsText={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."} 
                        collapseContainerClass={"collapse_informations"}/>

                    <Collapses descriptionText={"Sécurité"} descriptionClass={"description"} detailsClass={"details"}
                        detailsText={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."} 
                        collapseContainerClass={"collapse_informations"}/>
                </div>
            </main>
            <Footer/>
        </div>

    )

}