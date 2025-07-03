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
    width: 300px;
    border-radius: 20px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    transition: 200ms ease-in-out;
    @media (max-width: 700px){
        width: 90%;
    }
    
`
const Anchor = styled(motion.a)`
    display: flex;
    justify-content: center;
    align-items: center;
    
`


export default function Satelite(){
    

    

    return(
        <BugaDiv>
            <ContentDiv
            initial={{ opacity: 0,  y: -100 }}
            animate={{ opacity: 1,  y: 0}}
            transition={{ duration: .8 }}>
                <Image src={`${window.innerWidth <= 700 ? "/images/temporales/satelite_movil.webp" : "/images/temporales/satelite_pc.webp"}`} alt="Imagen Noticia" />
            </ContentDiv>
            <TextDiv>
                <Title>Transforma tu Futuro Digital</Title>
                <Text>
                    Prepárate para afrontar los retos de la transformación digital con nuestras formaciones especializadas. Ofrecemos el curso Ofimática 4.0, ideal para fortalecer las competencias en herramientas ofimáticas modernas. El curso de Inteligencia Artificial Aplicada te permitirá entender y aplicar conceptos clave de la IA en tu labor diaria. Finalmente, el curso de Marketing Digitál está diseñado para todas aquellas personas que deseen hacer crecer sus negocios en esta nueva era digital. ¡Capacítate, crece y transforma tu rol en la era digital!
                </Text>
                
                
                <h1>
                    Da click sobre cualquiera de los cursos a continuación e inscribete!
                </h1>
            </TextDiv>
            <CousesDiv>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSew8fdaR9wwuKHOT06mxlYDvNBCGNZYj_4qeWo9U31KB-X3kw/viewform?usp=dialog" target="_blank"><CourseImage src="/images/ofertaInstitucional/ofimatica.webp" alt="Ofimatica" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSdN0whFbWo_nr7p5E_5G0aUaBLKGZurhAzgT5yooxlUd_FtgA/viewform?usp=dialog" target="_blank"><CourseImage src="/images/ofertaInstitucional/marketing.webp" alt="Marketing" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSdxgkmDYYDqpMNpi_XJxw_QN8sxBwiTQdscVTRXhP-uY8RnAA/viewform?usp=dialog" target="_blank"><CourseImage src="/images/ofertaInstitucional/ia.webp" alt="IA" /></Anchor>
                
                
            </CousesDiv>
        </BugaDiv>
    )
}