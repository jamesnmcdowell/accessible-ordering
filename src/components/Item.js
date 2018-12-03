import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Button, Wrapper, Menu, MenuItem } from 'react-aria-menubutton';
import DropdownButton from './DropdownButton';
import bottomBorder from '../assets/border-bottom.svg';

let Item = ({ item, match, dispatch, history, costMap }) =>            
    <ItemContainer>
        <FlexPush>
        <FlexSeparateTitle>
            <Title>{item.name}</Title>
            <Flex>
                {item.badges.map((item, i) =>
                    <Badge key={`${i}_${item}`}> {item}</Badge>
                )}
            </Flex>
        </FlexSeparateTitle>
        
            <Img alt={item.name} src={require(`../assets/${match.params.categoryName}/${item.image}`)} />
        <ImgContainer/>
        <ItemInfoBlock>
            <FlexSeparate>
                <p>{item.calories} calories</p>
                <p> {(match.params.categoryName === "sandwich") ? `$${costMap.small} - $${costMap.large}` : item.price}  </p>
            </FlexSeparate>
            <p>{item.description}</p>
        </ItemInfoBlock>
        </FlexPush>
        <GridSeparate>
            <ButtonStyle aria-label={`customize ${item.name} ${match.params.categoryName}`} role="button" tabIndex="0" alt={`${item.name}`} to={`/categories/${match.params.categoryName}/${item.id}`} > Customize </ButtonStyle> 
            {match.params.categoryName !== "sandwich"
                ?
            <Button2 aria-live="assertive" onClick={() => { 
                dispatch({ type: "ADD_TO_CART", payload: {item} }); 
                history.push('/'); 
            }} aria-label={`add to cart ${item.name} `} role="button" tabIndex="0"> Add to Cart</Button2>
            :
                <DropDownButtonStyled options={['small', 'medium', 'large']} settings={ {'title':'Add to Order'} } cost={['small', 'medium', 'large'].map(c => costMap[c])} onSelect={(size) => {
                dispatch({ type: "ADD_TO_CART", payload: {item, size} });
                history.push('/');
            }}/>
        }
        </GridSeparate>
    </ItemContainer>

let mapStateToProps = (state, props) => {
    let { costMap } = state;
    return { costMap };
};

let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
};

let ItemState = connect(
    mapStateToProps,
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
// let ImgContainer = styled.div`
//     position: relative;
//     &::after {
//         position: absolute;
//         outline: none;
//         content:  url(${bottomBorder});
//         cursor: pointer;
//         text-decoration: none;
//         top: 15px;
//     } 
// `;

let ImgContainer = styled.div`
    position: relative;
    background-image: url(${bottomBorder});
    height: 10px;
    top: -8px;
    background-repeat: no-repeat;
`;

let Title = styled.h2`
    
`;
let FlexPush = styled.div`
    flex: 1;
    
`;
let Img = styled.img`
    max-width: 100%;

`;
let ItemContainer = styled.div`
    position: relative;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    display: flex;
    flex-direction: column;
`;
let ItemInfoBlock = styled.div`
    padding: 0 2rem 1rem 2rem;
`;



let FlexSeparate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
let FlexSeparateTitle= styled(FlexSeparate)`
    padding: 0rem 2rem;
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
    grid-template-rows: 50px;
`;

let ButtonStyle = styled(Link)`
    flex: 1;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    padding: 1rem;
    background-color: #F36C3E;
    background-color: #FFA310
    color: white;
    color: black;
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
    background-color: #5F5B5C;
    background-color: #FFC810
    color: white;
    color: black;
    &:hover {
    }
    span {
        text-transform: uppercase;
    }
`;
let DropDownButtonStyled = styled(DropdownButton)`
    border: none;
    button {
        background-color: #red
        border: none !important;
    }
    
`;


  	// background-image: linear-gradient(rgb(30, 87, 153) 0%, rgb(255, 255, 255) 0%, rgb(245, 211, 118) 89%, rgb(245, 211, 118) 91%, rgb(245, 211, 118) 91%, rgb(238, 178, 17) 100%, rgb(214, 214, 214) 100%);
