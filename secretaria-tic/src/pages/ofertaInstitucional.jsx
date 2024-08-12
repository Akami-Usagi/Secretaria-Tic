import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
    width: 100%;
    min-height: calc(100vh - 230px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`
const BannerDiv = styled.div`
    width: 97%;
    height: 600px;
    background-color: white;
    border-radius: 20px 150px 20px 150px;
    display: grid;
    place-items: center;
    overflow: hidden;
    
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
`
const Title = styled.h1`
    text-align: left;
    font-size: 2.5rem;
`
const Text = styled.p`
    font-size: 1.5rem;
`
const CousesDiv = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    margin-bottom: 50px;
`
const CourseImage = styled.img`
    width: 300px;
    border-radius: 20px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
`
export default function OfertaInstitucional(){
    return(
        <ContentDiv>
            <BannerDiv>
                <Image src="/images/ofertaInstitucional/oferta_banner.png" alt="ImagenOferta" />
            </BannerDiv>
            <TextDiv>
                <Title>Nuestra Oferta Institucional</Title>
                <Text>
                    La Secretaría de las Tecnologias de la Informacion y las Comunicaciones, ofrece a toda
                    la comunidad Bugueña una fuerte oferta educativa, con el objetivo de cerrar la gran brecha digital
                    que existe entre la poblacion bugueña. Estamos innovando cada día para asi lograr ofrecer
                    nuevos cursos a toda la comunidad, en los proximos meses, a parte de las formaciones en Ofimatica Basica,
                    cursos de Excel y Office, se anexan a nuestro portafolio nuevos cursos en Manejo de Drones y en Fundamentos de Programacion.
                </Text>
                <Text>
                    Inscribete y se parte del proyecto Avanzando en lo Digital
                </Text>
            </TextDiv>
            <CousesDiv>
                <CourseImage src="/images/ofertaInstitucional/programacion.png" alt="Programacion" />
                <CourseImage src="/images/ofertaInstitucional/drones.png" alt="Drones" />
                <CourseImage src="/images/ofertaInstitucional/excel.png" alt="Excel" />
                <CourseImage src="/images/ofertaInstitucional/fotografia.png" alt="Fotografia" />
                <CourseImage src="/images/ofertaInstitucional/informatica.png" alt="Informatica" />
                <CourseImage src="/images/ofertaInstitucional/marketing.png" alt="Marketing" />
            </CousesDiv>
        </ContentDiv>
    )
}