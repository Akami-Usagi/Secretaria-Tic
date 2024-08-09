import React from "react";
import Carrousel from "../components/carrousel";
import InfoCard from "../components/infoCard";
import InfoCardLeft from "../components/infoCardLeft";

export default function Main(){
    return(
        <div>
            <Carrousel/>
            <InfoCard image={"/images/banner/image_1.webp"}/>
            <InfoCardLeft image={"/images/banner/image_2.webp"}/>
            <InfoCard image={"/images/banner/image_3.webp"}/>
            <InfoCardLeft image={"/images/banner/image_1.webp"}/>
        </div>
        
    )
}