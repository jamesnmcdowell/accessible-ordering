import React from 'react';
import CheckoutBar from './CheckoutBar';
import { connect } from 'react-redux';
import { media, Container } from './Media';

let Cart = ({ cart, total }) =>
    <Container vert>
        <CheckoutBar cart={cart} total={total} />
    </Container>

let mapStateToProps = (state) => {
    let { categories, items, cart } = state;
    let sum = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    let shipping = sum >= 100 ? 0 : 10;
    let tax = (sum * 0.08);
    return { cart: cart, total: { sum: sum, shipping: shipping, tax: tax } };
};

let CartState = connect(
    mapStateToProps
)(Cart);

export default CartState;


