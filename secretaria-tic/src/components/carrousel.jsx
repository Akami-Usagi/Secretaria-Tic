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
        height: 600px;
    }
    
`
const ImageDiv = styled.div`
    background: url("/images/inscripciones/inscripciones_pc.webp");
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
        background: url("/images/inscripciones/inscripciones_movil.webp");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`
const ImageDiv2 = styled.div`
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
    }
`
const ImageDiv3 = styled.div`
    background: url("/images/ticTalent/talent_pc.webp");
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
        background: url("/images/ticTalent/talent_movil.webp");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`
const ImageDiv4 = styled.div`
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
    @media (max-width: 700px){
        justify-content: baseline;
        align-items: center;
        background: url("/images/novedades/novedades_movil.webp");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`
const ImageEventos = styled.div`
    background-image: url("/images/eventos/eventos_pc.webp");
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
        background: url("/images/eventos/eventos_movil.webp");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`
const ImageNavidad = styled.div`
    background-image: url("/images/eventos/navidad_pc.webp");
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
        background: url("/images/eventos/navidad_movil.webp");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
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

                <CustomLink to={"/"}>
                    <ImageNavidad>
                    </ImageNavidad>
                </CustomLink>

                <CustomLink to={"/eventos"}>
                    <ImageEventos>
                        <CarrouselTitle>Entrevista Secretario TIC Diego Carrillo</CarrouselTitle>
                        <CarrouselText>Estudiantes del colegio Académico de la ciudad de Buga indagaron sobre la transformación digital del municipio</CarrouselText>
                    </ImageEventos>
                </CustomLink>

                <CustomLink to={"/helppeople"}>
                    <ImageDiv4>
                        <CarrouselTitle>Potencia tu futuro tecnológico</CarrouselTitle>
                        <CarrouselText>¡Es tu momento de transformar tu futuro y abrir las puertas a un mundo lleno de oportunidades!</CarrouselText>
                    </ImageDiv4>
                </CustomLink>

                <CustomLink to={"/novedades"}>
                    <ImageNovedades>
                        <CarrouselTitle>Graduacion Avanzando en lo Digital</CarrouselTitle>
                        <CarrouselText>Más de 250 ciudadanos se graduaron en cursos de tecnología gracias al programa "Avanzando en lo Digital"</CarrouselText>
                    </ImageNovedades>
                </CustomLink>   

                <CustomLink to={"/tic-talent"}>
                    <ImageDiv3>
                        <CarrouselTitle>¡Descubre tu Potencial Creativo con TIC Talent Creativo!</CarrouselTitle>
                        <CarrouselText>Inscribete y participa del primer TIC Talent Creativo</CarrouselText>
                    </ImageDiv3>
                </CustomLink> 

                <CustomLink to={"/inscripciones"}>
                    <ImageDiv>
                        <CarrouselTitle>Haz parte de la revolucion digital</CarrouselTitle>
                        <CarrouselText>Talento Tech, Digicampus y la Secretaría TIC te ofrecen multiples oportunidades de estudio</CarrouselText>
                    </ImageDiv>
                </CustomLink>    
                 
                <CustomLink to={"/oferta-institucional"}>
                    <ImageDiv2>
                        <CarrouselTitle>Estudia con Nosotros</CarrouselTitle>
                        <CarrouselText>Entérate de toda la oferta educativa que la Secretaría TIC tiene para tí</CarrouselText>
                    </ImageDiv2>
                </CustomLink>
                
               
                
            </CustomCarrousel>
        </CarroulseDiv>
    );
}