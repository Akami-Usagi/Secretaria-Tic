import React from "react";
import styled from "styled-components";
import HeaderMenu from "./headerMenu";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    width: 100%;
    height: fit-content;
    padding: 15px 0;
    display: flex;
    flex-wrap: wrap;
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
    height: 110px;
    @media (max-width: 500px){
        height: 80px;
    }
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
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    @media (max-width: 500px){
        display: none;
    }
    
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
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    &:hover{
        background-color: #a7a7a7;
        font-weight: 600;
        width: 170px;
        color: white;
    }
`
const MenuImage = styled.img`
        width: 50px;
        display: none;
        transition: ease-in-out 200ms;
        @media (max-width: 500px){
            display: block;
            position: absolute;
            right: 30px;
            top: 30px;
        }
    `
export default function Header(){

    
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <StyledHeader>
            <HeaderDiv>
                <LogoImage src="/images/logo_tic.webp" alt="Logo Secretaría TIC" />
                <nav>
                    <NavList>
                        <li><Link to={"/"}><NavButton>Inicio</NavButton></Link></li>
                        <li><Link to={"/buga-avanza"}><NavButton>Buga Avanza</NavButton></Link></li>
                        <li><Link to={"/digicampus"}><NavButton>Digicampus</NavButton></Link></li>
                        <li><Link to={"/aula-virtual"}><NavButton>Aula Virtual</NavButton></Link></li>
                        <li><Link to={"/oferta-institucional"}><NavButton>Oferta Institucional</NavButton></Link></li>
                        <li><Link to={"/centros-transformacion-digital"}><NavButton>CTD</NavButton></Link></li>
                        <li><Link to={"/talento-humano"}><NavButton>Talento Humano</NavButton></Link></li>
                    </NavList>
                </nav>
            </HeaderDiv>
            {menuOpen ? <MenuImage src="/images/menu_open.svg" onClick={()=> setMenuOpen(!menuOpen)}/> : <MenuImage src="/images/menu_closed.svg" onClick={()=> setMenuOpen(!menuOpen)}/>}
            {menuOpen && <HeaderMenu setMenuOpen={setMenuOpen}/>}
        </StyledHeader>
    )
}