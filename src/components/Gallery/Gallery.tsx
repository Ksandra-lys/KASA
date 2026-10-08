import RightArrow from "../../assets/icons/right_arrow.svg"
import LeftArrow from "../../assets/icons/left_arrow.svg"
import "./Gallery.scss"
import { useState } from "react"
import { GalleryProps } from "../../types/GalleryProps"
export default function Gallery({ pictures, title }: GalleryProps) {
    const [currentIndex, setIndex] = useState(0)
    const RightSlide = () => {
        currentIndex < pictures.length - 1 ?
            setIndex(currentIndex + 1) :
            setIndex(0)
    }
    const LeftSlide = () => {
        currentIndex > 0 ?
            setIndex(currentIndex - 1) :
            setIndex(pictures.length - 1)
    }
    return (
        <div className="listing_lodging_picture_container">
            {pictures.length >= 2 ?
                (<>
                    <img src={LeftArrow} alt="Icône de flèche gauche" className="left_arrow" onClick={LeftSlide} />
                    <img src={pictures[currentIndex]} alt={`Photo du logement ${title}`} className="listing_lodging_picture" />
                    <img src={RightArrow} alt="Icône de flèche droite" className="right_arrow" onClick={RightSlide} />
                </>) : (
                    <img src={pictures[0]} alt={`Photo du logement ${title}`} className="listing_lodging_picture" />

                )
            }
        </div>
    )
}