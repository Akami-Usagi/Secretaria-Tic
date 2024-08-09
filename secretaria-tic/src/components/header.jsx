import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
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
    gap: 15px;
    align-items: center;
`
const NavButton = styled.button`
    width: 150px;
    height: 50px;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 400;
    border: none;
    border-radius: 30px;
    background-color: #d8d8d8;
    
    transition: ease-in-out 200ms;
    &:hover{
        background-color: #6dc9ee;
    }
`

export default function Header(){
    return(
        <StyledHeader>
            <HeaderDiv>
                <LogoImage src="/images/logo_tic.webp" alt="Logo Secretaría TIC" />
                <nav>
                    <NavList>
                        <li><NavButton>Inicio</NavButton></li>
                        <li><NavButton>Buga Avanza</NavButton></li>
                        <li><NavButton>Digicampus</NavButton></li>
                        <li><NavButton>Aula Virtual</NavButton></li>
                        <li><NavButton>Oferta Institucional</NavButton></li>
                        <li><NavButton>CTD</NavButton></li>
                        <li><NavButton>Talento Humano</NavButton></li>
                    </NavList>
                </nav>
            </HeaderDiv>
        </StyledHeader>
    )
}