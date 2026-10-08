import Home from "./pages/Home/Home.js"
import { Routes, Route } from "react-router-dom"
import About from "./pages/About/About.js"
import LodgingsListing from "./pages/LodgingsListing/LodgingsListing.js"
import ErrorPage from "./pages/ErrorPage/ErrorPage.js"
import Footer from "./components/Footer/Footer.js"
import Header from "./components/Header/Header.js"
export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:id" element={<LodgingsListing />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/404" element={<ErrorPage />} />
            </Routes>
            
        </>
    )
}