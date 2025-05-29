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
    
`
export default function OfertaInterna(){

    

    return(
        <BugaDiv>
            <ContentDiv
            initial={{ opacity: 0,  y: -100 }}
            animate={{ opacity: 1,  y: 0}}
            transition={{ duration: .8 }}>
                <Image src={`${window.innerWidth <= 700 ? "/images/talentoHumano/talento_movil.webp" : "/images/talentoHumano/talento_pc.webp"}`} alt="Imagen Noticia" />
            </ContentDiv>
            <TextDiv>
                <Title>Impulsa tu Futuro Digital: Cursos para la administracion municipal</Title>
                <Text>
                    Prepárate para afrontar los retos de la transformación digital con nuestras formaciones especializadas para el personal de la administracion municipal. Ofrecemos el curso Ofimática 4.0, dirigido al personal asistencial (30 cupos disponibles), ideal para fortalecer las competencias en herramientas ofimáticas modernas. El curso de Inteligencia Artificial Aplicada está orientado a personal técnico (30 cupos), y te permitirá entender y aplicar conceptos clave de la IA en tu labor diaria. Finalmente, el curso de Ciberseguridad para Entornos Públicos está diseñado para profesionales que deseen proteger la información institucional y enfrentar los riesgos digitales con conocimientos actualizados. ¡Capacítate, crece y transforma tu rol en la era digital!
                </Text>
                <Text>
                    <strong>Curso de Ofimatica 4.0 para Asistenciales:</strong><br/> Horario: Martes de 8:00am a 10:00am<br/>
                    Lugar: CTD Colegio Académico<br/>
                    Fecha de Inicio: 10 de Junio de 2025
                </Text>  
                <Text>
                    <strong>Curso de Ciberseguridad para Profesionales:</strong><br/> Horario: Miércoles de 8:00am a 10:00am<br/>
                    Lugar: CTD Colegio Académico<br/>
                    Fecha de Inicio: 11 de Junio de 2025
                </Text> 
                <Text>
                    <strong>Curso de Inteligencia Artificial para Tecnicos:</strong><br/> Horario: Jueves de 8:00am a 10:00am<br/>
                    Lugar: CTD Colegio Académico<br/>
                    Fecha de Inicio: 12 de Junio de 2025
                </Text>
                
                <Text>
                    Da click sobre cualquiera de los cursos a continuación e inscribete!
                </Text>
            </TextDiv>
            <CousesDiv>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSenzhxk8nQWZVQ50A1RFIZbU3YxDAFq26QJi7djOw2uc5fHKA/viewform?usp=dialog" target="_blank"><CourseImage src="/images/ofertaInstitucional/ofimatica.webp" alt="Ofimatica" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSeuMl1BZqSZbsYenWuFrkJTawG2jw4GFjTAdBBYuWMJ9AAaWA/viewform?usp=dialog" target="_blank"><CourseImage src="/images/ofertaInstitucional/ciberseguridad.webp" alt="Ciberseguridad" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSesB04OYYAmbA1MHf_uUf08Fc6zfBTUzF-leOEp5zdatwKbbA/viewform?usp=dialog" target="_blank"><CourseImage src="/images/ofertaInstitucional/ia.webp" alt="IA" /></Anchor>
                
                
            </CousesDiv>
        </BugaDiv>
    )
}