import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let CartBadge = ({ cartNum }) =>
    cartNum > 0 && <span aria-label={`${cartNum} items`} > {cartNum} </span>

let mapStateToProps = (state) => {
    let sum = state.cart.reduce((total, value) => total + value.quantity, 0);
    return { cartNum: sum };
};

let CartBadgeState = connect(
    mapStateToProps
)(CartBadge);

export default CartBadgeState; 
