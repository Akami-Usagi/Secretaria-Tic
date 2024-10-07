import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";


const MenuDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 100px;
    width: 100%;
    height: fit-content;
    background-color: #dddddd;
    border-radius: 10px;
    box-shadow: 15px 15px 5px rgba(0,0,0,0.5) , -3px 5px 5px rgba(0,0,0,0.5);
    z-index: 999;
    @media (min-width: 700px){
        display: none;
    }
    
`
const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin-top: 30px;
    padding: initial;
    list-style: none;
    position: relative;
    row-gap: 10px;
    
`
const MenuButton = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 15px;
    font-size: 20px;
    font-weight: 400;
    background-color: #a7a7a7;
    color: white;
    font-family: "Montserrat", sans-serif;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    
    
`

export default function HeaderMenu({setMenuOpen}){
    return(
        <MenuDiv
        initial={{ opacity: 0,  y: -100 }}
        animate={{ opacity: 1,  y: 0}}
        transition={{ duration: .5 }}>
            <MenuList>
                    <li><Link to={"/"}><MenuButton onClick={()=> setMenuOpen(false)}>Inicio</MenuButton></Link></li>
                    <li><Link to={"/tic-talent"}><MenuButton onClick={()=> setMenuOpen(false)}>TIC Talent Creativo</MenuButton></Link></li>
                    <li><Link to={"/inscripciones"}><MenuButton onClick={()=> setMenuOpen(false)}>Oferta Educativa</MenuButton></Link></li>   
                    <li><Link to={"/centros-transformacion-digital"}><MenuButton onClick={()=> setMenuOpen(false)}>CTD</MenuButton></Link></li>   
                    <li><Link to={"/aula-virtual"}><MenuButton onClick={()=> setMenuOpen(false)}>Aula Virtual</MenuButton></Link></li>
                    <li><Link to={"/formacion-tic"}><MenuButton onClick={()=> setMenuOpen(false)}>Formación TIC</MenuButton></Link></li>  
                    <li><Link to={"/buga-avanza"}><MenuButton onClick={()=> setMenuOpen(false)}>Buga Avanza</MenuButton></Link></li>    
                    <li><Link to={"/talento-humano"}><MenuButton onClick={()=> setMenuOpen(false)}>Talento Humano</MenuButton></Link></li> 
            </MenuList>
        </MenuDiv>
    )
}