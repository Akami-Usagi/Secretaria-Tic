import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


const StyledFooter = styled.footer`
    width: 100%;
    height: 100px;
    background-color: #3e4447;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const FooterImage = styled.img`
    height: 80px;
    @media (max-width: 400px){
        height: 40px;
    }
`
const IconDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`
const FooterIcon = styled.a`
    color: white;
    font-size: 50px;
    @media (max-width: 400px){
        font-size: 30px;
    }
`

export default function Footer(){
    return(
        <StyledFooter>
            <a href="https://www.guadalajaradebuga-valle.gov.co" target="blank"><FooterImage src="/images/logo_tic_footer.webp" alt="FooterTicImage" /></a>
            <a href="https://www.valledelcauca.gov.co/" target="blank"><FooterImage src="/images/logo_gob_footer.webp" alt="FooterGobImage" /></a>
            
            <IconDiv>
                <FooterIcon href="https://www.instagram.com/ticparaavanzar/" target="blank"><FaInstagram/></FooterIcon>
                <FooterIcon href="https://www.facebook.com/SecretariaTICBuga" target="blank"><FaFacebookSquare/></FooterIcon>     
            </IconDiv>
        </StyledFooter>
    )
}