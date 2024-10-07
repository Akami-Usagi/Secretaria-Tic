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
    margin-top: 30px;
    align-self: center;
`
export default function TalentoTech(){
    return(
        <BugaDiv>
            <ContentDiv
            initial={{ opacity: 0,  y: -100 }}
            animate={{ opacity: 1,  y: 0}}
            transition={{ duration: .8 }}>
            <Image src={`${window.innerWidth <= 700 ? "/images/talentoTech/tech_movil.webp" : "/images/talentoTech/tech_pc.webp"}`} alt="Imagen Noticia" />
            </ContentDiv>
            <TextDiv>
                <Title>¡Haz parte de nuestro Talento Tech!</Title>
                <Text>
                    ¿Quieres impulsar tu carrera en el mundo digital? ¡Inscribete en los programas de <strong>Talento Tech</strong> de la gobernacion del Valle del Cauca! Aprende las habilidades más demandadas en el mercado laboral actual, como programación, inteligencia artificial y ciberseguridad. ¡Es tu oportunidad de adquirir conocimientos en alta calidad y abrirte puertas a nuevas oportunidades laborales!
                </Text>
                <Text>
                    No esperes más y sé árte de esta gran iniciativa que busca formar a los futuros lideres en tecnología 
                 </Text>
                <Text>
                    Haz click en el siguiente boton y descubre como Talento Tech puede transformar tu vida.
                </Text>
                <Anchor href="https://talentotechvalledelcauca.co/" target="_blank"><InfoButon>Ingresa a Talento Tech</InfoButon></Anchor>
            </TextDiv>
        </BugaDiv>
    )
}