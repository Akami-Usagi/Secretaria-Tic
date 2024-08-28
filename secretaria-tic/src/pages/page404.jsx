import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BugaDiv = styled.div`
    width: 100%;
    min-height: calc(100vh - 230px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

const Image = styled.img`
    width: 350px;
    @media (max-width: 500px){
        width: 70%;
    }
`

const Title = styled.h1`
font-size: 2.5em;
@media (max-width: 500px){
    text-align: center;
    font-size: 1.5em;
}
`
const Text = styled.p`
    font-size: 1.4em;
    text-align: center;
    @media (max-width: 500px){
        font-size: 1.3em;
    }
`
const InfoButon = styled.button`
    width: 300px;
    height: 50px;
    border: none;
    background-color: #e4e4e4;
    border-radius: 20px;
    font-family: "Montserrat", sans-serif;
    font-size: large;
    transition: ease-in-out 200ms;
    align-self: center;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    margin-bottom: 40px;
    &:hover{
        background-color: #a7a7a7;
        font-weight: 600;
        width: 320px;
        color: white;
    }
    @media (max-width: 500px){
        margin-top: 20px;
    }
`

export default function Page404(){
    return(
        <BugaDiv>
            <Title>Error 404 - Pagina no Encontrada</Title>
            <Image src={"/images/404.webp"} alt="Error 404" />
            <Text>
                La pagina que estas buscando no se encuentra disponible
            </Text>
            <Link to={"/"}><InfoButon>Volver al Inicio</InfoButon></Link>
            
        </BugaDiv>
    )
}