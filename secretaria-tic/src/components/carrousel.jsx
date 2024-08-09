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
    border-radius: 20px;
    
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
            interval={8000}>    
                <ImageDiv>
                    <h1>placeholder title</h1>
                    <h3>placeholder text</h3>
                </ImageDiv>
                <ImageDiv2>
                    <h1>placeholder title</h1>
                    <h3>placeholder text</h3>
                </ImageDiv2>
                <ImageDiv3>
                    <h1>placeholder title</h1>
                    <h3>placeholder text</h3>
                </ImageDiv3>
                
            </CustomCarrousel>
        </CarroulseDiv>
    );
}