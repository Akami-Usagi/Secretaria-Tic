import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    width: 100%;
    height: fit-content;
    padding: 15px 0;
    display: flex;
    justify-content: center;
    background-color: #dddddd;
`
const HeaderDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3%;
`
const LogoImage = styled.img`
    height: 100px;
`
const NavList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    align-items: center;
    background-color: #f1f1f1;
    border-radius: 30px;
    padding: 5px 10px;
    
`
const NavButton = styled.button`
    width: 150px;
    height: 50px;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 400;
    border: none;
    border-radius: 30px;
    background-color: #ffffff;
    
    transition: ease-in-out 200ms;
    &:hover{
        background-color: #aee8ff;
        font-weight: 600;
        width: 170px;
    }
`

export default function Header(){
    return(
        <StyledHeader>
            <HeaderDiv>
                <LogoImage src="/images/logo_tic.webp" alt="Logo Secretaría TIC" />
                <nav>
                    <NavList>
                        <li><Link to={"/"}><NavButton>Inicio</NavButton></Link></li>
                        <li><Link to={"/buga-avanza"}><NavButton>Buga Avanza</NavButton></Link></li>
                        <li><NavButton>Digicampus</NavButton></li>
                        <li><NavButton>Aula Virtual</NavButton></li>
                        <li><Link to={"/oferta-institucional"}><NavButton>Oferta Institucional</NavButton></Link></li>
                        <li><NavButton>CTD</NavButton></li>
                        <li><NavButton>Talento Humano</NavButton></li>
                    </NavList>
                </nav>
            </HeaderDiv>
        </StyledHeader>
    )
}