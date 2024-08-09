import React from "react";
import Header from "../components/header";
import Carrousel from "../components/carrousel";
import InfoCard from "../components/infoCard";

export default function Main(){
    return(
        <div>
            <Header/>
            <Carrousel/>
            <InfoCard/>
        </div>
        
    )
}