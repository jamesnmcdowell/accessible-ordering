import React from 'react';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import ItemScreen from './components/ItemScreen';
import CategoryScreen from './components/CategoryScreen';
import Shell from './components/Shell';
import ItemCustScreen from './components/ItemCustScreen';
import Cart from './components/Cart';
import CheckoutScreen from './components/CheckoutScreen';


let Router = () =>
    <HashRouter >
        <Shell >
            <Switch>
                <Route path="/" exact component={CategoryScreen} />
                <Route path="/categories" exact component={CategoryScreen} />
                <Route path="/categories/:categoryName" exact component={ItemScreen} />
                <Route path="/categories/:categoryName/:itemId" exact component={ItemCustScreen} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/checkout" exact component={CheckoutScreen} />
            </Switch>
        </Shell>
    </HashRouter>

export default Router;


{/* <HashRouter render={(props) => (
        <Shell {...props}>
            <Switch>
                <Route path="/" exact component={CategoryScreen} />
                <Route path="/categories" exact component={CategoryScreen} />
                <Route path="/categories/:categoryName" exact component={ItemScreen} />
                <Route path="/categories/:categoryName/:itemId" exact component={ItemCustScreen} />
            </Switch>
        </Shell>
    )} />    */}