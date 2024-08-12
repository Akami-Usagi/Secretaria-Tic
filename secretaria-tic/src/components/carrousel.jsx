import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
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
    border-radius: 20px 150px 20px 150px;
    @media (max-width: 400px){
        width: 92%;
        height: 600px;
        border-radius: 10px 70px 10px 70px;
    }
    
`
const ImageDiv = styled.div`
    background: url("/images/banner/image_1.webp");
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
    @media (max-width: 400px){
        justify-content: baseline;
        align-items: center;
    }
`
const ImageDiv2 = styled.div`
    background: url("/images/banner/image_2.webp");
    background-size: cover;
    width: 100%;
    height: 700px;
    display: flex; 
    flex-direction: column;
    align-items: baseline;
    justify-content: end;
    overflow: hidden;
    padding: 50px;
    color: white;
    font-size: larger;
    @media (max-width: 400px){
        justify-content: baseline;
        align-items: center;
    }
`
const ImageDiv3 = styled.div`
    background: url("/images/banner/image_3.webp");
    background-size: cover;
    width: 100%;
    height: 700px;
    display: flex; 
    flex-direction: column;
    align-items: baseline;
    justify-content: end;
    overflow: hidden;
    padding: 50px;
    color: white;
    font-size: larger;
    @media (max-width: 400px){
        justify-content: baseline;
        align-items: center;
    }
`
const CarrouselTitle = styled.h1`
    text-shadow: 3px 3px 5px rgba(0,0,0,1);
    @media (max-width: 400px){
        font-size: larger;
        position: relative;
        bottom: 50px;
    }
`
const CarrouselText = styled.h3`
    text-shadow: 3px 3px 5px rgba(0,0,0,1);
    @media (max-width: 400px){
        font-size: large;
        position: relative;
        bottom: 50px;

    }
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
            interval={4000}>    
                <ImageDiv>
                    <CarrouselTitle>placeholder title</CarrouselTitle>
                    <CarrouselText>placeholder text</CarrouselText>
                </ImageDiv>
                <ImageDiv2>
                    <CarrouselTitle>placeholder title</CarrouselTitle>
                    <CarrouselText>placeholder text</CarrouselText>
                </ImageDiv2>
                <ImageDiv3>
                    <CarrouselTitle>placeholder title</CarrouselTitle>
                    <CarrouselText>placeholder text</CarrouselText>
                </ImageDiv3>
                
            </CustomCarrousel>
        </CarroulseDiv>
    );
}