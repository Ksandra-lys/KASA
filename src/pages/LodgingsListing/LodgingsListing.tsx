import { Navigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header.js";
import lodgings from "../../datas/lodgings.json"
import "./LodgingsListing.scss"
import GreyStar from "../../assets/icons/grey_star.svg"
import Collapses from "../../components/Collapses/Collapses.js"
import Footer from "../../components/Footer/Footer.js"
import OrangeStar from "../../assets/icons/orange_star.svg"
import Gallery from "../../components/Gallery/Gallery.js";
export default function LodgingsListing(){
    const { id } = useParams()
    const lodging = lodgings.find((item) => item.id === id)
    if (!lodging) {
        return <Navigate to="/404" />
    }

    const rate = [1, 2, 3, 4, 5]

    return (
        <div className="lodging_listing_container">
            <Header />
            <main className="lodging_listing_main_container">
                <Gallery pictures={lodging.pictures} title={lodging.title} />
                <div className="lodging_informations_container">
                    <div className="lodging_information">
                        <div className="lodging_location_tags">
                            <div className="title_location">
                                <span className="title">{lodging.title}</span>
                                <span className="location">{lodging.location}</span>
                            </div>
                            <div className="lodging_tags" >
                                {lodging.tags.map((tag) => <div className="tag" key={tag}>{tag}</div>)}
                            </div>
                        </div>
                        <div className="host_name_ratings">
                            <div className="host_name_picture">
                                <div className="host_name_surname">
                                    <span className="host_name">{lodging.host.name.split(" ")[0]} </span>
                                    <span className="host_name">{lodging.host.name.split(" ")[1]}</span>
                                </div>
                                <img src={lodging.host.picture} alt="Photo de l'hote" />
                            </div>
                            <div className="ratings">
                                {rate.map((star) => (
                                    <img
                                        key={star}
                                        src={star <= Number(lodging.rating) ? OrangeStar : GreyStar}
                                        alt=""
                                    />
                                ))}
                            </div>
                        </div> 
                    </div>
                    <div className="lodging_details">
                        <Collapses descriptionText={"Description"} descriptionClass={"lodging_details_description"}
                            detailsText={lodging.description} detailsClass={"lodging_details_text_desc"}
                            collapseContainerClass={"lodging_collapse_informations"} />
                        <Collapses descriptionText={"Equipements"} descriptionClass={"lodging_details_equipment"}
                            detailsText={lodging.equipments.map((equipment) =>
                                <div className="equipments" >
                                    <span className="equipment">{equipment}</span>
                                </div> 
                            )} detailsClass={"lodging_details_text_eqpmts"} collapseContainerClass={"lodging_collapse_informations"} />
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}