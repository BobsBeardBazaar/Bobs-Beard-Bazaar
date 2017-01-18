'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { loadProducts, getProductById } from './action-creators/products';

import { loadOrders, getOrderById } from './action-creators/orders';

import { getReviewById } from './action-creators/reviews';

import { getUsers } from './action-creators/users';
import { getCartById } from './action-creators/cart';

import store from './store';
import Login from './components/Login';
import Root from './components/Root';
import Home from './components/Home';
import Product from './components/Product';
import Orders from './components/Orders';
import Cart from './components/Cart';
import User from './components/User';

import Users from './components/Users';


import ReviewContainer from './containers/ReviewContainer';
import ProductsContainer from './containers/ProductsContainer';

const onProductsEnter = function (nextRouterState) {
    store.dispatch(loadProducts());
};

const onOrdersEnter = function (nextRouterState) {
    const userId = nextRouterState.params.userId;
    store.dispatch(loadOrders(userId));
};

const onProductEnter = function(nextRouterState) {
    const productId = nextRouterState.params.productId;
    store.dispatch(getProductById(productId));
};

const onReviewEnter = function(nextRouterState) {
    const reviewId = nextRouterState.params.reviewId;
    store.dispatch(getReviewById(reviewId));
};

const onAdminEnter = function(nextRouterState) {
    store.dispatch(getUsers());
};

const onCartEnter = function(nextRouterState) {
    console.log("inside on cart enter");
    const userId = nextRouterState.params.userId;
    store.dispatch(getCartById(userId));
};

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Root}>
                <IndexRedirect to="/home" />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/products" component={ProductsContainer} onEnter={onProductsEnter} />
                <Route path="/orders/:userId" component={Orders} onEnter={onOrdersEnter} />
                <Route path="/cart/:userId" component={Cart} onEnter={onCartEnter} />
                <Route path="/products/:productId" component={Product} onEnter={onProductEnter} />
                <Route path="/reviews/:reviewId" component={ReviewContainer} onEnter={onReviewEnter} />
                <Route path="/users" component={Users} onEnter={onAdminEnter} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('main')
);


