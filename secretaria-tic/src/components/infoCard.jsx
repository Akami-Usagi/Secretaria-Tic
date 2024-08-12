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
    background-color: #f2fcff;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
`
const InfoImageDiv = styled.div`
    width: 500px;
    height: 320px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 10px 80px 10px 80px;

`
const InfoImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const InfoTitle = styled.h2`
    
`
const InfoText = styled.p`
    width: 500px;
`

export default function InfoCard({image}){
    return(
        <InfoBack>
            <InfoContent>
                <InfoImageDiv>
                    <InfoImage src={image} alt="Tarjeta" />
                </InfoImageDiv>
                <TextDiv>
                    <InfoTitle>placeholder text</InfoTitle>
                    <InfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo facilisis mi in ornare. Pellentesque rhoncus porttitor mauris, eu aliquet enim condimentum dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus luctus nisi ac dictum vulputate. Sed cursus nulla odio, quis egestas nunc consectetur nec. Mauris ultrices, purus eget aliquet euismod, odio eros rhoncus nisi, nec lobortis magna orci a sem. Mauris viverra odio velit, sit amet mollis turpis congue ut. Sed at nisl sed augue posuere rutrum.</InfoText>

                </TextDiv>
            </InfoContent>
        </InfoBack>
    )
}