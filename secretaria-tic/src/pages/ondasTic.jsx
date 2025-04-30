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
        align-items: center;
        width: 85%;
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
const Video = styled.iframe`
    align-self: center;
`


export default function OndasTic(){
    return(
        <BugaDiv>
            <ContentDiv
            initial={{ opacity: 0,  y: -100 }}
            animate={{ opacity: 1,  y: 0}}
            transition={{ duration: .8 }}>
            <Image src={`${window.innerWidth <= 700 ? "/images/ondasTic/ondas_tic_movil.webp" : "/images/ondasTic/ondas_tic_pc.webp"}`} alt="Imagen Noticia" />
            </ContentDiv>
            <TextDiv>
                <Title>Escucha nuestro Podcast Tecnologico</Title>
                <Text>
                    La Secretaría TIC de Guadalajara de Buga lanza su nuevo podcast! Un espacio donde lo clásico y lo digital se encuentran para hablar de transformación digital, inclusión tecnológica y cómo estamos cerrando la brecha digital en nuestro municipio. Acompáñanos en este recorrido sonoro por historias, avances y proyectos que muestran cómo la tecnología puede ser una aliada para todos. ¡Escúchalo y sé parte del cambio digital en Buga!
                </Text>
                <Text>
                    Escucha el episodio de esta semana a continuacion.
                </Text>
                
                <Video width="560" height="315" src="https://www.youtube.com/embed/EnL9WsHNvro?si=JBQG1Ecl7l5diOzT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></Video>                
                
            </TextDiv>
        </BugaDiv>
    )
}
