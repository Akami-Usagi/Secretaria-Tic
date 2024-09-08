import React from "react";
import styled from "styled-components";

const BugaDiv = styled.div`
    width: 100%;
    min-height: calc(100vh - 230px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-bottom: 20px;
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
    margin-bottom: 10px;
    @media (max-width: 700px){
        font-size: 1.3em;
    }
`


export default function CineAlParque(){

    

    return(
        <BugaDiv>
            <ContentDiv>
                <Image src={`${window.innerWidth <= 700 ? "/images/bannerMovil/cine_movil.webp" : "/images/banner/cine_pc.webp"}`} alt="Imagen Noticia" />
            </ContentDiv>
            <TextDiv>
                <Title>Cine al Parque se toma el barrio La Merced</Title>
                <Text>
                    La Secretaría TIC, junto con nuestra Alcaldesa Karol Martínez, tienen el placer de invitarte a un evento muy especial que hemos organizado pensando en ti y en toda la comunidad. Queremos que te unas a nosotros para disfrutar de una noche de cine al aire libre en el parque, un espacio donde la tecnología, el entretenimiento y la comunidad se encuentran para crear momentos inolvidables.
                </Text>
                <Text>
                    El evento Cine al Parque se llevará a cabo este <strong>viernes 23 de agosto a partir de las 5:00 p.m, en el parque lineal del barrio La Merced</strong> y promete ser una noche inolvidable para todos los asistentes. Contaremos con una selección cinematográfica especial que te hará reír, emocionarte y vivir una aventura sin igual.
                </Text>                
            </TextDiv>
        </BugaDiv>
    )
}