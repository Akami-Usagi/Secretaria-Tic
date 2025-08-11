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
const InfoButon = styled.button`
    width: 300px;
    height: 50px;
    border: none;
    background-color: #e4e4e4;
    border-radius: 20px;
    font-family: "Montserrat", sans-serif;
    font-size: large;
    transition: ease-in-out 200ms;
    align-self: center;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    &:hover{
        background-color: #a7a7a7;
        font-weight: 600;
        width: 320px;
        
        color: white;
    }
    @media (max-width: 700px){
        margin-top: 20px;
    }
`
const Anchor = styled.a`
    align-self: center;
    margin-top: 30px;
`
export default function BugaConectada(){
    return(
        <BugaDiv>
            <ContentDiv
            initial={{ opacity: 0,  y: -100 }}
            animate={{ opacity: 1,  y: 0}}
            transition={{ duration: .8 }}>
            <Image src={`${window.innerWidth <= 700 ? "/images/bugaConectada/conectada_movil.webp" : "/images/bugaConectada/conectada_pc.webp"}`} alt="Buga Conectada" />
            </ContentDiv>
            <TextDiv>
                <Title>Parques Conectados: Internet Gratis para Todos</Title>
                <Text>
                    Disfruta de los espacios públicos de Buga y mantente siempre conectado. Nuestro mapa interactivo te muestra todos los parques con acceso gratuito a internet, para que puedas ubicarlos fácilmente y aprovechar este beneficio pensado para la comunidad. ¡Explora el mapa y descubre el punto más cercano para navegar sin costo!
                </Text>
                <Text>
                    Da click en el botón y explora el mapa de parques conectados
                </Text>
                
                <Anchor href="http://bugaconectada.vercel.app" target="_blank"><InfoButon>Buga Conectada</InfoButon></Anchor>
            </TextDiv>
        </BugaDiv>
    )
}