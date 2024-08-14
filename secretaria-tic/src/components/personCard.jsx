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
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
`
export default function PersonCard(){
    return(
        <PersonDiv>
            <ImageDiv>
                <Image/>
            </ImageDiv>
            
            <h4>Nombre</h4>
            <p>Cargo</p>
        </PersonDiv>
    )
}