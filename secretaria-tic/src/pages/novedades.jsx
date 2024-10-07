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
                <Title>Graduacion Avanzando en lo Digital</Title>
                <Text>
                    La ciudad de Buga celebró con orgullo la graduación de la primera promoción del programa "Avanzando en lo Digital", una iniciativa impulsada por la Secretaría TIC en colaboración con la alcaldesa Karol Martínez. Este proyecto, diseñado para promover la inclusión digital y brindar herramientas tecnológicas a los ciudadanos, culminó con la entrega de certificados a más de 250 personas que se formaron en diversas áreas de la tecnología y la informática. La ceremonia se llevó a cabo en un ambiente de alegría y emoción, donde los graduados recibieron su título como reconocimiento a su dedicación y esfuerzo.
                </Text>  
                <Text>
                    Durante el programa, los participantes tuvieron la oportunidad de capacitarse en cursos como informática básica, ofimática, Excel y Word básico, fundamentos de programación, vuelo básico de drones, gestión documental, servicio al cliente, fotografía y marketing digital. Estos conocimientos les permitirán no solo mejorar sus habilidades personales, sino también abrir nuevas oportunidades laborales en un mundo cada vez más digitalizado. La iniciativa "Avanzando en lo Digital" se convierte así en un pilar fundamental para el desarrollo social y económico de la comunidad bugueña, fomentando el progreso y el bienestar de sus ciudadanos.
                </Text> 
                <Text>
                    La alcaldesa Karol Martínez destacó en su discurso la importancia de apostar por la tecnología como herramienta de transformación social, afirmando que este es solo el comienzo de muchos proyectos que buscarán impulsar el talento local y preparar a la comunidad para los retos del futuro digital. Asimismo, felicitó a los graduados por su compromiso y esfuerzo, e invitó a más ciudadanos a sumarse a las próximas ediciones del programa para seguir construyendo una Buga más conectada, moderna e inclusiva.
                </Text> 
            </TextDiv>
            <CousesDiv>
                <CourseImage src="/images/novedades/novedades_1.webp" alt="Novedades 1" />
                <CourseImage src="/images/novedades/novedades_2.webp" alt="Novedades 2" />
                <CourseImage src="/images/novedades/novedades_3.webp" alt="Novedades 3" />
                <CourseImage src="/images/novedades/novedades_4.webp" alt="Novedades 4" />
                <CourseImage src="/images/novedades/novedades_5.webp" alt="Novedades 5" />
                <CourseImage src="/images/novedades/novedades_6.webp" alt="Novedades 6" />
                
            </CousesDiv>
        </BugaDiv>
    )
}