'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { loadProducts, getProductById } from './action-creators/products';

import store from './store';
import Login from './components/Login';
import Root from './components/Root';
import Home from './components/Home';
import Product from './components/Product';

import ProductsContainer from './containers/ProductsContainer';

const onProductsEnter = function (nextRouterState) {
    store.dispatch(loadProducts());
};

const onProductEnter = function(nextRouterState) {
    const productId = nextRouterState.params.productId;
    store.dispatch(getProductById(productId));
};

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Root}>
                <IndexRedirect to="/home" />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/products" component={ProductsContainer} onEnter={onProductsEnter} />
                <Route path="/products/:productId" component={Product} onEnter={onProductEnter} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('main')
);
