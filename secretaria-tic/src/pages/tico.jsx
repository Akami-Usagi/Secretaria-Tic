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
    margin-bottom: 20px;
`
const ContentDiv = styled(motion.div)`
    width: 97%;
    height: 600px;
    border-radius: 20px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    display: grid;
    place-items: center;
    overflow: hidden;
    @media (max-width: 500px){
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
    
    @media (max-width: 500px){
        width: 90%;
        margin-bottom: 10px;
    }
    
`
const Title = styled.h1`
font-size: 2.5em;
@media (max-width: 500px){
    text-align: center;
    font-size: 2.5em;
}
`
const Text = styled.p`
    font-size: 1.4em;
    margin-bottom: 10px;
    @media (max-width: 500px){
        font-size: 1.3em;
    }
`


export default function Tico(){

    

    return(
        <BugaDiv>
            <ContentDiv
            initial={{ opacity: 0,  y: -100 }}
            animate={{ opacity: 1,  y: 0}}
            transition={{ duration: .8 }}>
                <Image src={`${window.innerWidth <= 500 ? "/images/tico/tico_movil.webp" : "/images/tico/tico_pc.webp"}`} alt="Imagen Noticia" />
            </ContentDiv>
            <TextDiv>
                <Title>Conozcan a TIC-O</Title>
                <Text>
                    TIC-O es la nueva adquisicion de la Secretaría TIC de Guadalajara de buga, esta programado para llevar
                    diversion y alegría a todos los niños de la ciudad, su directriz primaria es la de enseñar a todos los niños
                    y niñas la importancia de aprender nuevas tecnologias y adentrarse en la nueva era digital. 
                </Text>  
                <Text>
                    Buga se mantiene <strong>Avanzando en lo Digital</strong>, y ahora con la ayuda de TIC-O exploraremos nuevos horizontes tecnologicos.
                </Text>
            </TextDiv>
        </BugaDiv>
    )
}