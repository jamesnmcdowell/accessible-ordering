import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media, Container } from './Media';



let Footer = () =>
    <FooterStyled >
        <Container>
            <FlexContainer>
                {/* <a name="email" href="mailto:james.n.mcdowell@gmail.com" target="_blank">
                    <Img src={email}/>
                </a>
                <a name="linkedin" href="https://www.linkedin.com/in/jamesnmcdowell/" target="_blank">
                    <Img src={linkedin} />
                </a>
                <a name="github" href="https://github.com/jamesnmcdowell" target="_blank">
                    <Img src={github} />
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
