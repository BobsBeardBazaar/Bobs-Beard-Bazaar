
'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import { loadProducts } from './action-creators/products';

import store from './store';
import Jokes from './components/Jokes';
import Login from './components/Login';
import WhoAmI from './components/WhoAmI';
import Root from './components/Root';
import Home from './components/Home';

import ProductsContainer from './containers/ProductsContainer';

const onProductsEnter = function (nextRouterState) {
  store.dispatch(loadProducts());
};

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/products" component={ProductsContainer} onEnter={onProductsEnter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
