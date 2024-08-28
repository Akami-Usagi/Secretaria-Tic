import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const CarroulseDiv = styled.div`
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
    @media (max-width: 500px){
        width: 95%;
        height: 600px;
    }
    
`
const ImageDiv = styled.div`
    background: url("/images/inscripciones/inscripciones_pc.webp") no-repeat center;
    background-size: cover;
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
    @media (max-width: 500px){
        justify-content: baseline;
        align-items: center;
        background: url("/images/inscripciones/inscripciones_movil.webp") no-repeat center;
        
    }
`
const ImageDiv2 = styled.div`
    background: url("/images/banner/image_2.webp");
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
    @media (max-width: 500px){
        justify-content: baseline;
        align-items: center;
        background: url("/images/bannerMovil/image_2.webp");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`
const ImageDiv3 = styled.div`
    background-image: url("/images/banner/image_3.webp");
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
    @media (max-width: 500px){
        justify-content: baseline;
        align-items: center;
        background: url("/images/bannerMovil/image_3.webp");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`
const ImageNovedades = styled.div`
    background-image: url("/images/novedades/novedades_pc.webp");
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
    @media (max-width: 500px){
        justify-content: baseline;
        align-items: center;
        background: url("/images/novedades/novedades_movil.webp");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`
const CarrouselTitle = styled.h1`
    text-shadow: 3px 3px 5px rgba(0,0,0,1);
    @media (max-width: 500px){
        position: relative;
        top: 30px;
        width: 130%;
        
    }
`
const CarrouselText = styled.h3`
    text-shadow: 3px 3px 5px rgba(0,0,0,1);
    @media (max-width: 500px){
        font-size: large;        
        width: 130%;

    }
`
const CustomLink = styled(Link)`
    text-decoration: none;
`


export default function Carrousel(){
    return (
        <CarroulseDiv>
            <CustomCarrousel 
            showArrows={true} 
            autoPlay={true}
            infiniteLoop={true}
            preventMovementUntilSwipeScrollTolerance={true}
            showThumbs={false}
            stopOnHover={false}
            showStatus={false}
            showIndicators={false}
            interval={3500}>
                <CustomLink to={"/inscripciones"}>
                    <ImageDiv>
                        <CarrouselTitle>Haz parte de la revolucion digital</CarrouselTitle>
                        <CarrouselText>Talento Tech, Digicampus y la Secretaría TIC te ofrecen multiples oportunidades de estudio</CarrouselText>
                    </ImageDiv>
                </CustomLink>    
                <CustomLink to={"/novedades"}>
                    <ImageNovedades>
                        <CarrouselTitle>Meetup Nido</CarrouselTitle>
                        <CarrouselText>Marco Osorio cautivó a los empresarios Bugueños con sus experiencias en el mundo del emprendimiento</CarrouselText>
                    </ImageNovedades>
                </CustomLink>    
                <CustomLink to={"/oferta-institucional"}>
                    <ImageDiv2>
                        <CarrouselTitle>Estudia con Nosotros</CarrouselTitle>
                        <CarrouselText>Enterate de toda la oferta educativa que la Secretaría TIC tiene para tí</CarrouselText>
                    </ImageDiv2>
                </CustomLink>
                <CustomLink to={"/digicampus"}>
                    <ImageDiv3>
                        <CarrouselTitle>Encuentra tu pasión y construye tu futuro</CarrouselTitle>
                        <CarrouselText>Busca y compara las opciones que pueden ofrecerte las 10 universidades más importantes de la región y encuentra la que mejor se adapte a ti.</CarrouselText>
                    </ImageDiv3>
                </CustomLink>
               
                
            </CustomCarrousel>
        </CarroulseDiv>
    );
}