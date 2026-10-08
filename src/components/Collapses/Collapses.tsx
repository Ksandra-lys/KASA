import { useState } from "react";
import DownArrow from "../../assets/icons/down_arrow.svg";
import UpArrow from "../../assets/icons/up_arrow.svg";
import { CollapsesProp } from "../../types/CollapsesProps";
export default function Collapses({descriptionText,detailsText,descriptionClass,detailsClass,collapseContainerClass
}:CollapsesProp) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={collapseContainerClass}>

            <div className={`${descriptionClass} ${isOpen && "active"}` } onClick={()=>setIsOpen(!isOpen)}>
                <span>{descriptionText}</span>
                <img src={isOpen ? DownArrow : UpArrow} alt="Icône de flèche"/>
            </div>

            {isOpen && (
                <div className={detailsClass}>
                    {detailsText}
                </div>
            )}

        </div>
    );
}