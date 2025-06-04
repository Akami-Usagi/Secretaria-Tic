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
const CousesDiv = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    margin-bottom: 50px;
    @media (max-width: 700px){
        gap: 30px;
        width: 100%;
    }
`
const CourseImage = styled.img`
    width: 300px;
    border-radius: 20px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    transition: 200ms ease-in-out;
    @media (max-width: 700px){
        width: 90%;
    }
    
`
const Anchor = styled(motion.a)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    
`
const InfoButon = styled.button`
    width: 250px;
    height: 70px;
    border: none;
    background-color: #c5e0f1;
    border-radius: 20px;
    font-family: "Montserrat", sans-serif;
    font-size: large;
    font-weight: bold;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    transition: ease-in-out 200ms;
    cursor: pointer;
    margin-bottom: 30px;
    &:hover{
        background-color: #a7a7a7;
        font-weight: 600;
        
        color: white;
    }
    @media (max-width: 500px){
        
    }
`
export default function CamaraComercio(){

    

    return(
        <BugaDiv>
            <ContentDiv
            initial={{ opacity: 0,  y: -100 }}
            animate={{ opacity: 1,  y: 0}}
            transition={{ duration: .8 }}>
                <Image src={`${window.innerWidth <= 700 ? "/images/camaraComercio/camara_movil.webp" : "/images/camaraComercio/camara_pc.webp"}`} alt="Camara de Comercio" />
            </ContentDiv>
            <TextDiv>
                <Title>Nueva alianza entre la Cámara de Comercio de Buga y la Secretaría TIC</Title>
                <Text>
                    La Cámara de Comercio de Buga y la Secretaría TIC se unen para ofrecer un curso especial diseñado para transformar habilidades y abrir nuevas oportunidades. En esta formación integral aprenderás desde el manejo profesional de Excel hasta herramientas clave de Inteligencia Artificial, estrategias de Marketing Digital y técnicas esenciales de Fotografía. Una experiencia gratuita, innovadora y con enfoque práctico, pensada para quienes quieren destacar en el mundo laboral actual. ¡Inscríbete y lleva tu talento al siguiente nivel!
                </Text>
                
                
                <Anchor href="https://docs.google.com/forms/d/e/1FAIpQLSdb9hrUPkMRY5jwIGmvb3mp2frc3jWNpmYlEF0_fEnRca2CfQ/viewform?usp=dialog" target="_blank"><InfoButon>Inscribete Aquí</InfoButon></Anchor>
            </TextDiv>
            
        </BugaDiv>
    )
}