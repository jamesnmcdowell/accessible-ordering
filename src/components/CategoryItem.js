import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


let CategoryItem = ({ item, match }) => 
    <Item>
        <Link aria-label={`${item.name} order`} role="link" tabIndex="0" alt={`${item.name}`} to={`/categories/${item.slug}`}> 
        <ImgGradient>
            <Img aria-hidden="true" src={require(`../assets/categories/${item.image}`)} />
        </ImgGradient>
        <TitleContainer>
            <Title aria-hidden="true">{item.name}</Title>
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
`;

let TitleContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 500;
    width: 100%;
    text-align: right;
    padding: 0 1.5rem;
`;
let Title = styled.h2`
    color: white;
    font-weight: 800;
    
`;



  	// background-image: linear-gradient(rgb(30, 87, 153) 0%, rgb(255, 255, 255) 0%, rgb(245, 211, 118) 89%, rgb(245, 211, 118) 91%, rgb(245, 211, 118) 91%, rgb(238, 178, 17) 100%, rgb(214, 214, 214) 100%);
