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
    @media (max-width: 700px){
        width: 90%;
    }
`
const Anchor = styled(motion.a)`
    display: flex;
    justify-content: center;
    align-items: center;
`
export default function BugaAvanza(){

    

    return(
        <BugaDiv>
            <ContentDiv>
                <Image src={`${window.innerWidth <= 700 ? "/images/ofertaInstitucional/oferta_movil.webp" : "/images/ofertaInstitucional/oferta_pc.webp"}`} alt="Imagen Noticia" />
            </ContentDiv>
            <TextDiv>
                <Title>Nuestra Oferta Institucional</Title>
                <Text>
                    La Secretaría de las Tecnologias de la Información y las Comunicaciones, ofrece a toda
                    la comunidad Bugueña una fuerte oferta educativa, con el objetivo de cerrar la gran brecha digital
                    que existe entre la población bugueña. Estamos innovando cada día para así lograr ofrecer
                    nuevos cursos a toda la comunidad, en los proximos meses, a parte de las formaciones en Ofimática Básica,
                    cursos de Excel y Office, se anexan a nuestro portafolio nuevos cursos en manejo de Drones y en Fundamentos de Programación.
                </Text>  
            </TextDiv>
            <CousesDiv>
                <Anchor initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{once: true, amount: .5}} href="https://docs.google.com/forms/d/e/1FAIpQLSdX8gU0rIkeehzPpVWq7UQMwIold_QZG8BgLc39p2g-OiHVOQ/viewform?usp=sf_link" target="blank"><CourseImage src="/images/ofertaInstitucional/programacion.webp" alt="Programacion" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{once: true, amount: .5}} href="https://docs.google.com/forms/d/e/1FAIpQLSeXkjfOGVgdSnAe23W2fr-up1ES_V9EXGUuryFMXsYkM4FSSA/viewform?usp=sf_link" target="blank"><CourseImage src="/images/ofertaInstitucional/drones.webp" alt="Drones" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{once: true, amount: .5}} href="https://docs.google.com/forms/d/e/1FAIpQLSdR-dLjJqKNaxSeIQzolltsP6oGqD8CnjGABPgAm62i8PtlXg/viewform?usp=sf_link" target="blank"><CourseImage src="/images/ofertaInstitucional/excel.webp" alt="Excel" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{once: true, amount: .5}} href="https://docs.google.com/forms/d/e/1FAIpQLSdczGhT_TDY6Gil6kSrmOceSSG1RyINJ2FbvXxEODl6JhEUjA/viewform?usp=sf_link" target="blank"><CourseImage src="/images/ofertaInstitucional/fotografia.webp" alt="Fotografia" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{once: true, amount: .5}} href="https://docs.google.com/forms/d/e/1FAIpQLSdAKXSDcR2EY3jKCT_40o57m9FIwgOaC30AUNvvm_hkHzjXPQ/viewform?usp=sf_link" target="blank"><CourseImage src="/images/ofertaInstitucional/informatica.webp" alt="Informatica" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{once: true, amount: .5}} href="https://docs.google.com/forms/d/e/1FAIpQLSfUCJmZmHSnE-FL72BYZ04x_15MmzvjpoaGbyFvu6dl7b_new/viewform?usp=sf_link" target="blank"><CourseImage src="/images/ofertaInstitucional/marketing.webp" alt="Marketing" /></Anchor>
            </CousesDiv>
        </BugaDiv>
    )
}