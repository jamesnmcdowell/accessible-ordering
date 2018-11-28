import React from 'react';
import CategoryItem from './CategoryItem';
import { categories } from '../db.json';
import { media, Container, Container2 } from './Media';
import styled from 'styled-components';
import categoryHero from '../assets/category-hero.png';


let CategoryScreen = ({ products, match }) =>
    <div>
        <Hero>
            <Container2>
            <MainTitle>
                Menu Categories
            </MainTitle>
            <img aria-hidden="true" src={categoryHero} />
            </Container2>
        </Hero>
        <Container2 vert>
            <AutoGrid>
                {categories.map((item, i) =>
                    <CategoryItem match={match} key={`${i}_${item}`} item={item} />
                )}
            </AutoGrid>
        </Container2>
    </div>


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


    
`;