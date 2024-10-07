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
    width: 400px;
    border-radius: 20px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    @media (max-width: 500px){
        width: 90%;
    }
`

export default function Novedades(){

    

    return(
        <BugaDiv>
            <ContentDiv
            initial={{ opacity: 0,  y: -100 }}
            animate={{ opacity: 1,  y: 0}}
            transition={{ duration: .8 }}>
                <Image src={`${window.innerWidth <= 700 ? "/images/novedades/novedades_movil.webp" : "/images/novedades/novedades_pc.webp"}`} alt="Imagen Noticia" />
            </ContentDiv>
            <TextDiv>
                <Title>Meetup NIDO</Title>
                <Text>
                    El pasado miercoles 14 de agosto, Marco Osorio fue uno de los ponentes destacados en el Meetup NIDO en Buga, donde compartió su valiosa experiencia como emprendedor. Durante su intervención, Marco habló con total franqueza sobre los desafíos que ha enfrentado a lo largo de su trayectoria en el mundo del emprendimiento, subrayando tanto sus logros como sus fracasos.
                </Text>  
                <Text>
                    Uno de los puntos más impactantes de su charla fue cuando mencionó aquellas decisiones y errores que, en retrospectiva, no volvería a cometer. Reconoció que, en los primeros años, su impaciencia y el deseo de lograr resultados rápidos lo llevaron a tomar decisiones apresuradas. Estas decisiones, según Marco, terminaron afectando tanto la calidad de los productos que ofrecía como la confianza de sus clientes. También mencionó la importancia de no subestimar la planificación financiera y el impacto que tuvo el no contar con un plan estructurado desde el principio.
                </Text> 
                <Text>
                    A pesar de estos tropiezos, Marco destacó que cada error le enseñó lecciones valiosas que hoy aplica en su vida empresarial. Subrayó la importancia de la resiliencia, la paciencia y la construcción de relaciones a largo plazo en el ecosistema emprendedor. Su charla fue un recordatorio inspirador de que el fracaso es parte del proceso y que, con la mentalidad adecuada, puede convertirse en una herramienta para el éxito.
                </Text> 
                <Text>
                    La presentación de Marco Osorio fue, sin duda, un testimonio honesto y reflexivo que resonó profundamente entre los asistentes, quienes se sintieron identificados con los retos del camino emprendedor.
                </Text> 
                <Text>
                    Marco Osorio también aprovechó su presentación para agradecer a las personas e instituciones que hicieron posible el evento. Expresó su gratitud a la alcaldesa Karol Martínez por su apoyo continuo al ecosistema emprendedor en Buga, así como al secretario TIC, Diego Fernando Carrillo Gómez, por su compromiso con el desarrollo tecnológico de la región. Además, reconoció el esfuerzo de la Cámara de Comercio de Buga, que jugó un papel clave en la organización del Meetup NIDO, brindando un espacio para que emprendedores como él pudieran compartir sus experiencias y aprendizajes.
                </Text>
                <Text>
                    Este reconocimiento destacó la importancia de la colaboración entre el sector público y privado para fomentar el crecimiento y el fortalecimiento del emprendimiento local. 
                </Text>
            </TextDiv>
            <CousesDiv>
                <CourseImage src="/images/novedades/novedades_1.webp" alt="Novedades 1" />
                <CourseImage src="/images/novedades/novedades_2.webp" alt="Novedades 2" />
                <CourseImage src="/images/novedades/novedades_3.webp" alt="Novedades 3" />
                <CourseImage src="/images/novedades/novedades_4.webp" alt="Novedades 4" />
                <CourseImage src="/images/novedades/novedades_5.webp" alt="Novedades 5" />
                
            </CousesDiv>
        </BugaDiv>
    )
}