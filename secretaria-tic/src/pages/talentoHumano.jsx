import React from "react";
import styled from "styled-components";
import PersonCard from "../components/personCard";
import { motion } from "framer-motion";

const BugaDiv = styled.div`
    width: 100%;
    min-height: calc(100vh - 230px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`
const ContentDiv = styled(motion.div)`
    width: 97%;
    height: 600px;
    border-radius: 20px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    display: grid;
    place-items: center;
    overflow: hidden;
    @media (max-width: 700px){
        width: 95%;
        height: 600px;
        
    }
    
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
`
const BossDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    margin: 30px;
    @media (max-width: 1150px){
        flex-direction: column;
    }
`
const MainImageDiv = styled.div`
    width: 400px;
    height: 400px;
    display: grid;
    place-items: center;
    overflow: hidden;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    border-radius: 100%;
    @media (max-width: 1150px){
        margin-bottom: -30px;
    }
    @media (max-width: 450px){
        width: 90vw;
        height: 90vw;
        
    }
`
const MainImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
`
const MainDescription = styled.div`
    width: 700px;
    @media (max-width: 1150px){
        width: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`
const Divider = styled.div`
    width: 90%;
    height: 3px;
    background-color: gray;
    margin-bottom: 50px;
    border-radius: 3px;
`
const SupporDiv = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    margin: 30px;
    @media (max-width: 700px){
        gap: 20px;
    }
`
const TeamTitle = styled.h2`
    margin-top: -20px;
    margin-bottom: -30px;
    text-align: center;
    padding: 0 20px;
`



export default function TalentoHumano(){
    return(
        <BugaDiv>
            <ContentDiv
            initial={{ opacity: 0,  y: -100 }}
            animate={{ opacity: 1,  y: 0}}
            transition={{ duration: .8 }}>
            <Image src={`${window.innerWidth <= 700 ? "/images/talentoHumano/talento_movil.webp" : "/images/talentoHumano/talento_pc.webp"}`} alt="Imagen Noticia" />
            </ContentDiv>
            <BossDiv>
                <MainImageDiv>
                    <MainImage src="/images/talentoHumano/secretario.webp" alt="Secretario TIC"/>
                </MainImageDiv>
                <MainDescription>
                        <h3>Secretario de Tecnologías de la Información y las Comunicaciones - TIC</h3>
                        <h1>ING. Diego Fernando Carrillo Gómez</h1>
                        <h3>MAGÍSTER EN GERENCIA DE PROYECTOS - Universidad del Valle</h3>
                </MainDescription>
            </BossDiv>
            <Divider></Divider>
            <TeamTitle>Equipo de Asistencia Tecnológica Avanzada</TeamTitle>
            <SupporDiv>
                <PersonCard nombre={"Camila Gomez"} cargo={"Tecnica en Sistemas"} imagen={"/images/talentoHumano/support_2.webp"}/>
                <PersonCard nombre={"Camilo Arango"} cargo={"Desarrollador de Software"} imagen={"/images/talentoHumano/support_1.webp"}/>
                <PersonCard nombre={"Daniel Girón"} cargo={"Tecnico en Sistemas"} imagen={"/images/talentoHumano/support_4.webp"}/>
                <PersonCard nombre={"Nicolas Valencia"} cargo={"Contratista"} imagen={"/images/talentoHumano/support_5.webp"}/>
                <PersonCard nombre={"Dahiana Cardona"} cargo={"Aprendiz SENA"} imagen={"/images/talentoHumano/support_3.webp"}/>
                
            </SupporDiv>
        </BugaDiv>
    )
}