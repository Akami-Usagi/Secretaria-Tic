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
export default function BugaAvanza(){
    return(
        <BugaDiv>
            <ContentDiv
            initial={{ opacity: 0,  y: -100 }}
            animate={{ opacity: 1,  y: 0}}
            transition={{ duration: .8 }}>
            <Image src={`${window.innerWidth <= 700 ? "/images/bugaAvanza/buga_avanza_movil.webp" : "/images/bugaAvanza/buga_avanza_pc.webp"}`} alt="Imagen Noticia" />
            </ContentDiv>
            <TextDiv>
                <Title>Buga Avanza En Lo Digital</Title>
                <Text>
                    La alcaldesa Karol Martínez ha liderado con éxito la transformación digital de Guadalajara de Buga, enfocándose en cerrar la brecha digital y garantizar que todos los ciudadanos tengan acceso a herramientas tecnológicas. Con el apoyo de la Secretaría TIC, ha impulsado la implementación de programas gratuitos de capacitación en áreas clave como marketing digital, ofimática básica, Excel básico, informática básica, fotografía, fundamentos de programación y vuelo básico de drones. Estos cursos han sido fundamentales para brindar nuevas oportunidades a los ciudadanos, mejorando su empleabilidad y acceso a la información.
                </Text>
                <Text>
                    Gracias a su visión inclusiva, Martínez ha logrado que personas de todas las edades y niveles educativos puedan acceder a estas formaciones, reduciendo las barreras que antes limitaban el acceso a la tecnología en la ciudad. Su compromiso con la educación digital ha preparado a Buga para enfrentar los desafíos de un mundo cada vez más tecnológico, promoviendo una mayor equidad y fomentando el desarrollo económico y social.
                </Text>
                
                <Anchor href="https://pdf-flipbook-beta.vercel.app/" target="_blank"><InfoButon>Ver Más</InfoButon></Anchor>
            </TextDiv>
        </BugaDiv>
    )
}