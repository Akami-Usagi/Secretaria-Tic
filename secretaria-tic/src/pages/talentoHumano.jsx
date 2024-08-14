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
    border-radius: 20px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    display: grid;
    place-items: center;
    overflow: hidden;
    @media (max-width: 500px){
        width: 95%;
        height: 600px;
        
    }
    
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
`
const BossDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    margin: 30px;
    @media (max-width: 500px){
        flex-direction: column;
    }
`
const MainImageDiv = styled.div`
    width: 400px;
    height: 400px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 100%;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    @media (max-width: 500px){
        width: 300px;
        height: 300px;
        
    }
`
const MainImage = styled.img`
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
`
const MainDescription = styled.div`
    width: 700px;
    @media (max-width: 500px){
        width: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`
const Divider = styled.div`
    width: 90%;
    height: 3px;
    background-color: gray;
    margin-bottom: 50px;
    border-radius: 3px;
`
const SupporDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    margin: 30px;
    @media (max-width: 500px){
        flex-direction: column;
    }
`



export default function TalentoHumano(){
    return(
        <BugaDiv>
            <ContentDiv>
            <Image src={`${window.innerWidth <= 500 ? "/images/talentoHumano/talento_movil.webp" : "/images/talentoHumano/talento_pc.webp"}`} alt="Imagen Noticia" />
            </ContentDiv>
            <BossDiv>
                <MainImageDiv>
                    <MainImage src="/images/talentoHumano/secretario.webp" alt="Secretario TIC"/>
                </MainImageDiv>
                <MainDescription>
                        <h3>Secretario de Tecnologías de la Información y las Comunicaciones - TIC</h3>
                        <h1>ING. Diego Fernando Carrillo Gómez</h1>
                        <h3>MAGÍSTER EN GERENCIA DE PROYECTOSU - niversidad del Valle</h3>
                </MainDescription>
            </BossDiv>
            <Divider></Divider>
            <SupporDiv>
                
            </SupporDiv>
        </BugaDiv>
    )
}