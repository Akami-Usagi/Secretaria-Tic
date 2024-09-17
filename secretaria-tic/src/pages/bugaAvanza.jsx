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
export default function BugaAvanza(){
    return(
        <BugaDiv>
            <ContentDiv>
            <Image src={`${window.innerWidth <= 700 ? "/images/bugaAvanza/buga_avanza_movil.webp" : "/images/bugaAvanza/buga_avanza_pc.webp"}`} alt="Imagen Noticia" />
            </ContentDiv>
            <TextDiv>
                <Title>Buga Avanza En Lo Digital</Title>
                <Text>
                    En estos primeros 100 días de liderazgo, hemos visto cómo la visión y la determinación de nuestra alcaldesa han comenzado a transformar nuestra ciudad. Su compromiso inquebrantable con el bienestar de cada ciudadano ha sembrado las semillas de un futuro más próspero y equitativo. Sigamos adelante con la misma fuerza y unidad, porque este es solo el comienzo de un camino lleno de logros y esperanza para todos.
                </Text>
                <Text>
                    Con solo 100 días al frente, nuestra alcaldesa ha demostrado que el cambio verdadero es posible cuando se gobierna con el corazón y la mente enfocados en el bienestar común. Cada decisión tomada, cada paso dado, ha sido con el propósito de construir una comunidad más fuerte, inclusiva y segura. Hoy celebramos no solo sus logros, sino la promesa de un futuro donde todos tengamos la oportunidad de prosperar y vivir en armonía.
                </Text>
                <Text>
                    Estos 100 días han sido un testimonio de lo que se puede lograr cuando una líder valiente se compromete a servir con integridad y dedicación. Nuestra alcaldesa ha inspirado a muchos, no solo por su capacidad de tomar decisiones difíciles, sino por su habilidad para unir a nuestra ciudad en torno a una visión compartida de progreso. Con ella al timón, no hay duda de que lo mejor está por venir.
                </Text>
                <Anchor href="https://pdf-flipbook-beta.vercel.app/" target="_blank"><InfoButon>Ver Más</InfoButon></Anchor>
            </TextDiv>
        </BugaDiv>
    )
}