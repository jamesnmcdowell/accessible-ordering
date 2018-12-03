import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let Success = ({}) =>
<div>
    <h1>Thank you for your order </h1>
    <p>You can pickup your order at 10 </p>
</div>




// let mapStateToProps = (state) => {
//     let sum = state.cart.reduce((total, value) => total + value.quantity, 0);
//     return {d: };
// };

// let SuccessState = connect(
//     mapStateToProps
// )(Success);

export default Success; 