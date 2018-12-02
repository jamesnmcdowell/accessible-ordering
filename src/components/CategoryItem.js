import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bottomBorder from '../assets/border-bottom.svg';


let CategoryItem = ({ item, match }) => 
    <Item>
        <Link aria-label={`${item.name} order`} role="link" tabIndex="0" alt={`${item.name}`} to={`/categories/${item.slug}`}> 
            <Img alt={`${item.name}`} aria-hidden="true" src={require(`../assets/categories/${item.image}`)} />
        <ImgContainer />
        <TitleContainer>
            <Title >{item.name}</Title>
        </TitleContainer>
        </Link>
    </Item>

export default CategoryItem;

let ImgGradient = styled.div`
    position: relative;
    &::after {
        display: block;
        position: relative;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, #000 100%);
        margin-top: -150px;
        height: 150px;
        width: 100%;
        content: '';
        z-index: 1;
    }    
`;

let Img = styled.img`
    max-width: 100%;
`;
let Item = styled.div`
    position: relative;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

let TitleContainer = styled.div`
    text-align: center
    padding: 0 1.5rem;
`;
let Title = styled.h2`
    color: black;
    font-weight: 800;
    
`;

let ImgContainer = styled.div`
    position: relative;
    background-image: url(${bottomBorder});
    height: 10px;
    top: -8px;
    background-repeat: no-repeat;
`;



  	// background-image: linear-gradient(rgb(30, 87, 153) 0%, rgb(255, 255, 255) 0%, rgb(245, 211, 118) 89%, rgb(245, 211, 118) 91%, rgb(245, 211, 118) 91%, rgb(238, 178, 17) 100%, rgb(214, 214, 214) 100%);
