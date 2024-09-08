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
    
    @media (max-width: 500px){
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
    @media (max-width: 500px){
        margin-top: 20px;
    }
`
const Anchor = styled.a`
    margin-top: 30px;
    align-self: center;
`
export default function Digicampus(){
    return(
        <BugaDiv>
            <ContentDiv>
            <Image src={`${window.innerWidth <= 500 ? "/images/digicampus/digicampus_movil.webp" : "/images/digicampus/digicampus_pc.webp"}`} alt="Imagen Noticia" />
            </ContentDiv>
            <TextDiv>
                <Title>¡Bienvenido a DigiCampus!</Title>
                <Text>
                    !La puerta a tu futuro! Esta plataforma es más que un simple acceso a la educación, es la oportunidad que estabas esperando para transformar tu vida. Gracias al compromiso de la Gobernación del Valle, ahora tienes la posibilidad de acceder a becas universitarias que te permitirán alcanzar tus sueños.
                </Text>
                <Text>
                    Imagina un lugar donde cada clic te acerca un paso más a la carrera de tus sueños, donde las barreras económicas ya no te detienen, y donde el esfuerzo es recompensado con oportunidades reales. En DigiCampus, el conocimiento está al alcance de todos, y con el apoyo de la Gobernación del Valle, esas metas que parecían inalcanzables están más cerca de lo que imaginas.
                </Text>
                <Text>
                    No estás solo en este camino; una comunidad de estudiantes, docentes y profesionales te acompañará, inspirándote a dar lo mejor de ti. Es tu momento de brillar, de demostrar de lo que eres capaz. ¡Aprovecha esta oportunidad única! DigiCampus está aquí para impulsarte hacia el éxito. ¡El futuro es tuyo, y comienza ahora!
                </Text>
                <Anchor href="https://campusdigital.valledelcauca.gov.co/inicio" target="_blank"><InfoButon>Ingresa a Digicampus</InfoButon></Anchor>
            </TextDiv>
        </BugaDiv>
    )
}