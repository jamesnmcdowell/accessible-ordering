import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
import { portfolioItems } from '../db.json';
import PortfolioItem from './PortfolioItem';
import { media, Container } from './Media';

let PortfolioScreen = () =>
    <div>
        <Container vert>
            <PortfolioGrid>
                {
                    portfolioItems.item.map((item, i) =>
                        <PortfolioItem key={`${i}_${item}`}item={item} />
                    )
                }
            </PortfolioGrid>
        </Container>
    </div>

export default PortfolioScreen;

let PortfolioGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    grid-gap: 6rem;
    ${media.phone`
    grid-gap: 6rem;
    `}
    ${media.bigPhone`
    grid-gap: 6rem;
    `}
     ${media.tablet`
    grid-gap: 12rem;
    `}
   
`;
let Outer = styled.div`
    width: 100%;
    text-align: center;
    display: grid;
    font-size: 2rem;

    display: grid;            
    &::before {
        grid-area: 1 / 1 / 2 / 2;
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E");
        display: block;
        line-height: 0;    
    }
`;
let Inner = styled.div`
    background-color: #1B67AB;
    grid-area: 1 / 1 / 2 / 2;
    display: grid;
    align-items: center;
    h2 {
        background-color: white;
    }
`;


