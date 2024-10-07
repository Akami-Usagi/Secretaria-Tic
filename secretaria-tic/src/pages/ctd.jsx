import React from "react";
import styled from "styled-components";
import InfoCard from "../components/infoCard";
import InfoCardLeft from "../components/infoCardLeft";
import { motion } from "framer-motion";

const BugaDiv = styled.div`
    width: 100%;
    min-height: calc(100vh - 230px);
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: 90%;
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
@media (max-width: 500px){
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

export default function CTD(){

    const biblioTitle = "Biblioteca Carlos H. Morales";
    const biblioText = "La Biblioteca Carlos H. Morales es un espacio cultural fundamental para la comunidad de Buga. Este recinto no solo alberga una vasta colección de libros, sino que también se ha convertido en un centro de aprendizaje y desarrollo personal.";
    const itaTitle = "Colegio ITA Buga";
    const itaText = "Históricamente, el Instituto Técnico Agrícola de Guadalajara de Buga, inicia sus labores de formación al comienzo de la década de 1940, como Granja Agrícola de Buga, brindando en una primera etapa, capacitación puramente técnica mediante cursos cortos, pero casi de inmediato se crea la Básica Secundaria y los primeros Instructores Agrícolas adquirieron ese título con base en 5 años de educación primaría y 4 años de Educación Secundaria.";
    const academicoTitle = "Colegio Academico de Buga";
    const academicoText = "El Colegio Académico de Buga, Valle del Cauca, fue fundado en 1743 por real cédula del rey de España Felipe V. El colegio fue dirigido por los Jesuitas hasta 1767, cuando la compañía religiosa fue expulsada de España. Durante la guerra civil de 1875, el colegio cerró sus aulas para ser utilizado como cuartel. En 1986, la Universidad del Valle, seccional Buga, ocupó el edificio.";
    

    return(
        <BugaDiv>
            <ContentDiv
            initial={{ opacity: 0,  y: -100 }}
            animate={{ opacity: 1,  y: 0}}
            transition={{ duration: .8 }}>
            <Image src={`${window.innerWidth <= 700 ? "/images/centrosTransformacion/ctd_movil.webp" : "/images/centrosTransformacion/ctd_pc.webp"}`} alt="Imagen Noticia" />
            </ContentDiv>
            <TextDiv>
                <Title>¡Conoce nuestros Centros de Transformación Digital!</Title>
                <Text>
                    En Guadalajara de Buga, la tecnología está al alcance de todos. Gracias a los puntos de transformación digital, impulsados por la Secretaría de las Tecnologías de la Información y las Comunicaciones, ahora tienes la oportunidad de adquirir nuevas habilidades digitales y mejorar tu calidad de vida.
                </Text>
                <Text>
                    <strong>¿Qué puedes encontrar en nuestros puntos digitales?</strong> <br/>
                </Text>
                <Text>
                    <strong>Capacitaciones gratuitas:</strong> Aprende a utilizar herramientas digitales para estudiar, trabajar y emprender.<br/>
                    <strong>Acceso a internet:</strong> Conéctate al mundo digital y explora un sinfín de oportunidades.<br/>
                    <strong>Asesoría tecnológica:</strong> Resuelve tus dudas y recibe apoyo personalizado para tus proyectos digitales.<br/>
                    <strong>Equipamiento moderno:</strong> Utiliza computadores, tablets y otros dispositivos para desarrollar tus habilidades.</Text>
                <Text>
                    <strong>¡No te quedes atrás!</strong> <br/>

                    La Secretaría TIC te invita a visitar nuestros puntos de transformación digital y a aprovechar todos los beneficios que te ofrecemos. Juntos, haremos de Buga una ciudad más conectada, innovadora y próspera.
                </Text>
            </TextDiv>
            <InfoCardLeft image={"/images/centrosTransformacion/biblioteca.webp"} link={"https://www.facebook.com/p/Biblioteca-Publica-Carlos-H-Morales-100069603720955/"} target={"_blank"} title={biblioTitle} text={biblioText}/>
            <InfoCard image={"/images/centrosTransformacion/ita.webp"} link={"https://institucion-educativa-agricola-de-guadalajara-de-buga.micolombiadigital.gov.co/"} target={"_blank"} title={itaTitle} text={itaText}/>
            <InfoCardLeft image={"/images/centrosTransformacion/academico.webp"} link={"https://institucioneducativaacademico.edu.co/"} target={"_blank"} title={academicoTitle} text={academicoText}/>
        </BugaDiv>
    )
}