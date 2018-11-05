import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

let CheckoutBar = ({ cart, total }) =>
    <CheckoutContainer>
        <h2> Checkout Summary </h2>
        <div>
        {cart.map(item =>
            <div>
            <CartItem item={item} />
            <BR />
            </div>
        )}
        </div>
        <FlexBetween>
            <p> Subtotal </p>
            <p> ${(total.sum).toFixed(2)} </p>
        </FlexBetween>
        {/* <FlexBetween>
            <p> Shipping </p>
            <p>{total.shipping > 0 ? "$" + (total.shipping).toFixed(2) : "Free"} </p>
        </FlexBetween> */}
        <FlexBetween>
            <p> Sales Tax </p>
            <p> ${(total.tax).toFixed(2)} </p>
        </FlexBetween>
        <FlexBetween>
            <p> Estimated Total </p>
            <p> ${(total.sum + total.tax).toFixed(2)} </p>
        </FlexBetween>
        <Button> Checkout </Button>
    </CheckoutContainer>
export default CheckoutBar;

let FlexBetween = styled.div`
    display: flex;
    justify-content: space-between;
`;

let BR = styled.div`
    width: 100%;
    height: 2px;
    background-color: black;
`;
let CheckoutContainer = styled.div`
    background-color:#f0f0f0;
    padding: 2em;
`;

let Button = styled.button`
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