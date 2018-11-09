import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import data from './db';

const initialState = {
    items: data.items,
    categories: data.categories,
    cart: data.cart,
    cost: data.ingredientCosts

};

let reducer = (oldState = initialState, action) => {
    console.log(oldState, action);
    let { payload } = action;
    let { cart } = oldState;
    switch (action.type) {
        case 'ADD_TO_CART': {
            let itemMatch = cart.find((item) => item.id === payload.id);
            let itemsNotMatch = cart.filter((item) => item.id !== payload.id);
            let newCart;
            if (itemMatch) {
                let itemMod = { ...payload, quantity: itemMatch.quantity + 1 };
                newCart = itemsNotMatch.concat([itemMod]);
            }
            else {
                let itemMod = { ...payload, quantity: 1 };
                newCart = cart.concat([itemMod]);
            }
            return { ...oldState, cart: newCart };
            break;
        }
        default:
            return oldState;
    }
};

let store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let mapStateToProps = (state) => {
    return {  };
};
let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
};
export default store;




