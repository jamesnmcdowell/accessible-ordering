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
    ), {}),
    user: data.user,
    resturants: data.resturants,
    order: {}

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
                console.log(added);
                let costIncrease = 0;
                let paidExtras = [];
                added.forEach( (c) => {
                    if (oldState.costMap[c] > 0) {
                        var obj = {};
                        obj["item"] = c;
                        obj["cost"] = oldState.costMap[c];
                        paidExtras.push(obj);
                    }
                    costIncrease += oldState.costMap[c];
                })
                item.price += costIncrease;
                console.log(paidExtras);
                console.log(item)
                item = Object.assign({ paidExtras: paidExtras }, item);
                console.log(item)
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
        case 'UPDATE_USER': {
            return { ...oldState, user: {...oldState.user, ...action.payload} };

        }
        case 'SET_ORDER': {
            return { ...oldState, order: action.payload};

        }
        default:
            return oldState;
    }
};

let store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;




