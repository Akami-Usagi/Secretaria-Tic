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


export default function HelpPeople(){
    return(
        <BugaDiv>
            <ContentDiv
            initial={{ opacity: 0,  y: -100 }}
            animate={{ opacity: 1,  y: 0}}
            transition={{ duration: .8 }}>
            <Image src={`${window.innerWidth <= 700 ? "/images/helpPeople/helppeople_movil.webp" : "/images/helpPeople/helppeople_pc.webp"}`} alt="Imagen Noticia" />
            </ContentDiv>
            <TextDiv>
                <Title>Impulsando el futuro digital de Buga</Title>
                <Text>
                    La transformación digital de Guadalajara de Buga avanza con pasos firmes, y ahora damos un nuevo impulso con la entrega de 50 becas para formación en programación, gracias a la alianza entre la Secretaría TIC y HelpPeople. Esta iniciativa representa una oportunidad única para que más personas adquieran habilidades tecnológicas clave, fomentando el desarrollo profesional y fortaleciendo el ecosistema digital de nuestra ciudad.
                </Text>
                <Text>
                    <strong>El 9 de abril</strong>, 50 beneficiarios iniciarán un camino de aprendizaje que les abrirá puertas en el mundo de la tecnología, preparándolos para los desafíos de la era digital y contribuyendo al crecimiento de una Buga más innovadora y conectada. Este es un paso más hacia una comunidad con más oportunidades y un futuro impulsado por el conocimiento digital.
                </Text>

                <Text>
                    <strong>¡Seguimos construyendo juntos la transformación digital de Buga!</strong>
                </Text>
                
                
            </TextDiv>
        </BugaDiv>
    )
}