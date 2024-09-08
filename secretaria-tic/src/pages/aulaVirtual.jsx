import React from "react";
import styled from "styled-components";

const BugaDiv = styled.div`
    width: 100%;
    min-height: calc(100vh - 230px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`
const ContentDiv = styled.div`
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
export default function AulaVirtual(){
    return(
        <BugaDiv>
            <ContentDiv>
            <Image src={`${window.innerWidth <= 700 ? "/images/aulaVirtual/aula_virtual_movil.webp" : "/images/aulaVirtual/aula_virtual_pc.webp"}`} alt="Imagen Noticia" />
            </ContentDiv>
            <TextDiv>
                <Title>Aula Virtual</Title>
                <Text>
                    ¡Transforma tu futuro con los cursos gratuitos de la Alcaldía de Guadalajara de Buga! No dejes pasar esta oportunidad de aprender y crecer desde la comodidad de tu hogar. Entra a nuestra aula virtual, descubre una amplia variedad de cursos diseñados para ti y adquiere nuevas habilidades que te abrirán puertas. ¡Inscríbete hoy y comienza tu camino hacia el éxito!
                </Text>
                <Text>
                    ¡Es momento de invertir en ti! En el aula virtual de la Alcaldía de Guadalajara de Buga encontrarás cursos innovadores que te permitirán desarrollar competencias clave en diferentes áreas. Ya sea que quieras mejorar tu perfil profesional o aprender algo nuevo, nuestros cursos están diseñados para que avances a tu propio ritmo, con el apoyo de expertos. ¡No esperes más, el conocimiento está a solo un clic de distancia!
                </Text>
                <Text>
                    Únete a nuestra comunidad de aprendizaje y sé parte del cambio. Al inscribirte en los cursos de la Alcaldía de Guadalajara de Buga, no solo estarás ampliando tus horizontes, sino también contribuyendo al desarrollo de nuestra ciudad. Cada nueva habilidad que adquieras es un paso hacia un futuro mejor, tanto para ti como para todos los que te rodean. ¡Tu éxito empieza aquí!
                </Text>
                <Anchor href="http://apropiatic.buga.gov.co:83/moodle/" target="_blank"><InfoButon>Ingresa al Aula Virtual</InfoButon></Anchor>
            </TextDiv>
        </BugaDiv>
    )
}