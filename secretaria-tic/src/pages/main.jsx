import React from "react";
import Header from "../components/header";
import Carrousel from "../components/carrousel";
import InfoCard from "../components/infoCard";
import InfoCardLeft from "../components/infoCardLeft";

export default function Main(){
    return(
        <div>
            <Header/>
            <Carrousel/>
            <InfoCard/>
            <InfoCardLeft/>
            <InfoCard/>
            <InfoCardLeft/>
        </div>
        
    )
}