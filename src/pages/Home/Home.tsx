import Header from "../../components/Header/Header.js";
import lodgings from "../../datas/lodgings.json"
import Lodge from "../../components/Lodge/Lodge.js"
import "./Home.scss"
import Footer from "../../components/Footer/Footer.js";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
export default function Home() {
    return (
        <div className="home_container">
            <Header/>
            <main className="home_main_container">
                <Banner bannerClass={"home_main_banner"} >
                    <span className="main_banner1">Chez vous, </span>
                    <span className="main_banner2">partout et ailleurs</span>
                </Banner>

                <div className="lodgings_container">
                    {lodgings.map(({ cover, title, id }) =>
                    (
                        <Link key={id} to={`/logement/${id}`}>
                                <Lodge cover={cover} title={title} pictureClass={"lodging_picture"} />
                        </Link>
                    )
                    )}
                </div>
            </main>
            <Footer/>
        </div>
    )

}