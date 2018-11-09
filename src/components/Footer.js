import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media, Container } from './Media';



let Footer = () =>
    <FooterStyled >
        <Container>
            <FlexContainer>
                {/* <a name="linkedin" href="https://www.linkedin.com/in/jamesnmcdowell/" target="_blank">
                    Ask a Question
                </a> */}
            </FlexContainer>
        </Container>
    </FooterStyled>

export default Footer;

let FooterStyled = styled.footer`
    border-top: 1px solid #f0f0f0;
    width:100%;
    padding: 1.5em 0;  
`;
let FlexContainer = styled.div`
    display: flex;
    text-align: center;
    text-align: left;
    justify-content:center;
    flex-direction: row;
    align-items: center;
    ${media.tablet`
    
    `}     
`;
let Contact = styled.div`
    text-align:center;
`;
let Img = styled.img`
    width: 40px;
`;
