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
               <Link className="waves-effect waves-light btn green right"  onClick={() => toggleAdmin(user.id, user.isAdmin)}>
                          Checkout
                            </Link>
                
                  {
                    cart.map((cartItem, idx) => {
                        return (
                            <div className="col s12" key={idx}>
                                    <ul className="collection">
                                     {
                                      
                                      cartItem.products.map((product) => (
                                      <li className="collection-item avatar">
                                      <img src={product.image} alt="" className="circle"/>
                                      <span className="title">{product.name}</span>
                                      <p>Quantity: {product.orderProducts.quantity} <br />
                                          Price: {product.orderProducts.price}
                                      </p>                                     
                                      <Link className="btn-floating btn-small waves-effect waves-light red secondary-content" onClick={() => deleteOrderProduct(order.id, product.id)}><i className="material-icons">delete</i></Link>
                                      </li>
                                      ))
                                      
                                    }
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
        cart: state.orders.cart
    };
};
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Cart);
