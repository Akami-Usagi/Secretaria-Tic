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
    background-color: red;
    border-radius: 20px 150px 20px 150px;
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
const TextDiv = styled.div`
    width: 70%;
    margin-bottom: 50px;
`
const Title = styled.h1`
    text-align: left;
`
export default function AulaVirtual(){
    return(
        <BugaDiv>
            <ContentDiv>
                <Image src="/images/banner/image_1.webp" alt="Imagen Noticia" />
            </ContentDiv>
            <TextDiv>
                <Title>Aula Virtual</Title>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo facilisis mi in ornare. Pellentesque rhoncus porttitor mauris, eu aliquet enim condimentum dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus luctus nisi ac dictum vulputate. Sed cursus nulla odio, quis egestas nunc consectetur nec. Mauris ultrices, purus eget aliquet euismod, odio eros rhoncus nisi, nec lobortis magna orci a sem. Mauris viverra odio velit, sit amet mollis turpis congue ut. Sed at nisl sed augue posuere rutrum.</p>
            </TextDiv>
        </BugaDiv>
    )
}