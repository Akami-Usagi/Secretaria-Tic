import React from "react";
import styled from "styled-components";

const BugaDiv = styled.div`
    width: 100%;
    min-height: calc(100vh - 230px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`
const ContentDiv = styled.div`
    width: 97%;
    height: 600px;
    border-radius: 20px 150px 20px 150px;
    display: grid;
    place-items: center;
    overflow: hidden;
    @media (max-width: 400px){
        width: 95%;
        height: 600px;
        border-radius: 10px 70px 10px 70px;
    }
    
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
`
const TextDiv = styled.div`
    width: 70%;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    @media (max-width: 400px){
        align-items: center;
        width: 85%;
    }
    
`
const Title = styled.h1`
    
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
    align-self: center;
    &:hover{
        background-color: #a7a7a7;
        font-weight: 600;
        width: 220px;
        height: 60px;
        color: white;
    }
    @media (max-width: 400px){
        margin-top: 20px;
    }
`
export default function BugaAvanza(){
    return(
        <BugaDiv>
            <ContentDiv>
                <Image src="/images/banner/image_1.webp" alt="Imagen Noticia" />
            </ContentDiv>
            <TextDiv>
                <Title>Buga Avanza</Title>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo facilisis mi in ornare. Pellentesque rhoncus porttitor mauris, eu aliquet enim condimentum dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus luctus nisi ac dictum vulputate. Sed cursus nulla odio, quis egestas nunc consectetur nec. Mauris ultrices, purus eget aliquet euismod, odio eros rhoncus nisi, nec lobortis magna orci a sem. Mauris viverra odio velit, sit amet mollis turpis congue ut. Sed at nisl sed augue posuere rutrum.</p>
                <InfoButon>Ver Mas</InfoButon>
            </TextDiv>
        </BugaDiv>
    )
}