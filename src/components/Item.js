import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';


let Item = ({ item, match, dispatch }) =>            
    <ItemContainer>
        <Title>{item.name}</Title>
        <Img alt={item.name} src={require(`../assets/${match.params.categoryName}/${item.image}`)} />
        <FlexSeparate>
            <p>{item.calories} calories</p>
            <Flex>
            {item.badges.map((item, i) =>
                <Badge key={`${i}_${item}`}> {item}</Badge>
            )}
            </Flex>
        </FlexSeparate>
        <p>{item.description}</p>
        <GridSeparate>
            <Button aria-label={`customize ${item.name} ${match.params.categoryName}`} role="button" tabIndex="0" alt={`${item.name}`} to={`/categories/${match.params.categoryName}/${item.id}`} > Customize </Button> 
            <Button2 aria-live="assertive" onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })} aria-label={`add to cart ${item.name} `} role="button" tabIndex="0"> Add to Cart</Button2>
        </GridSeparate>
    </ItemContainer>


let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
};

let ItemState = connect(
    mapDispatchToProps
)(Item);

export default ItemState; 


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

let Title = styled.h2`
    
`;
let Img = styled.img`
    max-width: 100%;
`;
let ItemContainer = styled.div`
    position: relative;
`;

let FlexSeparate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
let Flex = styled.div`
    display: flex;
`;
let Badge = styled.p`
    margin-left: 5px;
    &:first-child {
            margin-left: 0;
        }
`;
let GridSeparate = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
`;

let Button = styled(Link)`
    flex: 1;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    padding: 1rem;
    background-color: #F36C3E;
    color: white;
    &:hover {
    }
    span {
        text-transform: uppercase;
    }
`;
let Button2 = styled.button`
    flex: 1;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    padding: 1rem;
    background-color: #F36C3E;
    color: white;
    &:hover {
    }
    span {
        text-transform: uppercase;
    }
`;


  	// background-image: linear-gradient(rgb(30, 87, 153) 0%, rgb(255, 255, 255) 0%, rgb(245, 211, 118) 89%, rgb(245, 211, 118) 91%, rgb(245, 211, 118) 91%, rgb(238, 178, 17) 100%, rgb(214, 214, 214) 100%);
