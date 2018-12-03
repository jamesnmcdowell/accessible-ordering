import React from 'react';
import { Link } from 'react-router-dom';
import { media, Container } from './Media';
import styled from 'styled-components';
import CartBadge from './CartBadge';
import Underline from '../assets/selector.svg';


let Header = ({match}) =>
    <NavBar>
        <Container>
            <MenuLinks>
                {/* <NavLink aria-label={`Homepage `} to="/" >
                    <Span> LOGO </Span>
                </NavLink> */}
                <NavLink to="/"  >
                    <Span>MENU</Span>
                </NavLink>
                <NavLink to="/"  >
                    <Span> REWARDS </Span>
                </NavLink>
                <NavLink to="/"  >
                    <Span> SIGN IN </Span>
                </NavLink>
             
                <NavLink to="/cart" >
                    <Span> <CartBadge /> </Span>
                </NavLink>
            </MenuLinks>
        </Container>
    </NavBar>

export default Header;

let NavBar = styled.div`
    z-index: 500;
    position:fixed;
    width: 100%;
    z-index:999;
    background-color: white;


`;

let MenuLinks = styled.div`
    display: flex;
    flex: 1 1 auto;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    background-color: white;
`;

let NavLink = styled(Link) `
    color: black;
    flex: 0 0 auto;
    height: 100%;    
    padding: 20px 0 0 0px;;
    display: flex;
    align-items: center;
    border-bottom: 20px solid transparent;
    font-size:1.1rem;
    margin-right: 8px;
    ${media.phone`
    font-size:1.4rem;
    `}
    ${media.bigPhone`
    font-size:1.7rem;
    margin-right: 15px;
    `}
     ${media.tablet`
        font-size:1.7rem;
        margin-right: 25px;
    `}
    &:last-child {
        margin-right: 0;
    }
    span{
    }
    box-shadow: ${props => props.active ? "inset 0px -7px 0px 0px #C21717" : "7px solid transparent" }
    `;

let Span = styled.span`
    font-size:1.2rem;
    font-weight: 600;
    letter-spacing: .08rem;
    position: relative;
    display: flex;
    justify-content: center;

    &:hover::after {
        position: absolute;
        outline: none;
        content:  url(${Underline});
        cursor: pointer;
        text-decoration: none;
        top: 15px;
        left: 0;
    }
    ${media.phone`
    font-size:1.3rem;
    `}
    ${media.bigPhone`
    font-size:1.7rem;
    `}
     ${media.tablet`
        font-size:1.7rem;
    `}
    `;

let Logo = styled.h1 `
    font-size:1.2rem;
    width: auto;
    text-decoration: none;
    &:hover{
        opacity: .7;
    }
    &:active{
    }
    ${media.phone`
    font-size:1.5rem;
    `}
    ${media.bigPhone`
    font-size:2rem;
    `}
`;
    // font-family: 'BauhausStd-Medium', cursive;
//  