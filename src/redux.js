import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import data from './db';

const initialState = {
    items: data.items,
    categories: data.categories,

};

let reducer = (oldState = initialState, action) => {
   
            return oldState;
    
};

let store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let mapStateToProps = (state) => {
    return {  };
};
let mapDispatchToProps = (dispatch) => {
    return {  };
};

export default store;




