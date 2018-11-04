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

let Router = () =>
    <HashRouter >
        <Shell >
            <Switch>
                <Route path="/" exact component={CategoryScreen} />
                <Route path="/categories" exact component={CategoryScreen} />
                <Route path="/categories/:categoryName" exact component={ItemScreen} />
                <Route path="/categories/:categoryName/:itemId" exact component={ItemCustScreen} />
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