import "./Banner.scss"
import { BannerProps } from "../../types/BannerProps"
export default function Banner({bannerClass, children}:BannerProps) {
    return (
        <div className={`${bannerClass} banner`}>
            {children}
        </div> 
    )
}