import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    width: 100%;
    height: 100px;
    background-color: #3e4447;
    display: flex;
    align-items: center;
    justify-content: center;
`
const FooterImage = styled.img`
    height: 80px;
`

export default function Footer(){
    return(
        <StyledFooter>
            <FooterImage src="/images/logo_tic_footer.webp" alt="FooterImage" />
        </StyledFooter>
    )
}