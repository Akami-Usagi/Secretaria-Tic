import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const InfoBack = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 30px 0;
`
const InfoContent = styled.div`
    width: 1400px;
    height: 400px;
    background-color: #f2fcff;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    @media (max-width: 1440px){
        width: 90%;
        flex-wrap: wrap;
        height: fit-content;
        padding: 30px 0;
    }
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
    @media (max-width: 600px){
        width: 90%;
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
        width: 110%;
        height: 110%;
    }
    
`
const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const InfoTitle = styled.h2`
    text-align: center;
    @media (max-width: 600px){
        width: 80%;
    }
`
const InfoText = styled.p`
    width: 500px;
    overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 7; /* number of lines to show */
        line-clamp: 7; 
        -webkit-box-orient: vertical;

    @media (max-width: 600px){
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
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
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
const CustomLink = styled(Link)`
    text-decoration: none;
`

export default function InfoCard({image, link, title, text, target}){
    return(
        <InfoBack 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{once: true, amount: .5}}>
            <InfoContent>
                <InfoImageDiv>
                    <InfoImage src={image} alt="Tarjeta" />
                </InfoImageDiv>
                <TextDiv>
                    <InfoTitle>{title}</InfoTitle>
                    <InfoText>{text}</InfoText>
                    <CustomLink to={link} target={target}><InfoButon onClick={() => {window.scroll(0,0)}}>Ver Más</InfoButon></CustomLink>
                </TextDiv>
            </InfoContent>
        </InfoBack>
    )
}