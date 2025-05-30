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
const MainImageDiv = styled(motion.div)`
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
                <MainImageDiv
                initial={{ opacity: 0, scale:0 }}
                whileInView={{ opacity: 1, scale:1 }}
                viewport={{once: true, amount: .5}}
                transition={{ duration: .7 }}>
                    <MainImage src="/images/talentoHumano/secretario.webp" alt="Secretario TIC"/>
                </MainImageDiv>
                <MainDescription>
                        <h3>Secretario de Tecnologías de la Información y las Comunicaciones - TIC</h3>
                        <h1>ING. Diego Fernando Carrillo Gómez</h1>
                        <h3>MAGÍSTER EN GERENCIA DE PROYECTOS - Universidad del Valle</h3>
                </MainDescription>
            </BossDiv>
            <Divider></Divider>
            <TeamTitle>Equipo de Promotores Digitales</TeamTitle>
            <SupporDiv>
                <PersonCard nombre={"Julio Villaquiran"} cargo={"Piloto Comercial de Avión"} imagen={"/images/talentoHumano/julio.webp"}/>
                <PersonCard nombre={"Harold Toro"} cargo={"Técnico en Sistemas"} imagen={"/images/talentoHumano/harold.webp"}/>
                <PersonCard nombre={"Gustavo Rodriguez"} cargo={"Tecnólogo en Sistemas"} imagen={"/images/talentoHumano/gustavo.webp"}/>
                <PersonCard nombre={"Maribel Peñaranda"} cargo={"Ingeniera de Sistemas"} imagen={"/images/talentoHumano/maribel.webp"}/>
                <PersonCard nombre={"Sandra Fernandez"} cargo={"Ingeniera de Sistemas"} imagen={"/images/talentoHumano/sandra.webp"}/>
                <PersonCard nombre={"James Sanchez"} cargo={"Ingeniero de Sistemas / Magister en Ciberseguridad"} imagen={"/images/talentoHumano/james.webp"}/>
                <PersonCard nombre={"Camilo Arango"} cargo={"Analista y Desarrollador de Software"} imagen={"/images/talentoHumano/camilo.webp"}/>
                
            </SupporDiv>
        </BugaDiv>
    )
}