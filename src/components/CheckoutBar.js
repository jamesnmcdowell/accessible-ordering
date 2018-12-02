import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { media, Container, ContainerRight } from './Media';

let CheckoutBar = ({ cart, total, costMap }) =>
    <CheckoutContainer>
        <CheckoutInner>
        <Title> Order Summary </Title>
        { (cart.length > 0) ?
        <div>
        <div>
        {cart.map(item =>
            <div>
                <CartItem costMap={costMap} item={item} />
            <BR />
            </div>
        )}
        </div>
        <FlexBetween>
            <p> Subtotal </p>
            <p> ${(total.sum).toFixed(2)} </p>
        </FlexBetween>
        <FlexBetween>
            <p> Sales Tax </p>
            <p> ${(total.tax).toFixed(2)} </p>
        </FlexBetween>
        <FlexBetween>
            <p> Estimated Total </p>
            <p> ${(total.sum + total.tax).toFixed(2)} </p>
        </FlexBetween>
        <ButtonContainer>
            <Button to="/checkout" > Checkout </Button>
        </ButtonContainer>
        </div>
        :
        <p> Your order is empty </p>
        }
        </CheckoutInner>
    </CheckoutContainer>
export default CheckoutBar;

let FlexBetween = styled.div`
    display: flex;
    justify-content: space-between;
    p {
        margin: .25rem;
    }
`;
let Title = styled.h1`
    margin-top: 0;
`;

let BR = styled.div`
    width: 100%;
    height: 2px;
    background-color: black;
`;
let CheckoutInner = styled.div`
    height: auto;
    background-color:#f0f0f0;
    padding: 2em;
`;
let CheckoutContainer = styled.div`
    overflow: auto;
    height: 100%;
    width: 400px;
    ${media.phone`right: 10px;`}
    ${media.tablet`right 20px;`}
    ${media.desktop`
    right: 30px;
    position: fixed;
    padding-top: 60px;
    `}

`;
let ButtonContainer = styled.div`
    margin-top: 20px;
`;


let Button = styled(Link)`
    margin-top: 10px;
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
        text-transform:capitalize;
    }
`;
