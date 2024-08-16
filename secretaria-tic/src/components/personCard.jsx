import React from "react";
import styled from "styled-components";

const PersonDiv = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ImageDiv = styled.div`
    width: 250px;
    height: 250px;
    display: grid;
    place-items: center;
    overflow: hidden;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    border-radius: 100%;
    
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
`
const Title = styled.h4`
    margin-top: 5px;
`
const Text = styled.p`
    margin-top: -20px;
`
export default function PersonCard({nombre, cargo, imagen}){
    return(
        <PersonDiv>
            <ImageDiv>
                <Image src={imagen} alt={nombre}/>
            </ImageDiv>
            
            <Title>{nombre}</Title>
            <Text>{cargo}</Text>
        </PersonDiv>
    )
}