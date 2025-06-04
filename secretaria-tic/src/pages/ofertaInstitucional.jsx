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
export default function OfertaInstitucional(){

    

    return(
        <BugaDiv>
            <ContentDiv
            initial={{ opacity: 0,  y: -100 }}
            animate={{ opacity: 1,  y: 0}}
            transition={{ duration: .8 }}>
                <Image src={`${window.innerWidth <= 700 ? "/images/ofertaInstitucional/oferta_movil.webp" : "/images/ofertaInstitucional/oferta_pc.webp"}`} alt="Imagen Noticia" />
            </ContentDiv>
            <TextDiv>
                <Title>¡Avanzando en lo Digital se renueva!</Title>
                <Text>
                La Secretaría de Tecnologías de la Información y las Comunicaciones sigue fortaleciendo su compromiso 
                con la comunidad bugueña a través de "Avanzando en lo Digital 2.0", una estrategia renovada para continuar 
                cerrando la brecha digital. Además de nuestros cursos en Ofimática Básica, Excel, Office, Manejo de Drones 
                y Fundamentos de Programación, ahora incorporamos <strong>Ciberseguridad, Introducción a la Realidad Extendida y 
                Manejo de Plataformas Digitales.</strong> Seguimos innovando para ofrecer oportunidades de formación accesibles y 
                alineadas con las necesidades del mundo digital. ¡Prepárate para potenciar tus habilidades con nosotros!
                </Text>  
            </TextDiv>
            <CousesDiv>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSeP1086aoDjwa1Mg7DVvvET5Sa2MtatPGoilvTKzIEpZpxQgA/viewform" target="_blank"><CourseImage src="/images/ofertaInstitucional/programacion.webp" alt="Programacion" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSf_IATgBVletsRUOAzl089zrc_dRZ20S_f3ivjNiiEnqvtccg/viewform" target="_blank"><CourseImage src="/images/ofertaInstitucional/dron.webp" alt="Drones" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSfaf-CtoCnp4y0cOXXioGgXTXrngwZBM-dgLMWZnXUq0X9bPQ/viewform" target="_blank"><CourseImage src="/images/ofertaInstitucional/excel.webp" alt="Excel" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSchyNt__o7Yi_f1mth7j9h3tvYpoZApQSXJuFepGagtiXTF2A/viewform" target="_blank"><CourseImage src="/images/ofertaInstitucional/ciberseguridad.webp" alt="Ciberseguridad" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSe3zF6riloblJ4KeVc6ZLHAyO06OX7NFPqtLhBWJ6PRnQcf3g/viewform" target="_blank"><CourseImage src="/images/ofertaInstitucional/ia.webp" alt="Inteligencia Artificial" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLScNZFiPvF2oT_76GW0pajJ9hkWu3HCVGPnPOM_N91a3jB9OJw/viewform" target="_blank"><CourseImage src="/images/ofertaInstitucional/plataformas.webp" alt="Plataformas" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLScAlgp8UtYkx7qrnOtqctKD1-7YhTNT_iXFQts_vzrYGdjU3w/viewform" target="_blank"><CourseImage src="/images/ofertaInstitucional/ofimatica.webp" alt="Ofimatica" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSe9c7dQGZmlzeDSfEFpF29CF51FHoqvVQ86IWPcKfT3_k0m7Q/viewform" target="_blank"><CourseImage src="/images/ofertaInstitucional/informatica.webp" alt="Informatica" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSegPCkf2BCFeiOzmrrhWXJWbGoUShPcOcfOTgHJToSWgFTU6A/viewform" target="_blank"><CourseImage src="/images/ofertaInstitucional/vr.webp" alt="Realidad Extendida" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSfGjd_TlcxrDPPtCqnrnBgDNnY7jopflS9xXd-cpawlpYpDuw/viewform" target="_blank"><CourseImage src="/images/ofertaInstitucional/audio.webp" alt="Audio Digital" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSdJRskSI_LFqzHom3lUj4DBKc1Zj9fFDqeYqfyPo8SAg91e9Q/viewform" target="_blank"><CourseImage src="/images/ofertaInstitucional/gestion.webp" alt="Gestion Documental" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSeM1JDQFRhO0kTTKhH0a2DXlnHg35_XV2p4mkROu3qpucTObQ/viewform" target="_blank"><CourseImage src="/images/ofertaInstitucional/marketing.webp" alt="Marketing Digital" /></Anchor>
            </CousesDiv>
        </BugaDiv>
    )
}