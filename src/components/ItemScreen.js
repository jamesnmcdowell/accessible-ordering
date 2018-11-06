import React from 'react';
import Item from './Item';
import { items } from '../db.json';
import { media, Container, Container2 } from './Media';
import styled from 'styled-components';
import categoryHero from '../assets/category-hero.png';
import { connect } from 'react-redux';


let ItemScreen = ({ items, match, history }) =>
    <div>
        <Container vert>
            <AutoGrid>
                {items.map((item, i) =>
                    <Item history={history} item={item} match={match} key={`${i}_${item}`} />
                )}
            </AutoGrid>
        </Container>
    </div>


let mapStateToProps = (state, props) => {
    let { match } = props;
    let { categories, items } = state;
    let categoryName = match.params.categoryName;
    let currentCategory = categories.find((obj) => obj.slug === categoryName);
    let filteredByCategory = items.filter((obj) => obj.categoryId === currentCategory.id);
    return { items: filteredByCategory, categories: state.categories };
};

let ItemScreenState = connect(
    mapStateToProps
)(ItemScreen);

export default ItemScreenState; 



let AutoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem;
    ${media.phone`
    grid-gap: 3rem;
    `}
    ${media.bigPhone`
    grid-gap: 3rem;
    `}
     ${media.tablet`
    grid-gap: 3rem;
    `}
   
`;
let MainTitle = styled.h1`
    text-align: center;
    
`;



