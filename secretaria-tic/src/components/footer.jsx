import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

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
`
const IconDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`
const FooterIcon = styled.a`
    color: white;
    font-size: 50px;
`

export default function Footer(){
    return(
        <StyledFooter>
            <FooterImage src="/images/logo_tic_footer.webp" alt="FooterImage" />
            <IconDiv>
                <FooterIcon href="https://www.instagram.com/ticparaavanzar/" target="blank"><FaInstagram/></FooterIcon>
                <FooterIcon href="https://www.facebook.com/SecretariaTICBuga" target="blank"><FaFacebookSquare/></FooterIcon>
                <FooterIcon href="https://api.whatsapp.com/send?phone=573169070301" target="blank"><FaWhatsapp/></FooterIcon>              
            </IconDiv>
        </StyledFooter>
    )
}