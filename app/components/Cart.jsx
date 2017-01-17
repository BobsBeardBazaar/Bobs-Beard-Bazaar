import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';


const Cart = function (props) {
  return (
      <div className="container">
          <div className="row">
              <h4>Your Cart</h4>
              <h5>Total Cart: {props.cart.length}</h5>
                  {
                    props.cart.map((cart, idx) => {
                        return (
                            <div className="col s12" key{cart.id}>
                                <ul className="collection">
                                  <li className="collection-item avatar">
                                    <span className="title">{order.status}</span>
                                    <CartItem >
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

const mapProps = (state) => {
    return {
        Cart: state.Cart.list
    };
};
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Cart);
