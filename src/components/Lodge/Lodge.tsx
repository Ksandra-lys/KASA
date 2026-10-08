import "./Lodge.scss"
import { LodgeProps } from "../../types/LodgeProps"
export default function Lodge({ cover, title, pictureClass }: LodgeProps) {
    return (
        <div className="lodge">
            <img src={cover} alt={`Photo du logement ${title}`} className={pictureClass} />
            <span>{title}</span>
        </div>
    )
}