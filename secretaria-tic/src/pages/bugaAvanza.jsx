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
                    La alcaldesa Karol Martínez ha sido una pieza clave en la transformación digital de Guadalajara de Buga, priorizando la inclusión tecnológica de todos los ciudadanos y cerrando la brecha digital que existía en la ciudad. Su enfoque ha sido claro: que todos los bugueños, sin importar su situación económica o nivel educativo, tengan acceso a las herramientas necesarias para desenvolverse en un mundo cada vez más digital. Gracias a su liderazgo y con el apoyo de la Secretaría TIC, se han desarrollado iniciativas que permiten el acceso equitativo a la tecnología, poniendo a la ciudad a la vanguardia en términos de conectividad y formación digital.
                </Text>
                <Text>
                    Uno de los mayores avances en este sentido ha sido el apoyo incondicional a los cursos ofrecidos por la Secretaría TIC, los cuales están diseñados para proporcionar habilidades esenciales a los ciudadanos. Estos programas incluyen capacitación en marketing digital, ofimática básica, Excel básico, informática básica, fotografía, fundamentos de programación y vuelo básico de drones. Estos cursos han sido fundamentales para que muchas personas, especialmente aquellas en situación de vulnerabilidad, puedan adquirir competencias que les permitan mejorar sus oportunidades laborales y estar a la altura de las demandas del mercado actual.
                </Text>
                <Text>
                    Bajo el liderazgo de Karol Martínez, el acceso a estas formaciones ha sido ampliamente promovido, asegurando que todos los ciudadanos puedan beneficiarse, independientemente de su nivel de conocimiento previo. La alcaldesa ha trabajado activamente para que estos cursos sean accesibles y gratuitos, de manera que tanto jóvenes como adultos tengan la posibilidad de aprender y aplicar nuevas tecnologías en sus vidas diarias. Esto no solo ha contribuido a reducir la brecha digital, sino que también ha fomentado el desarrollo de una cultura de innovación en la ciudad.
                </Text>
                <Text>
                    Gracias a estas iniciativas y la constante inversión en la capacitación tecnológica, Karol Martínez ha empoderado a los ciudadanos de Buga, preparándolos para enfrentar los retos de un mundo en constante evolución digital. Su compromiso con la formación y el desarrollo de competencias digitales ha sido crucial para la inclusión de todos en esta nueva era tecnológica, sentando las bases para que Guadalajara de Buga sea una ciudad más conectada, inclusiva y preparada para el futuro.
                </Text>
                <Anchor href="https://pdf-flipbook-beta.vercel.app/" target="_blank"><InfoButon>Ver Más</InfoButon></Anchor>
            </TextDiv>
        </BugaDiv>
    )
}