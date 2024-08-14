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
        width: 90%;
        margin-bottom: 10px;
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
const CousesDiv = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    margin-bottom: 50px;
    @media (max-width: 500px){
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

export default function BugaAvanza(){

    

    return(
        <BugaDiv>
            <ContentDiv>
                <Image src={`${window.innerWidth <= 400 ? "/images/ofertaInstitucional/oferta_movil.webp" : "/images/ofertaInstitucional/oferta_pc.webp"}`} alt="Imagen Noticia" />
            </ContentDiv>
            <TextDiv>
                <Title>Nuestra Oferta Institucional</Title>
                <Text>
                    La Secretaría de las Tecnologias de la Informacion y las Comunicaciones, ofrece a toda
                    la comunidad Bugueña una fuerte oferta educativa, con el objetivo de cerrar la gran brecha digital
                    que existe entre la poblacion bugueña. Estamos innovando cada día para asi lograr ofrecer
                    nuevos cursos a toda la comunidad, en los proximos meses, a parte de las formaciones en Ofimatica Basica,
                    cursos de Excel y Office, se anexan a nuestro portafolio nuevos cursos en Manejo de Drones y en Fundamentos de Programacion.
                </Text>  
            </TextDiv>
            <CousesDiv>
                <CourseImage src="/images/ofertaInstitucional/programacion.webp" alt="Programacion" />
                <CourseImage src="/images/ofertaInstitucional/drones.webp" alt="Drones" />
                <CourseImage src="/images/ofertaInstitucional/excel.webp" alt="Excel" />
                <CourseImage src="/images/ofertaInstitucional/fotografia.webp" alt="Fotografia" />
                <CourseImage src="/images/ofertaInstitucional/informatica.webp" alt="Informatica" />
                <CourseImage src="/images/ofertaInstitucional/marketing.webp" alt="Marketing" />
            </CousesDiv>
        </BugaDiv>
    )
}