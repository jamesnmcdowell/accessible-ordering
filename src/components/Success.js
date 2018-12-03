import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { media, Container } from './Media';
import styled from 'styled-components';


let Success = ({order, user}) =>
<Container vert>
    <SuccessBox>
        <h1>Thanks {order.firstName} for your order!</h1>
        <p> It will be ready for pickup at {order.pickupTime} </p>
        {order.resturant &&
            <div>
                <p> Our {order.resturant.name} location is at the following address:  </p>  
                <span>{order.resturant.street} </span>
                <br/>
                <span>{order.resturant.city}, {order.resturant.zip}  </span>
            </div>
        }
    </SuccessBox>
</Container>




let mapStateToProps = (state) => {
    let {order, user} = state;

    return {order, user };
};

let SuccessState = connect(
    mapStateToProps
)(Success);

export default SuccessState; 

let SuccessBox = styled.div`
    background-color: #FFC80F;
    padding: 2rem 2rem 4.5rem 2rem;
    max-width: 900px;
    width: auto;
    margin: 0 auto;
    text-align: center;
`;
