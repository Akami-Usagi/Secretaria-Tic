import React from "react";
import styled from "styled-components";

const InfoBack = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 30px 0;
`
const InfoContent = styled.div`
    width: 70%;
    height: 400px;
    background-color: #ffffff;
    border-radius: 20px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: 50px;
    @media (max-width: 500px){
        flex-direction: column;
        height: fit-content;
        width: 90%;
    }
`
const InfoImageDiv = styled.div`
    width: 500px;
    height: 320px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 10px 80px 10px 80px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    @media (max-width: 500px){
        width: 90%;
        height: 200px;
        margin-top: 20px;
        margin-bottom: -40px;
    }

`
const InfoImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    transition: ease-in-out 200ms;
    &:hover{
        width: 130%;
        height: 130%;
    }
`
const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const InfoTitle = styled.h2`
    text-align: center;
`
const InfoText = styled.p`
    width: 500px;
    @media (max-width: 500px){
        width: 80%;
        margin-bottom: 30px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4; /* number of lines to show */
        line-clamp: 4; 
        -webkit-box-orient: vertical;
    }
`
const InfoButon = styled.button`
    width: 200px;
    height: 50px;
    border: none;
    background-color: #e4e4e4;
    border-radius: 20px;
    font-family: "Montserrat", sans-serif;
    font-size: large;
    transition: ease-in-out 200ms;
    &:hover{
        background-color: #a7a7a7;
        font-weight: 600;
        margin: 20px;
        color: white;
    }
    @media (max-width: 500px){
        margin-bottom: 30px;
    }
`

export default function InfoCardLeft({image}){
    return(
        <InfoBack>
            <InfoContent>
                <InfoImageDiv>
                    <InfoImage src={image} alt="Tarjeta" />
                </InfoImageDiv>
                <TextDiv>
                    <InfoTitle>placeholder title</InfoTitle>
                    <InfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo facilisis mi in ornare. Pellentesque rhoncus porttitor mauris, eu aliquet enim condimentum dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus luctus nisi ac dictum vulputate. Sed cursus nulla odio, quis egestas nunc consectetur nec. Mauris ultrices, purus eget aliquet euismod, odio eros rhoncus nisi, nec lobortis magna orci a sem. Mauris viverra odio velit, sit amet mollis turpis congue ut. Sed at nisl sed augue posuere rutrum.</InfoText>
                    <InfoButon>Ver Mas</InfoButon>
                </TextDiv>    
            </InfoContent>
        </InfoBack>
    )
}