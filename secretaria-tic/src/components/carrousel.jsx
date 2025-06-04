import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';



const CarroulseDiv = styled(motion.div)`
    width: 100%;
    display: grid;
    place-items: center;
`
const CustomCarrousel = styled(Carousel)`
    width: 97%;
    height: 700px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    @media (max-width: 700px){
        width: 95%;
        height: 800px;
    }
    
`
const ImageDiv = styled.div`
    background: url("/images/ofertaInstitucional/oferta_pc.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 700px;
    display: flex; 
    flex-direction: column;
    align-items: baseline;
    justify-content: end;
    overflow: hidden;
    padding: 70px;
    color: white;
    font-size: larger;
    @media (max-width: 700px){
        justify-content: baseline;
        align-items: center;
        background: url("/images/ofertaInstitucional/oferta_movil.webp");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 800px;
    }
`
const ImageDiv2 = styled.div`
    background: url("/images/helpPeople/helppeople_pc.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 700px;
    display: flex; 
    flex-direction: column;
    align-items: baseline;
    justify-content: end;
    overflow: hidden;
    padding: 70px;
    color: white;
    font-size: larger;
    @media (max-width: 700px){
        justify-content: baseline;
        align-items: center;
        background: url("/images/helpPeople/helppeople_movil.webp");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 800px;
    }
`
const ImageDiv3 = styled.div`
    background: url("/images/ondasTic/ondas_tic_pc.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 700px;
    display: flex; 
    flex-direction: column;
    align-items: baseline;
    justify-content: end;
    overflow: hidden;
    padding: 70px;
    color: white;
    font-size: larger;
    @media (max-width: 700px){
        justify-content: baseline;
        align-items: center;
        background: url("/images/ondasTic/ondas_tic_movil.webp");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 800px;
    }
`
const ImageDiv4 = styled.div`
    background: url("/images/talentoHumano/talento_pc.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 700px;
    display: flex; 
    flex-direction: column;
    align-items: baseline;
    justify-content: end;
    overflow: hidden;
    padding: 70px;
    color: white;
    font-size: larger;
    @media (max-width: 700px){
        justify-content: baseline;
        align-items: center;
        background: url("/images/talentoHumano/talento_movil.webp");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 800px;
    }
`
const ImageDiv5 = styled.div`
    background: url("/images/camaraComercio/camara_pc.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 700px;
    display: flex; 
    flex-direction: column;
    align-items: baseline;
    justify-content: end;
    overflow: hidden;
    padding: 70px;
    color: white;
    font-size: larger;
    @media (max-width: 700px){
        justify-content: baseline;
        align-items: center;
        background: url("/images/camaraComercio/camara_movil.webp");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 800px;
    }
`


const CarrouselTitle = styled.h1`
    text-shadow: 3px 3px 5px rgba(0,0,0,1);
    position: relative;
    top: 60px;
    @media (max-width: 700px){
        position: relative;
        top: 30px;
        width: 120%;
        
    }
`
const CarrouselText = styled.h3`
    text-shadow: 3px 3px 5px rgba(0,0,0,1);
    position: relative;
    top: 30px;
    @media (max-width: 700px){
        font-size: large;        
        width: 120%;
        top: initial;

    }
`
const CustomLink = styled(Link)`
    text-decoration: none;
`


export default function Carrousel(){
    return (
        <CarroulseDiv 
        initial={{ opacity: 0,  y: -100 }}
        animate={{ opacity: 1,  y: 0}}
        transition={{ duration: .8 }}>
            <CustomCarrousel 
            showArrows={true} 
            autoPlay={true}
            infiniteLoop={true}
            preventMovementUntilSwipeScrollTolerance={true}
            showThumbs={false}
            stopOnHover={false}
            showStatus={false}
            showIndicators={false}
            interval={3000}>

                <CustomLink to={"/camara-de-comercio"}>
                    <ImageDiv5>
                        <CarrouselTitle>Avanzando en lo Digitál se alía con la Camara de Comercio de Buga</CarrouselTitle>
                        <CarrouselText>Haz crecer tu negocio con herramientas digitales</CarrouselText>
                    </ImageDiv5>
                </CustomLink>

                <CustomLink to={"/oferta-educativa-alcaldia"}>
                    <ImageDiv4>
                        <CarrouselTitle>Impulsa tu Futuro Digital</CarrouselTitle>
                        <CarrouselText>Inscribete en cursos especializados para el personal de la administración municipal</CarrouselText>
                    </ImageDiv4>
                </CustomLink>
                
                <CustomLink to={"/formacion-tic"}>
                    <ImageDiv>
                        <CarrouselTitle>¡Avanzando en lo Digital se renueva!</CarrouselTitle>
                        <CarrouselText>La secretaría TIC trae para ti nuevas capacitaciones tecnologicas.</CarrouselText>
                    </ImageDiv>
                </CustomLink>

                <CustomLink to={"/helppeople"}>
                    <ImageDiv2>
                        <CarrouselTitle>¡Muy pronto se celebrará la entrega de las becas!</CarrouselTitle>
                        <CarrouselText>La secretaría TIC junto a HelpPeople transformaran la vida de 50 beneficiarios.</CarrouselText>
                    </ImageDiv2>
                </CustomLink>

                <CustomLink to={"/ondas-tic"}>
                    <ImageDiv3>
                        <CarrouselTitle>Podcast Tecnologico</CarrouselTitle>
                        <CarrouselText>Escucha el primer Podcast tecnologico de Guadalajara de Buga</CarrouselText>
                    </ImageDiv3>
                </CustomLink>
                
               
                
            </CustomCarrousel>
        </CarroulseDiv>
    );
}