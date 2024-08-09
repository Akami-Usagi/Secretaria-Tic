import React from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
`
const CarrouselDiv = styled.div`
    width: 97%;
    height: 700px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
`
const CarrouselImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
`

export default function Carrousel(){
    return(
        <ContainerDiv>
            <CarrouselDiv>
                <CarrouselImage src="/images/image_1.webp" alt="Imagen" />
            </CarrouselDiv>
        </ContainerDiv>
    )
}