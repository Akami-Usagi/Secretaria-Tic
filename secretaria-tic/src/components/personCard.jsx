import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const PersonDiv = styled(motion.div)`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media (max-width: 500px){
        width: 180px;
        margin-bottom: -20px;
    }
`
const ImageDiv = styled.div`
    width: 250px;
    height: 250px;
    display: grid;
    place-items: center;
    overflow: hidden;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    border-radius: 100%;
    @media (max-width: 500px){
        width: 180px;
        height: 180px;
    }
    
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
        <PersonDiv
        initial={{ opacity: 0, scale:0 }}
        whileInView={{ opacity: 1, scale:1 }}
        viewport={{once: true, amount: .5}}
        transition={{ duration: .7 }}>
            <ImageDiv>
                <Image src={imagen} alt={nombre}/>
            </ImageDiv>
            
            <Title>{nombre}</Title>
            <Text>{cargo}</Text>
        </PersonDiv>
    )
}