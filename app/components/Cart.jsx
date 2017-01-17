import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import CartItem from './CartItem';

//should be stateful component
const Cart = ({ cart }) => {
  return (
      <div className="container">
          <div className="row">
              <h4>Your Cart</h4>
              <h5>Total Cart: {cart.length}</h5>
                  {
                    cart.map((cartItem, idx) => {
                        return (
                            <div className="col s12" key={cartItem.id}>
                                <ul className="collection">
                                  <li className="collection-item avatar">
                                    <CartItem cartItem={cartItem}/>
                                  </li>
                                </ul>
                            </div>
                        );
                    })
                }
          </div>
      </div>
  );
};

/* -----------------    CONTAINER     ------------------ */

//cart should be array of products (product_id / order_id in orderProducts)
const mapProps = (state) => {
    return {
        cart: state.cart
    };
};
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Cart);
