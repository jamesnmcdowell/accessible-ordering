import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let CartBadge = ({ cartNum, cartPrice }) =>
     <span aria-label={`${cartNum} items`} > Cart[{cartNum}] { (cartPrice > 0) ? `$${cartPrice}` : "" } </span>

let mapStateToProps = (state) => {
    // let sum = state.cart.reduce((total, value) => total + value.quantity, 0);
    let sum = state.cart.length;
    return { cartNum: sum, cartPrice: state.cart.reduce((a,c) => a + c.price, 0) };
};

let CartBadgeState = connect(
    mapStateToProps
)(CartBadge);

export default CartBadgeState; 
