import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import data from './db';

const initialState = {
    items: data.items,
    categories: data.categories,
    cart: data.cart,
    cost: data.ingredientCosts,
    costMap: Object.keys(data.ingredientCosts).reduce((a,c)=> (
        {...a, ...data.ingredientCosts[c]}
    ), {})

};

let reducer = (oldState = initialState, action) => {
    console.log(oldState, action);
    let { payload } = action;
    let { cart } = oldState;
    switch (action.type) {
        case 'ADD_TO_CART': {
            let {item, size, added } = payload;
            if (size) {
                let sizeObj = {
                    "small": false,
                    "medium": false,
                    "large": false
                };
                sizeObj[size] = true;
                item.ingredients.size = sizeObj;
                item.price = oldState.cost.size[size];
            }
            if (added) {
                let costIncrease = 0;
                added.forEach( (c) => {
                    costIncrease += oldState.costMap[c];
                })
                item.price += costIncrease;
            }
            // let itemMatch = cart.find((item) => item.id === item.id);
            // let itemsNotMatch = cart.filter((item) => item.id !== item.id);
            // let newCart;
            // if (itemMatch) {
            //     let itemMod = { ...item, quantity: itemMatch.quantity + 1 };
            //     newCart = itemsNotMatch.concat([itemMod]);
            // }
            // else {
            //     let itemMod = { ...item, quantity: 1 };
            //     newCart = cart.concat([itemMod]);
            // }
            return { ...oldState, cart: [...oldState.cart,item]};
            break;
        }
        default:
            return oldState;
    }
};

let store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;




