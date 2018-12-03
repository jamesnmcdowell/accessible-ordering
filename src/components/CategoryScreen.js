import React from 'react';
import CategoryItem from './CategoryItem';
import { categories } from '../db.json';
import { media, Container, Container2 } from './Media';
import styled from 'styled-components';
import categoryHero from '../assets/category-hero.png';
import Cart from './Cart';
import AriaModal from 'react-aria-modal';

let CategoryScreen = ({ products, match }) =>
 
    <Flex>
        <Container vert>
        <div>
            <MainTitle>
                Menu Categories
            </MainTitle>
       
            <AutoGrid>
                {categories.map((item, i) =>
                    <CategoryItem match={match} key={`${i}_${item}`} item={item} />
                )}
            </AutoGrid>
        
        </div>
        </Container >
        <CartStyled />
    </Flex>
   


export default CategoryScreen;

let AutoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 6rem;
    ${media.phone`
    grid-gap: 1rem;
    `}
    ${media.bigPhone`
    grid-gap: 1rem;
    `}
     ${media.tablet`
    grid-gap: 1rem;
    `}
   
`;
let Hero = styled.div`
    text-align: center;
    margin-bottom: 6rem;
    
`;
let MainTitle = styled.h1`
    text-align: center;
    margin: 0;
    font-size: 4rem;
    text-transform: uppercase;
    font-family: 'Oregano', cursive;   
    font-family: 'Advent Pro', sans-serif;
    margin-bottom: 6rem;
`;

let Flex = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2em;
    width: 100%;
    ${media.desktop`
     grid-template-columns: 1fr 400px;
    `}
`;
let CartStyled = styled(Cart) `
    position: fixed;
    margin-top: 40px;
    
`;