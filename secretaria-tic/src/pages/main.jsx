import React from "react";
import Carrousel from "../components/carrousel";
import InfoCard from "../components/infoCard";
import InfoCardLeft from "../components/infoCardLeft";

export default function Main(){
    return(
        <div>
            <Carrousel/>
            <InfoCard/>
            <InfoCardLeft/>
            <InfoCard/>
            <InfoCardLeft/>
        </div>
        
    )
}