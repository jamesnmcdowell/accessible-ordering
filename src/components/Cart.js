import React from 'react';
import CheckoutBar from './CheckoutBar';
import { connect } from 'react-redux';
import { media, Container } from './Media';

let Cart = ({ cart, total, costMap }) =>
    <CheckoutBar costMap={costMap} cart={cart} total={total} />

let mapStateToProps = (state) => {
    let { categories, items, cart, costMap } = state;
    let sum = cart.reduce((a, c) => a + c.price, 0)
    let shipping = sum >= 100 ? 0 : 10;
    let tax = (sum * 0.08);
    return { cart: cart, total: { sum: sum, shipping: shipping, tax: tax }, costMap };
};

let CartState = connect(
    mapStateToProps
)(Cart);

export default CartState;


