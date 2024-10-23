import React from "react";
import styled from "styled-components";
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
const TextDiv = styled.div`
    width: 70%;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 700px){
        width: 90%;
        margin-bottom: 10px;
    }
`
const Title = styled.h1`
font-size: 2.5em;
@media (max-width: 700px){
    text-align: center;
    font-size: 2.5em;
    }
`
const Text = styled.p`
    font-size: 1.4em;
    @media (max-width: 700px){
        font-size: 1.3em;
    }
`
const VideoPlayer = styled.iframe`
    width: 700px;
    height: 394px;
    margin-bottom: 50px;
    border-radius: 15px;
    box-shadow: 3px 3px 15px rgba(0,0,0,0.5);
    @media (max-width: 700px){
        width: 90%;
        height: 300px;
    }
`


export default function Eventos(){

    

    return(
        <BugaDiv>
            <ContentDiv
            initial={{ opacity: 0,  y: -100 }}
            animate={{ opacity: 1,  y: 0}}
            transition={{ duration: .8 }}>
                <Image src={`${window.innerWidth <= 700 ? "/images/eventos/eventos_movil.webp" : "/images/eventos/eventos_pc.webp"}`} alt="Imagen Noticia" />
            </ContentDiv>
            <TextDiv>
                <Title>Entrevista al Secretario TIC Diego Carrillo</Title>
                <Text>
                    En una reciente entrevista realizada por los estudiantes del Colegio Académico de Buga, Diego Fernando Carrillo, secretario de las TIC del municipio, abordó los avances y desafíos de la transformación digital en la región. Durante la conversación, Carrillo destacó la implementación de nuevas tecnologías en servicios públicos y educativos, así como el impulso al acceso a Internet para mejorar la conectividad en zonas rurales. También enfatizó la importancia de la capacitación digital para los ciudadanos, con el fin de fomentar una sociedad más inclusiva y preparada para los retos tecnológicos del futuro.
                </Text>  
            </TextDiv>
            <VideoPlayer  src="https://www.youtube.com/embed/nxTFBs3Q2kI?si=Q_Jts3dxrxoX2MEt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></VideoPlayer>
            
        </BugaDiv>
    )
}