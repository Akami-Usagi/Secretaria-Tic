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
                <Title>¡Avanzando en lo Digital 2026 ya está aquí!</Title>
                <Text>
                    <strong>La Secretaría de Tecnologías de la Información y las Comunicaciones</strong> reafirma su compromiso con la comunidad bugueña presentando <strong>“Avanzando en lo Digital 2026”</strong>, una nueva edición de nuestra estrategia para seguir cerrando la brecha digital y fortalecer las competencias tecnológicas en el municipio.
                </Text> 
                <Text>
                    Este año continuamos impulsando nuestra oferta propia de formación con cursos diseñados para brindar herramientas prácticas y actuales: Curso Básico Piloto de Dron, Excel, Informática Básica, Ofimática Básica, Manejo de Plataformas Digitales y Audio Digital. Espacios pensados para estudiantes, emprendedores, trabajadores y ciudadanos que desean mejorar sus habilidades, optimizar sus procesos y adaptarse a las dinámicas del entorno digital.
                </Text>
                <Text>
                    Además, en articulación con el <strong>Servicio Nacional de Aprendizaje (SENA)</strong>, ampliamos las oportunidades de formación con cursos certificados en WhatsApp Business, Creación de Contenido para Redes Sociales, Marketing Digital y Fotografía Básica de Productos para Redes Sociales. Esta alianza fortalece la calidad académica del programa y brinda a los participantes la posibilidad de obtener certificación respaldada por una de las instituciones más reconocidas del país.
                </Text>
                <Text>
                    Seguimos avanzando, innovando y generando oportunidades reales de crecimiento para nuestra comunidad.
                    ¡Inscríbete y sé parte de <strong>Avanzando en lo Digital 2026!</strong>
                </Text>
                <Text>
                    Presiona la imagen del curso al que quieras inscribirte y completa el formulario.
                </Text>

            </TextDiv>
            <CousesDiv>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLScpRstBWCwsHg2KHyk5u_rgFy9EfNixXQXKRfXyBuPtnmJOaQ/viewform?usp=dialog" target="_blank"><CourseImage src="/images/ofertaInstitucional/dron.webp" alt="Drones" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSeQ_1kTULo4VG850Bh2xcrHAuByMUKNryLowga194xhFchirA/viewform?usp=dialog" target="_blank"><CourseImage src="/images/ofertaInstitucional/excel.webp" alt="Excel" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSfFySbYH6C_iWTBPZ1Qy46v8DmidfHrqQOkZeOmEgvsgh3xHg/viewform?usp=dialog" target="_blank"><CourseImage src="/images/ofertaInstitucional/plataformas.webp" alt="Plataformas" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSdpIZiGGKfsidDdGmOL50MXxhJkWoXTyCPc5FivyoCZSmiSNg/viewform?usp=dialog" target="_blank"><CourseImage src="/images/ofertaInstitucional/ofimatica.webp" alt="Ofimatica" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSfpVCWFRygfnN03O9NokKkh7Jn2V8VTlO0leB-G5UjDpV-hKg/viewform?usp=dialog" target="_blank"><CourseImage src="/images/ofertaInstitucional/informatica.webp" alt="Informatica" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLScRPnDipzY7m0yUqJlSgv9CZHbDpLVJ_C7BwDGsoZQHFNtmYA/viewform?usp=dialog" target="_blank"><CourseImage src="/images/ofertaInstitucional/audio.webp" alt="Audio Digital" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSexo-22YJ02GB1xNSDFOQSBeqFI7VlBAy_64XKZhiEI5NF7vw/viewform?usp=dialog" target="_blank"><CourseImage src="/images/ofertaInstitucional/marketing.webp" alt="Marketing Digital" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSehez31aB3vtS5HCyVfWyLedh-2bua_XO4489ydO9GgysAlWw/viewform?usp=dialog" target="_blank"><CourseImage src="/images/ofertaInstitucional/fotografia.webp" alt="Fotografia Movil" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSex_7uyTzDEZK_yC8eog5bKVMfXJOaytyF58Wg0uZ5BXXgyTQ/viewform?usp=dialog" target="_blank"><CourseImage src="/images/ofertaInstitucional/whatsapp.webp" alt="Whatssap Business" /></Anchor>
                <Anchor initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{once: true, amount: .5}}
                        transition={{ duration: 0.5 }} href="https://docs.google.com/forms/d/e/1FAIpQLSf18DeQpCJ7IioWZM2HxwWm4JMHJdnfH7OPHMz8tOIyep6RzQ/viewform?usp=dialog" target="_blank"><CourseImage src="/images/ofertaInstitucional/contenido.webp" alt="Contenido" /></Anchor>

            </CousesDiv>
        </BugaDiv>
    )
}